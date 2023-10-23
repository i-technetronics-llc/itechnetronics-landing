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
import Explore from "../public/assets/Subtract.svg";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function ProductsPage() {
  return (
    <Box
      color="white"
      className={styles.text2}
      // h="800vh"
      maxWidth={"1200px"}
      bgColor={"rgb(11,10,22)"}
      m="auto"
    >
      <Box
        display={{ base: "flex" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        gap="12"
      >
        <Card
          bgColor={"rgb(18,17,36)"}
          maxWidth={{ base: "500px", md: "420px" }}
          margin={{ base: "auto" }}
          borderRadius="20px"
          color="white"
        >
          <CardBody w="100%">
            <Box maxWidth={"250px"}>
              <Image src={Explore} alt="B2B" />
            </Box>
            <Text
              className={styles.heading}
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              ml={{ base: "7", lg: "8" }}
              mt={{ base: "-10", sm: "-8", lg: "-14" }}
            >
              AntBuilder
            </Text>
          </CardBody>
        </Card>
        <Card
          bgColor={"rgb(18,17,36)"}
          mx={{ base: "6" }}
          maxWidth={"740px"}
          p="0"
          borderRadius="20px"
          color="white"
        >
          <CardBody w="100%">
            <Text
              className={styles.heading}
              fontSize={{ base: "16px", sm: "20px" }}
              mb="16"
              maxWidth={"669px"}
              lineHeight={"33px"}
            >
              Our flagship product designed to shape the future with innovative
              technology solutions by empowering businesses and individuals with
              user-friendly, affordable, and accessible software.
            </Text>

            <Link href="/">
              <Button
                bgColor={"rgb(30,28,58)"}
                fontSize={"lg"}
                _hover={{ bgColor: "transparent" }}
                color="white"
              >
                Go to Case Study
                <ArrowForwardIcon ml="2" />
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Box>


      <Box
        display={{ base: "flex" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        gap="12"
        my='14'
      >
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
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              ml={{ base: "7", lg: "8" }}
              mt={{ base: "-10", sm: "-8", lg: "-14" }}
            >
              AntConfig
            </Text>
          </CardBody>
        </Card>
        <Card
          bgColor={"rgb(18,17,36)"}
          mx={{ base: "6" }}
          maxWidth={"740px"}
          p="0"
          borderRadius="20px"
          color="white"
          order={{base: '2', md: '1'}}

        >
          <CardBody w="100%">
            <Text
              className={styles.heading}
              fontSize={{ base: "16px", sm: "20px" }}
              mb="16"
              maxWidth={"669px"}
              lineHeight={"33px"}
            >
             A developer-centric feature flag service with unlimited team size, awesome support, and a reasonable price tag.
            </Text>

            <Link href="/">
              <Button
                bgColor={"rgb(30,28,58)"}
                fontSize={"lg"}
                _hover={{ bgColor: "transparent" }}
                color="white"
              >
                Go to Case Study
                <ArrowForwardIcon ml="2" />
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Box>

      
      <Box
        display={{ base: "flex" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        gap="12"
        my='14'
      >
        <Card
          bgColor={"rgb(18,17,36)"}
          maxWidth={{ base: "500px", md: "420px" }}
          margin={{ base: "auto" }}
          borderRadius="20px"
          color="white"
        >
          <CardBody w="100%">
            <Box maxWidth={"250px"}>
              <Image src={Explore} alt="B2B" />
            </Box>
            <Text
              className={styles.heading}
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              ml={{ base: "7", lg: "8" }}
              mt={{ base: "-10", sm: "-8", lg: "-14" }}
            >
              PennyWise
            </Text>
          </CardBody>
        </Card>
        <Card
          bgColor={"rgb(18,17,36)"}
          mx={{ base: "6" }}
          maxWidth={"740px"}
          p="0"
          borderRadius="20px"
          color="white"

        >
          <CardBody w="100%">
            <Text
              className={styles.heading}
              fontSize={{ base: "16px", sm: "20px" }}
              mb="16"
              maxWidth={"669px"}
              lineHeight={"33px"}
            >
            (Adashe/Ajo/Esusu); Revolutionizing financial management with our suite of digital solutions.
            </Text>

            <Link href="/">
              <Button
                bgColor={"rgb(30,28,58)"}
                fontSize={"lg"}
                _hover={{ bgColor: "transparent" }}
                color="white"
              >
                Go to Case Study
                <ArrowForwardIcon ml="2" />
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Box>


      <Box
        display={{ base: "flex" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        gap="12"
        my='14'
      >
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
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              ml={{ base: "7", lg: "8" }}
              mt={{ base: "-10", sm: "-8", lg: "-14" }}
            >
              AntFi
            </Text>
          </CardBody>
        </Card>
        <Card
          bgColor={"rgb(18,17,36)"}
          mx={{ base: "6" }}
          maxWidth={"740px"}
          p="0"
          borderRadius="20px"
          color="white"
          order={{base: '2', md: '1'}}

        >
          <CardBody w="100%">
            <Text
              className={styles.heading}
              fontSize={{ base: "16px", sm: "20px" }}
              mb="16"
              maxWidth={"669px"}
              lineHeight={"33px"}
            >
           Empowering businesses and individuals with cross-board finance solutions, making financial management simpler and more efficient
            </Text>

            <Link href="/">
              <Button
                bgColor={"rgb(30,28,58)"}
                fontSize={"lg"}
                _hover={{ bgColor: "transparent" }}
                color="white"
              >
                Go to Case Study
                <ArrowForwardIcon ml="2" />
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default ProductsPage;
