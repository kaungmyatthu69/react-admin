
import Header from "../../components/Header.jsx";
import BarChart from "../../components/BarChart.jsx";
import {Box} from "@mui/material"

const Bar = () => {
    return (
        <Box m='20px'>
            <Header subtitle="Simple Bar Chart" title="Bar Chart"/>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    );
};

export default Bar;