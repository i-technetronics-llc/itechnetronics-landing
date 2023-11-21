import React from "react";
import {
  Box,
  Flex,
  Text,
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

function test() {
  return (
    <Box  color="#FFF" bgColor="rgb(18,17,36)" minHeight='515px' maxWidth="1332px">
      <Text
       
        fontSize="54px"
        fontWeight="400"
        maxWidth="602px"
        m="auto"
        my='54px'
        textAlign="center"
        className={styles.heading}
      >
        Join Us on Our Journey
      </Text>

      <Box   
        fontSize="54px"
        fontWeight="400"
        maxWidth="1180px"
        py='67px'
        mb='62px'
        bgColor="rgb(30,28,56)"
        mx="auto"
        borderRadius="20px"
        textAlign="center">
    <Text
       
       fontSize="32px"
       fontWeight="500"
       maxWidth="1090px"
       m="auto"

       textAlign="center"
       className={styles.text2}
     >
       Join us on our journey, explore our products, and be a part of the innovation-driven, people-centric revolution in technology. Together, we can build a brighter, more accessible, and equitable future for all.
     </Text>
      </Box>
    </Box>
  );
}

export default test;
