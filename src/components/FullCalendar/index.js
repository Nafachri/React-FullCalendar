import React, { useState } from "react";
import { Modal, Box, Typography, Input, FormLabel } from "@mui/material";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./index.css";

import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button,
  .fc-button.fc-button-primary {
    background: #ff5100;
    background-image: none;
  }
`;
const FullCalendarComps = () => {
  const [isModalEventOpen, setIsModalEventOpen] = useState(false);
  const [isModalDateOpen, setIsModalDateOpen] = useState(false);

  const [events, setEvents] = useState([
    { title: "event 1", date: "2022-12-08" },
    { title: "event 2", date: "2022-12-10" },
  ]);

  const handleModalEventClose = () => {
    setIsModalEventOpen(false);
  };

  const handleEventClick = () => {
    setIsModalEventOpen(true);
  };

  const handleDateClick = () => {
    setIsModalDateOpen(true);
  };

  const handleModalDateClose = () => {
    setIsModalDateOpen(false);
  };

  return (
    <>
      <div style={{ padding: "100px" }}>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            // center: "title",
            right: "custom1,dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          editable={true}
          selectable={true}
          select={(e) => {
            console.log(e);
          }}
        />
      </div>

      {/* Modal Event */}
      <Modal open={isModalEventOpen} onClose={handleModalEventClose}>
        <Box
          position="center"
          sx={{
            height: "70px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}>
          <Typography>Edit Event</Typography>
          <FormLabel>Change Event Name</FormLabel>
          <Input fullWidth disableUnderline placeholder="Change Event Name" />
        </Box>
      </Modal>

      {/* Modal Date */}
      <Modal open={isModalDateOpen} onClose={handleModalDateClose}>
        <Box
          position="center"
          sx={{
            height: "70px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}>
          <Typography>Edit Date</Typography>
          <FormLabel>Change Date</FormLabel>
          <Input fullWidth disableUnderline placeholder="Change Date" />
        </Box>
      </Modal>
    </>
  );
};
export default FullCalendarComps;
