// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import ChartStatistics from "./ChartStatistics";

const ActiveUsers = ({ title, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  let currentDate = new Date();
  return (
    <Card p='16px'>
      <CardBody>
        <Flex direction='column' w='100%'>
          {chart}
          <Flex direction='column' mt='5px' mb='15px' alignSelf='flex-start'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
              {title}
            </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <ChartStatistics
              title={"Total working hours"}
              amount={"231"}/>
            <ChartStatistics
              title={"Hourly payment"}
              amount={"321"}/>
            <ChartStatistics
              title={"Monthly salary"}
              amount={"322"}/>
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
