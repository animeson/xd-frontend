import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import MidiStatistics from "./components/MidiStatistics";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  let currentDate = new Date();
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MidiStatistics
          title={"Job name"}
          amount={"xd"}
        />
        <MidiStatistics
          title={"Hourly payment"}
          amount={"25" + " at one o'clock"}
        />
        <MidiStatistics
          title={"Currency"}
          amount={"PLN"}
        />
        <MidiStatistics
          title={"Salary type"}
          amount={"NETTO"}
        />
      </SimpleGrid>
      <Grid
          my='26px'
          gap='24px'>
        <ActiveUsers
          title={"Monthly salary in" + " " + currentDate.toLocaleString('en-US', { month: 'long' }) + " " + currentDate.getFullYear()}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Salary by month"}
          captions={["Total working hours", "Hourly payment", "Data", "Monthly salary"]}
          data={dashboardTableData}
        />
        {/*<OrdersOverview*/}
        {/*  title={"Orders Overview"}*/}
        {/*  amount={30}*/}
        {/*  data={timelineData}*/}
        {/*/>*/}
      </Grid>
    </Flex>
  );
}
