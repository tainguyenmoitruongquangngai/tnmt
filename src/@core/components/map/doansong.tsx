import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'

const MapDoanSong = dynamic(() => import('src/@core/components/map/map'), { ssr: false })

// Dữ liệu về các đoạn sông và tên file KML
const riverData = [
  { id: 1, name: 'Sông Trà Bồng 1', file: 'songtrabong1.kml', },
  { id: 2, name: 'Sông Hà Đồi', file: 'songhadoi.kml' },
  { id: 3, name: 'Sông Bin Dần', file: 'songbindan.kml' },
  { id: 4, name: 'Sông Sâu', file: 'songsau.kml' }

  // Thêm các đoạn sông khác nếu cần
]

// Component bảng hiển thị dữ liệu
const RiverTable = () => {
    const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
    const [mapZoom] = useState(9)
    const [selectedRiver, setSelectedRiver] = useState<any>(null)

    const handleRiverSelection = (river:any) => {
      setSelectedRiver(river)
      console.log("Selected river:", river)
    }

  return (
    <div>
      <Grid xs={12} md={12} sx={{ height: '55vh', overflow: 'hidden' }}>
      <MapDoanSong center={mapCenter} setMapCenter={setMapCenter} zoom={mapZoom} mapData={riverData} selectedKmlFile={selectedRiver ? selectedRiver.file : null} loading={false} />
      </Grid>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Sông</th>
            <th>File KML</th>
          </tr>
        </thead>
        <tbody>
          {riverData.map(river => (
            <tr key={river.id} onClick={() => handleRiverSelection(river)}>
              <td>{river.id}</td>
              <td>{river.name}</td>
              <td>{river.file}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RiverTable
