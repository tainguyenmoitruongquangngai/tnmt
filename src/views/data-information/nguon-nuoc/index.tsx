import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { SyntheticEvent, useState } from "react";
import CorridorRiver from "./RiverCoridor";
import CorridorLake from "./LakeCorridor";


const NguonNuoc = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="ground water reserve">
                    <Tab label="Sông,suối nội tỉnh " value="1" />
                    <Tab label="Ao, hồ, đầm tự nhiên" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1"><CorridorRiver /></TabPanel>
            <TabPanel value="2"><CorridorLake /></TabPanel>
            
        </TabContext>
    )
}
export default NguonNuoc