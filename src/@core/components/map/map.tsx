import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ReactLeafletKml from "react-leaflet-kml";
import { BingLayer } from '../bingmap';
import { GeoJSON } from 'react-leaflet';

const { BaseLayer } = LayersControl;

const SetViewOnClick = ({ coords, zoom }: any) => {
	const map = useMap();
	map.flyTo(coords, zoom, {
		duration: 1
	});

	return null;
}

const lineStyle = (feature: any) => {
	return {
		fillColor: "transparent",
		weight: 3,
		opacity: 1,
		color: "orange", //Outline color
		fillOpacity: 1,
		className: "line-layer " + feature.properties.id
	};
}

export default function Map({ center, zoom, mapData }: any) {

	const [bing_key, setBingKey] = useState("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L");
const [kml, setKml] = useState<any>(null);

useEffect(() => {
    setBingKey("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L");
    
    // Function to fetch and parse KML files
    const fetchAndParseKML = (fileUrl:any) => {
        return fetch(fileUrl)
            .then((res) => res.text())
            .then((kmlText) => {
                const parser = new DOMParser();

                return parser.parseFromString(kmlText, "text/xml");
            });
    };

    // Array of KML file URLs to fetch and parse
    const kmlFiles = [
        "/kml/phandoansong79song_QN.kml",
        "/kml/tinh-quangngai.kml" // Replace with the URL of the second KML file
    ];

    // Fetch and parse each KML file, then combine them
    Promise.all(kmlFiles.map(fetchAndParseKML))
        .then((kmlDocuments) => {
            // Create a new KML document to hold the combined data
            const combinedKML = document.implementation.createDocument("", "kml", null);
            const combinedDocumentElement = combinedKML.documentElement;

            // Loop through each parsed KML document and append its contents to the combined document
            kmlDocuments.forEach((kmlDocument) => {
                const kmlRoot = kmlDocument.getElementsByTagName("kml")[0];
                const copiedRoot = combinedKML.importNode(kmlRoot, true);
                combinedDocumentElement.appendChild(copiedRoot);
            });

            // Set the combined KML document as state
            setKml(combinedKML);
        })
        .catch((error) => {
            console.error("Error fetching or parsing KML files:", error);
        });
}, []);



	return (
		<>
			<MapContainer attributionControl={false} center={center} zoom={zoom} style={{ height: '100%' }}>
				<LayersControl position='topright'>
					<BaseLayer name='Bản đồ hành chính'>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					</BaseLayer>
					<BaseLayer name='Bản đồ đường'>
						<BingLayer bingkey={bing_key} type="Road" />
					</BaseLayer>
					<BaseLayer checked name='Bản đồ vệ tinh'>
						<BingLayer bingkey={bing_key} type="AerialWithLabels" />
					</BaseLayer>
				</LayersControl>
				<GeoJSON data={mapData} style={lineStyle} onEachFeature={(feature, layer) => {
					layer.on({
						click: () => {
							layer.bindPopup(feature.properties.detailContent, { closeOnClick: true, autoClose: true }).openPopup()
						},
						mouseover: (e) => {
							e.target.setStyle({
								color: '#079Đ9',
								opacity: 1,
								weight: 3
							});
						},
						mouseout: (e) => {
							e.target.setStyle({
								color: 'orange',
								opacity: 1,
								weight: 3
							});
						}
					});
				}} />
				<SetViewOnClick coords={center} zoom={zoom} />
				{kml && <ReactLeafletKml kml={kml} />}
			</MapContainer>
		</>
	);
}