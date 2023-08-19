import Header from "../../components/Header.jsx";
import {Box} from "@mui/material";

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
                <Header subtitle={"Welcome to your dashboard"} title={"DASHBOARD"}/>
            </Box>

        </Box>
    );
};

export default Dashboard;