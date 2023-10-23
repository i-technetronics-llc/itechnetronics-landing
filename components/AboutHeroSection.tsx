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
import Heroimg from "../public/assets/Abouthero.svg";
function About() {
  return (
    <Box color="white" m="auto" className={styles.text2} h='100vh'>

      <Box display={{base:'flex'}} justifyContent={'space-between'} gap='24'>
      <Box maxWidth={'531px'}>
        <Text
          fontSize={"5xl"}
          fontWeight={"bold"}
          color={"#fff"}
        mb='8'
          className={styles.heading}
        >
          Your life, made easier <br /> with our products.
        </Text>
        <Text color={"white"} lineHeight={'40px'} fontSize={{ base: "18px", md: "20px" }}>
          iTechnetronics is on a mission to create innovative, people-centric
          technology solutions that simplify and enhance lives, ensuring
          accessibility and affordability for all.
        </Text>
      </Box>
      <Box >
        <Image src={Heroimg} height={400} alt="hero" />
      </Box>

    </Box>
    </Box>
  );
}

export default About;
