import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  IconButton,
  List,
  ListItem,
  ListIcon,
  Card,
  CardHeader,
  SimpleGrid,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Bg from "../public/assets/JoinBg2.svg";
import ListIcon2 from "../public/assets/listIcon.svg";
function JoinJourney() {
  return (
    <Box color="white"  mb='24'className={styles.text2}>
    <Box>
<Card bgColor={'rgba(18,17,26)'} borderBottomRightRadius={'0'}  maxWidth={'500px'} border={'3px solid white'}>
    <CardHeader>

    <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          
          color={"#fff"}
          textAlign="center"
          className={styles.heading}
        >
          Vision
        </Text>

    </CardHeader>
    <CardBody>
        <Text  color={"#fff"} fontSize={"2xl"} textAlign="center" >To lead the charge in revolutionizing technology with a relentless commitment to innovation and people-centric solutions. </Text>
    </CardBody>
</Card>
      </Box>
    </Box>
  );
}

export default JoinJourney;
