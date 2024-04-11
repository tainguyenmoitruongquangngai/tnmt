import React from "react";
import { MapContainer, TileLayer, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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

	const bing_key = "AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L"

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
								color: '#cc34eb',
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
			</MapContainer>
		</>
	);
}