import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import { useState} from 'react'
import ExapndMoreIcon from '@mui/icons-material/ExpandMore'

export const MuiAccordian = () => {
    const [expanded,setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded : boolean, panel : string)=> { 
        setExpanded(isExpanded?panel:false)
    }
  return (
    <div>
      <Accordion
        // gutterBottom
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExapndMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi fugit
          deserunt libero quos voluptas alias cumque id repudiandae esse et, qui
          ut vero debitis hic reiciendis facere temporibus? Magnam, possimus.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExapndMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi fugit
          deserunt libero quos voluptas alias cumque id repudiandae esse et, qui
          ut vero debitis hic reiciendis facere temporibus? Magnam, possimus.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExapndMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi fugit
          deserunt libero quos voluptas alias cumque id repudiandae esse et, qui
          ut vero debitis hic reiciendis facere temporibus? Magnam, possimus.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

