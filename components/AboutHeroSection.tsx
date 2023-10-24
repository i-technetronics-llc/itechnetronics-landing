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
import Explore from "../public/assets/aboutsubtract.svg";
function About() {
  return (
    <Box color="white" m="auto" className={styles.text2}  maxWidth={'1200px'}>

      <Box display={{base:'flex'}} justifyContent={'space-between'} gap='24'>
      <Box maxWidth={'531px'}>
        <Text
          fontSize={"5xl"}
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
        </Card>

    </Box>
  );
}

export default About;
