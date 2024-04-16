import { Flex,Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfileInformation = ({
  title,
  description,
  name,
  mobile,
  email,
  location,
}) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card>
      <CardHeader >
        <Text>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column'>
          <Text>
            {description}
          </Text>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Username:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {name}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Mobile:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {mobile}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
              Location:{" "}
            </Text>
            <Text fontSize='md' color='gray.500' fontWeight='400'>
              {location}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProfileInformation;
