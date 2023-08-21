import Header from "../../components/Header.jsx";
import {Box,useTheme,Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../Theme.js";

const FAQ = () => {
    const theme = useTheme()
    const colors =tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <Header title={"FAQ"} subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        To get started, you will need to create an account. You can do this by clicking on the button below.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        To get started, you will need to create an account. You can do this by clicking on the button below.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        To get started, you will need to create an account. You can do this by clicking on the button below.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        To get started, you will need to create an account. You can do this by clicking on the button below.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", color: colors.primary.main}}>
                        To get started, you will need to create an account. You can do this by clicking on the button below.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
