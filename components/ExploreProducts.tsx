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
import Explore from "../public/assets/Subtract.svg";
import Image from "next/image";
import Ant from "../public/assets/antp1.png";
import Pennywise from "../public/assets/pennywise.png";
import AntConfig from "../public/assets/antConfig.png";
import Antfi from "../public/assets/anfi.png";
import Link from "next/link";

function ExploreProducts() {
  return (
    <Box color="white">
      <Box maxWidth="1150px" m="auto">
        {/* <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={"#fff"}
          ml={{ base: "0", md: "6" }}
          textAlign={{ base: "center", md: "left" }}
          className={styles.heading}
        >
          Explore Our <br /> Products
        </Text> */}
        <Box mb="10" mt="16">
          <SimpleGrid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
            m="auto"
            maxWidth="1150px"
            spacing={{ base: "12", lg: "16" }}
          >
                  <Text
          fontSize={"4xl"}
          color={"#fff"}
          ml={{ base: "0", md: "6" }}
          textAlign={{ base: "center", md: "left" }}
          className={styles.heading}
        >
          Explore Our <br /> Products
        </Text>
            <Card
              w="80%"
              m="auto"
              h="400px"
              bgColor="black"
              p="0"
              border="3px solid black"
              borderRadius="20px"
              color="white"
            >
              <CardBody w="100%">
                <Box w={"full"}>
                  <Image src={Ant} alt="B2B" />
                </Box>
                {/* <Text className={styles.heading} fontSize='2xl' fontWeight='bold' ml='8' mt='-10'>AntBuilder</Text> */}
                <Text
                  className={styles.heading}
                  fontSize="2xl"
                  fontWeight="bold"
                  mt="4"
                >
                  AntBuilder
                </Text>
                <Text maxWidth={"260px"} fontSize="16px" mt="2">
                  Our flagship product designed to shape the future with
                  innovative technology solutions by empowering businesses and
                  individuals with user-friendly, affordable, and accessible
                  software.
                </Text>
              </CardBody>
            </Card>

            <Card
              w="80%"
              bgColor="black"
              h="400px"
              m="auto"
              p="0"
              border="3px solid black"
              borderRadius="20px"
              color="white"
            >
              <CardBody w="100%">
                <Box w={"full"}>
                  <Image src={AntConfig} alt="B2B" />
                </Box>
                {/* <Text className={styles.heading} fontSize='2xl' fontWeight='bold' ml='8' mt='-10'>AntConfig</Text> */}
                <Text
                  className={styles.heading}
                  fontSize="2xl"
                  fontWeight="bold"
                  mt="4"
                >
                  AntConfig
                </Text>
                <Text maxWidth={"260px"} fontSize="16px" mt="2">
                  A developer-centric feature flag service with unlimited team
                  size, awesome support, and a reasonable price tag.
                </Text>
              </CardBody>
            </Card>

            <Card
              w="80%"
              bgColor="black"
              h="400px"
              p="0"
              m="auto"
              border="3px solid black"
              borderRadius="20px"
              color="white"
            >
              <CardBody w="100%">
                <Box w={"full"}>
                  <Image src={Pennywise} alt="B2B" />
                </Box>
                {/* <Text className={styles.heading} fontSize='2xl' fontWeight='bold' ml='8' mt='-10'>PennyWise</Text> */}
                <Text
                  className={styles.heading}
                  fontSize="2xl"
                  fontWeight="bold"
                  mt={"4"}
                >
                  PennyWise
                </Text>
                <Text maxWidth={"260px"} fontSize="16px" mt="2">
                  (Adashe/Ajo/Esusu); Revolutionizing financial management with
                  our suite of digital solutions.
                </Text>
              </CardBody>
            </Card>
            <Card
              w="80%"
              bgColor="black"
              h="400px"
              p="0"
              m="auto"
              border="3px solid black"
              borderRadius="20px"
              color="white"
            >
              <CardBody w="100%">
                <Box w={"full"}>
                  <Link href="">
                    <Image src={Antfi} alt="B2B" />
                  </Link>
                </Box>
                {/* <Text className={styles.heading} fontSize='2xl' fontWeight='bold' ml='8' mt='-10'>AntFi</Text> */}
                <Text
                  className={styles.heading}
                  fontSize="2xl"
                  fontWeight="bold"
                  mt="4"
                >
                  AntFi
                </Text>
                <Text maxWidth={"260px"} fontSize="16px" mt="2">
                  Empowering businesses and individuals with cross-board finance
                  solutions, making financial management simpler and more
                  efficient.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default ExploreProducts;
