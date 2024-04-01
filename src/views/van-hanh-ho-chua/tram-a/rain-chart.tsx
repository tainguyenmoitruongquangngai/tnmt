import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material'

import ReactApexcharts from 'src/@core/components/react-apexcharts';
import { ApexOptions } from "apexcharts";

const MonitoringSFChart = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const options: ApexOptions = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
        },
        title: {
          text: 'Trạm Quảng Ngãi',
          align: 'center'
        },
        grid: {
          borderColor: '#f1f1f1',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['24/10/2023 15:15:00', '24/10/2023 15:20:00', '24/10/2023 15:25:05', '24/10/2023 15:30:05', '24/10/2023 15:35:05'],
        },
        markers: {
          size: 0,
          hover: {
              sizeOffset: 6 
          }
        },
        tooltip: {
            enabled: true,
            onDatasetHover: {
              highlightDataSeries: true,
            },
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                },
            ]
        },
    };

    const series = [{
        name: "Lượng mưa",
        data: []
    },{
        name: "Nhiệt độ",
        data: []
    },{
        name: "Độ ẩm",
        data: []
    },{
        name: "Tốc độ gió",
        data: []
    }];

    return (
        <Grid>
            <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}><img src='/images/icon/live.gif' width={25} height={20} alt="live" />&nbsp;Thời gian hiện tại: {time.toLocaleString('zh-HK', { hour12: false })}</Typography>
            <ReactApexcharts options={options} series={series} type="line" height={450}/>
        </Grid>
    )
}

export default MonitoringSFChart
