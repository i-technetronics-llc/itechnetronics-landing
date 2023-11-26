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
import AboutCards from "./AboutCard";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Bg from "../public/assets/JoinBg2.svg";
import ListIcon2 from "../public/assets/listIcon.svg";
import Heroimg from "../public/assets/Abouthero.svg";
import Explore from "../public/assets/aboutsubtract.svg";
function About() {
  return (
    <Box color="white" m="auto" className={styles.text2} maxWidth={"1200px"}>
      <Box
        mb="98px"
        display={{ base: "flex" }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        gap="63px"
        m='auto'
        mx={{ base: "12px", lg: "auto" }}
      >
        <Box maxWidth={"581px"}  m='auto'>
          <Text
            fontSize={{ base: "34px", md: "48px" }}
            color={"#fff"}
            mb="8"
            textAlign={{ base: "center", md: "left" }}
            className={styles.heading}
          >
            Your life, made easier <br /> with our products.
          </Text>
          <Text
            color={"white"}
            fontSize={{ base: "20px", md: "32px" }}
          >
            iTechnetronics is on a mission to create innovative, people-centric
            technology solutions that simplify and enhance lives, ensuring
            accessibility and affordability for all.
          </Text>
        </Box>
        <Box m='auto'>
          <Box maxWidth="558px">
            <Image src={Heroimg} width={568} height={400} alt="hero" />
          </Box>
        </Box>
      </Box>

      <AboutCards />

      {/* 
    <Card
          bgColor={"rgb(18,17,36)"}
          maxWidth={{ base: "500px", md: "420px" }}
          margin={{ base: "auto" }}
          borderRadius="20px"
          color="white"
          order={{base: '1', md: '2'}}
        >
          <CardBody w="100%">
            <Box maxWidth={"250px"}>
              <Image src={Explore} alt="B2B" />
            </Box>
            <Text
              className={styles.heading}
              fontSize={{ base: "lg", lg: "lg" }}

              ml={{ base: "7", lg: "8" }}
              mt={{ base: "-10", sm: "-8", lg: "-14" }}
            >
             Ahmed Faruk
            </Text>
          </CardBody>
        </Card> */}
    </Box>
  );
}

export default About;
