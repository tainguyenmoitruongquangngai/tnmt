import React, { useCallback, useEffect, useState } from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ReactLeafletKml from 'react-leaflet-kml'
import { BingLayer } from '../bingmap'
import { GeoJSON } from 'react-leaflet'

const { BaseLayer } = LayersControl

const lineStyle = (feature: any) => {
  return {
    fillColor: 'transparent',
    weight: 3,
    opacity: 1,
    color: 'orange', //Outline color
    fillOpacity: 1,
    className: 'line-layer ' + feature.properties.id
  }
}

function calculateBounds(kmlDoc:any) {
  const coords = kmlDoc.getElementsByTagName('coordinates');
  let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;

  for (let i = 0; i < coords.length; i++) {
    const points = coords[i].textContent.trim().split(/\s+/);
    points.forEach((point:any) => {
      const parts = point.split(',');
      const lng = parseFloat(parts[0]);
      const lat = parseFloat(parts[1]);
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
    });
  }

  if (minLat === Infinity || maxLat === -Infinity || minLng === Infinity || maxLng === -Infinity) {
    return null; // Không tìm thấy tọa độ hợp lệ
  }

  return [[minLat, minLng], [maxLat, maxLng]];
}

export default function MapDoanSong({ center, zoom, mapData, selectedKmlFile }: any) {
  const [bing_key] = useState('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L');
  const [kml, setKml] = useState<Document | null>(null);
  const [mapCenter, setMapCenter] = useState(center);
  const [mapZoom, setMapZoom] = useState(zoom);

  const fetchAndParseKML = useCallback((fileUrl:any) => {
    fetch(fileUrl)
      .then(response => response.text())
      .then(kmlText => {
        const parser = new DOMParser();
        const kmlDoc = parser.parseFromString(kmlText, 'text/xml');
        const bounds = calculateBounds(kmlDoc);
        if (bounds) {
          const center = {
            lat: (bounds[0][0] + bounds[1][0]) / 2,
            lng: (bounds[0][1] + bounds[1][1]) / 2
          };
          setMapCenter(center);
          setMapZoom(12);
        }
        setKml(kmlDoc);
      })
      .catch(error => {
        console.error('Error fetching or parsing KML file:', error);
        setKml(null);
      });
  }, []);

  useEffect(() => {
    const kmlFilePath = selectedKmlFile ? `/kml/doansong/${selectedKmlFile}` : '/kml/doansong/phandoansong79song_QN.kml';
    fetchAndParseKML(kmlFilePath);
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
        <GeoJSON
          data={mapData}
          style={lineStyle}
          onEachFeature={(feature, layer) => {
            layer.on({
              click: () => {
                layer.bindPopup(feature.properties.detailContent, { closeOnClick: true, autoClose: true }).openPopup()
              },
              mouseover: e => {
                e.target.setStyle({
                  color: '#079Đ9',
                  opacity: 1,
                  weight: 3
                })
              },
              mouseout: e => {
                e.target.setStyle({
                  color: 'orange',
                  opacity: 1,
                  weight: 3
                })
              }
            })
          }}
        />
        { kml && <ReactLeafletKml kml={kml} key={selectedKmlFile} /> }
      </MapContainer>
    </>
  )
}
