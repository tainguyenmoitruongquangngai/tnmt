import React, { useEffect, useState } from 'react'
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

export default function MapDoanSong({ center, zoom, mapData, selectedKmlFile,setMapCenter }: any) {
  const [bing_key, setBingKey] = useState('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L')
  const [kml, setKml] = useState<any>(null)

   // Array of KML file URLs to fetch and parse
   const [kmlFiles, setKmlFiles] = useState<string[]>([])

  // Cập nhật trung tâm và zoom của bản đồ dựa trên tên tệp KML được chọn
  useEffect(() => {
    if (selectedKmlFile) {
      // Fetch và xử lý tệp KML
      const kmlFilePath = `/kml/doansong/${selectedKmlFile}`
      setKmlFiles(prevKmlFiles => [...prevKmlFiles, kmlFilePath])
      kmlFiles.push(kmlFilePath) 
      fetch(kmlFilePath)
        .then(res => res.text())
        .then(kmlText => {
          // Phân tích tệp KML
          const parser = new DOMParser()
          const kmlDocument = parser.parseFromString(kmlText, 'text/xml')

          // Tìm tất cả các điểm (Point) hoặc các đa giác (Polygon) trong tệp KML
          const placemarks = kmlDocument.querySelectorAll('Placemark')

          // Lưu trữ tất cả các tọa độ từ các điểm hoặc các đa giác
          const coordinates: [number, number][] = []
          placemarks.forEach(placemark => {
            const pointElement = placemark.querySelector('Point')
            const polygonElement = placemark.querySelector('Polygon')
            if (pointElement) {
              // Nếu là điểm, lấy tọa độ của điểm và thêm vào mảng coordinates
              const coordinatesElement = pointElement.querySelector('coordinates')
              if (coordinatesElement) {
                const coordinatesText = coordinatesElement.textContent
                if (coordinatesText) {
                  const [longitude, latitude] = coordinatesText.split(',')
                  coordinates.push([parseFloat(longitude), parseFloat(latitude)])
                }
              }
            } else if (polygonElement) {
              // Nếu là đa giác, lấy tọa độ trung bình của tất cả các điểm và thêm vào mảng coordinates
              const coordinatesElements = polygonElement.querySelectorAll('coordinates')
              let totalLongitude = 0
              let totalLatitude = 0
              let numPoints = 0
              coordinatesElements.forEach(coordinatesElement => {
                const points = coordinatesElement.textContent!.trim().split(' ')
                points.forEach(point => {
                  const [longitude, latitude] = point.split(',')
                  totalLongitude += parseFloat(longitude)
                  totalLatitude += parseFloat(latitude)
                  numPoints++
                })
              })
              if (numPoints > 0) {
                const avgLongitude = totalLongitude / numPoints
                const avgLatitude = totalLatitude / numPoints
                coordinates.push([avgLongitude, avgLatitude])
              }
            }
          })

          // Tính tọa độ trung tâm bằng cách lấy trung bình của tất cả các tọa độ
          let centerLongitude = 0
          let centerLatitude = 0
          coordinates.forEach(coordinate => {
            centerLongitude += coordinate[0]
            centerLatitude += coordinate[1]
          })
          centerLongitude /= coordinates.length
          centerLatitude /= coordinates.length

          // Đặt trung tâm và mức zoom của bản đồ
          setMapCenter([centerLongitude, centerLatitude])
        })
        .catch(error => {
          console.error('Error fetching or parsing KML file:', error)
        })
    }
  }, [selectedKmlFile])

  console.log(selectedKmlFile);
  

  useEffect(() => {
    setBingKey('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L')
  
    // Function to fetch and parse KML files
    const fetchAndParseKML = (fileUrl: any) => {
      return fetch(fileUrl)
        .then(res => res.text())
        .then(kmlText => {
          const parser = new DOMParser()
  
          return parser.parseFromString(kmlText, 'text/xml')
        })
    }
  
    console.log(kmlFiles)
  
    // Fetch and parse each KML file, then combine them
    Promise.all(kmlFiles.map(fetchAndParseKML))
      .then(kmlDocuments => {
        // Create a new KML document to hold the combined data
        const combinedKML = document.implementation.createDocument('', 'kml', null)
        const combinedDocumentElement = combinedKML.documentElement
  
        // Loop through each parsed KML document and append its contents to the combined document
        kmlDocuments.forEach(kmlDocument => {
          const kmlRoot = kmlDocument.getElementsByTagName('kml')[0]
          const copiedRoot = combinedKML.importNode(kmlRoot, true)
          combinedDocumentElement.appendChild(copiedRoot)
        })
  
        // Set the combined KML document as state
        setKml(combinedKML)
      })
      .catch(error => {
        console.error('Error fetching or parsing KML files:', error)
      })
  }, [kmlFiles]) // Update when kmlFiles changes

  return (
    <>
      <MapContainer attributionControl={false} center={center} zoom={zoom} style={{ height: '100%' }}>
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
        {kml && <ReactLeafletKml kml={kml} />}
      </MapContainer>
    </>
  )
}
