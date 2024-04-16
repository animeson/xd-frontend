import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import React from "react";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";

function Profile() {
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column'>
      <Header
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Esthera Jackson"}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <ProfileInformation
          name={"Esthera Jackson"}
          mobile={"(44) 123 1234 123"}
          email={"esthera@simmmple.com"}
          location={"United States"}
        />
      </Grid>
    </Flex>
  );
}

export default Profile;
