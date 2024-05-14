import React, { useCallback, useEffect, useState } from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ReactLeafletKml from 'react-leaflet-kml'
import { BingLayer } from '../bingmap'

const { BaseLayer } = LayersControl

// const lineStyle = (feature: any) => {
//   return {
//     fillColor: 'transparent',
//     weight: 3,
//     opacity: 1,
//     color: 'orange', //Outline color
//     fillOpacity: 1,
//     className: 'line-layer ' + feature.properties.id
//   }
// }

function calculateBounds(kmlDoc: any) {
  const coords = kmlDoc.getElementsByTagName('coordinates');
  let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;

  for (let i = 0; i < coords.length; i++) {
    const points = coords[i].textContent.trim().split(/\s+/);
    points.forEach((point: any) => {
      const parts = point.split(',');
      const lng = parseFloat(parts[0]);
      const lat = parseFloat(parts[1]);
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
    });
  }

  return (minLat === Infinity || maxLat === -Infinity || minLng === Infinity || maxLng === -Infinity) ? null : [[minLat, minLng], [maxLat, maxLng]];
}

export default function MapDoanSong({ center, zoom,  selectedKmlFile }: any) {
  const [bing_key] = useState('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L');
  const [defaultKml, setDefaultKml] = useState<Document | null>(null); // State for the default KML
  const [selectedKml, setSelectedKml] = useState<Document | null>(null); // State for the selected KML
  const [mapCenter, setMapCenter] = useState(center);
  const [mapZoom, setMapZoom] = useState(zoom);

  const fetchAndParseKML = useCallback(async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      const kmlText = await response.text();
      const parser = new DOMParser();

      return parser.parseFromString(kmlText, 'text/xml');
    } catch (error) {
      console.error('Error fetching or parsing KML file:', error);

      return null;
    }
  }, []);

  useEffect(() => {
    // Load the default KML file
    const loadDefaultKml = async () => {
      const kmlDoc = await fetchAndParseKML('/kml/doansong/phandoansong79song_QN.kml');

      setDefaultKml(kmlDoc);
    };
    loadDefaultKml();
  }, [fetchAndParseKML]);

  useEffect(() => {
    // Load the selected KML file if it's different from the default
    const loadSelectedKml = async () => {
      if (selectedKmlFile && selectedKmlFile !== 'phandoansong79song_QN.kml') {
        const kmlDoc = await fetchAndParseKML(`/kml/doansong/${selectedKmlFile}`);
        setSelectedKml(kmlDoc);
        const bounds = calculateBounds(kmlDoc);
        if (bounds) {
          setMapCenter({
            lat: (bounds[0][0] + bounds[1][0]) / 2,
            lng: (bounds[0][1] + bounds[1][1]) / 2
          });
          setMapZoom(12);
        }
      }
    };
    loadSelectedKml();
  }, [selectedKmlFile, fetchAndParseKML]);

  
  
  
  return (
    <>
    {console.log('KML loaded:', selectedKmlFile)}
      <MapContainer attributionControl={false} center={mapCenter} zoom={mapZoom} style={{ height: '100%' }} key={selectedKmlFile}>
        <LayersControl position='topright'>
          <BaseLayer name='Bản đồ hành chính'>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          </BaseLayer>
          <BaseLayer name='Bản đồ đường'>
            <BingLayer bingkey={bing_key} type='Road' />
          </BaseLayer>
          <BaseLayer checked name='Bản đồ vệ tinh'>
            <BingLayer bingkey={bing_key} type='AerialWithLabels' />
          </BaseLayer>
        </LayersControl>
        
        {defaultKml && <ReactLeafletKml kml={defaultKml} key="default" />}
        {selectedKml && <ReactLeafletKml kml={selectedKml} key={selectedKmlFile} />}
      </MapContainer>
    </>
  )
}
