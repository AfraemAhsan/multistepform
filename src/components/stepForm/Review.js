import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,

    zip,
    phone,
    email,
  } = formData;
  return (
    <Container maxWidth="sm">
      <h2>Review</h2>
      <RenderAccordion
        summary="Names"
        go={go}
        details={[
          { "First Name ": firstName },
          { "last Name ": lastName },
          { "Nick Name ": nickName },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[{ "Address ": address }, { "City ": city }, { " Zip ": zip }]}
      />
      <RenderAccordion
        summary="Contact"
        go={go}
        details={[{ Phone: phone }, { "Email ": email }]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    </Container>
  );
};
export default Review;
export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];
          console.log();
          return (
            <ListItemText key={index}>{`${objKey}:${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          components="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);

