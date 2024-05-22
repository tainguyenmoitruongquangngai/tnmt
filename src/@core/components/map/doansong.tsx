import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';

import { getData } from 'src/api/axios';
import { calculateBounds, fetchAndParseKML } from 'src/@core/components/map/utils';

const MapDoanSong = dynamic(() => import('src/@core/components/map/map'), { ssr: false });

const RiverTable = () => {
    const [mapCenter, setMapCenter] = useState([15.012172, 108.676488]);
    const [mapZoom, setMapZoom] = useState(9);
    const [selectedRiver, setSelectedRiver] = useState<any>(null);
    console.log(selectedRiver);
    
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const handleRiverSelection = useCallback(async (river) => {
        setSelectedRiver(river);
        try {
            const kmlDoc = await fetchAndParseKML(`${river.fileKML}`);
            const bounds = calculateBounds(kmlDoc);
            if (bounds) {
                setMapCenter(bounds.center);
                setMapZoom(bounds.zoom);
            }
        } catch (error) {
            console.error('Error loading KML:', error);
        }
    }, []);

    useEffect(() => {
        async function getDataReport1() {
            setLoading(true);
            try {
                const response = await getData('PhanDoanSong/danh-sach');
                setData(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getDataReport1();
    }, []);

    useEffect(() => {
        if (!selectedRiver) {
            setMapCenter([15.012172, 108.676488]); // Mặc định trung tâm
            setMapZoom(9); // Mặc định zoom
        }
    }, [selectedRiver]);
console.log(selectedRiver);

    return (
        <div>
            <Grid sx={{ height: '55vh', overflow: 'hidden' }}>
                <MapDoanSong 
                    center={mapCenter} 
                    zoom={mapZoom} 
                    mapData={data} 
                    selectedKmlFile={selectedRiver ? selectedRiver.fileKML : null} 
                    loading={loading} 
                    selectedRiver={selectedRiver}
                />
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
                    {data.map(river => (
                        <tr key={river.id} onClick={() => handleRiverSelection(river)}>
                            <td>{river.id}</td>
                            <td>{river.phanDoan}</td>
                            <td>{river.fileKML}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RiverTable;
