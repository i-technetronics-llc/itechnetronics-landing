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
    <Box color="white" my="14" className={styles.text2}>
      <Box display={'flex'} gap={{base:'8', md:'0'}} flexDir={{base:'column', md:'row'}} m='auto'>
        <Card
          bgColor={"rgba(18,17,26)"}
          borderBottomRightRadius={"0"}
          maxWidth={"500px"}
          m='auto'
          // border={"2px solid white"}
        >
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
            <Text color={"#fff"} fontSize={{base:'md', md:'xl'}} textAlign="center">
              To lead the charge in revolutionizing technology with a relentless
              commitment to innovation and people-centric solutions.{" "}
            </Text>
          </CardBody>
        </Card>
        <Card
          bgColor={"rgba(18,17,26)"}
          borderBottomRightRadius={"0"}
          maxWidth={"500px"}
          m='auto'
          boxShadow={'lg'}
          // border={"3px solid white"}
        >
          <CardHeader>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"#fff"}
              textAlign="center"
              className={styles.heading}
            >
              Mission
            </Text>
          </CardHeader>
          <CardBody>
            <Text color={"#fff"} fontSize={{base:'md', md:'xl'}} textAlign="center">
            To create innovative, people-centric technology solutions to reshape the future of technology, making it equitable, efficient, and user-friendly for all. 
            </Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default JoinJourney;
