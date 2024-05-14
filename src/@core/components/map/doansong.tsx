import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';
import { fetchAndParseKML, calculateBounds } from './utils'; // Giả sử các hàm này được nhập từ một file utility riêng

const MapDoanSong = dynamic(() => import('src/@core/components/map/map'), { ssr: false });

const riverData = [
  { id: 1, name: 'Sông Trà Bồng 4', file: 'songtrabong4.kml' },
  { id: 2, name: 'Sông Hà Doi', file: 'songhadoi.kml' },
  { id: 3, name: 'Sông Bin Dần', file: 'songbindan.kml' },
  { id: 4, name: 'Sông Sâu', file: 'songsau.kml' }
];

const RiverTable = () => {
    const [mapCenter, setMapCenter] = useState([15.012172, 108.676488]);
    const [mapZoom, setMapZoom] = useState(9);
    const [selectedRiver, setSelectedRiver] = useState<any>(null)

    const handleRiverSelection = useCallback(async (river) => {
      setSelectedRiver(river);
      const kmlDoc = await fetchAndParseKML(`/kml/doansong/${river.file}`);
      const bounds = calculateBounds(kmlDoc);
      if (bounds) {
        setMapCenter(bounds.center);
        setMapZoom(bounds.zoom);
        console.log("New center coordinates:", bounds.center, "New zoom level:", bounds.zoom);
      }
    }, []);

    useEffect(() => {
      if (!selectedRiver) {
        setMapCenter([15.012172, 108.676488]); // Mặc định trung tâm
        setMapZoom(9); // Mặc định zoom

      }
    }, [selectedRiver]);
    

    return (
      <div>
        <Grid sx={{ height: '55vh', overflow: 'hidden' }}>
        <MapDoanSong center={mapCenter} zoom={mapZoom} mapData={riverData} selectedKmlFile={selectedRiver ? selectedRiver.file : null} loading={false} />
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
    );
};

export default RiverTable;
