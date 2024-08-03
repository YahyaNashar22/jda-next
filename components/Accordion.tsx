import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";

import arrow_down from "../public/arrow_down.png";
import Image from "next/image";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
          fontSize: 20,
          width: "36rem",
          borderBottom: "1px solid gray",
        }}
      >
        <AccordionSummary
          expandIcon={<Image src={arrow_down} alt="arrow down" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Short description about question
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
          fontSize: 20,
          width: "36rem",
          borderBottom: "1px solid gray",
        }}
      >
        <AccordionSummary
          expandIcon={<Image src={arrow_down} alt="arrow down" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Short description about question
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
          fontSize: 20,
          width: "36rem",
          borderBottom: "1px solid gray",
        }}
      >
        <AccordionSummary
          expandIcon={<Image src={arrow_down} alt="arrow down" />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          Short description about question
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
          fontSize: 20,
          width: "36rem",
          borderBottom: "1px solid gray",
        }}
      >
        <AccordionSummary
          expandIcon={<Image src={arrow_down} alt="arrow down" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Short description about question
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
