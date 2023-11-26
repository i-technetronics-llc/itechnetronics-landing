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
    <Box  color="#FFF" bgColor="rgb(18,17,36)" minHeight='515px' maxWidth="1332px" mt='152px' mb='100px'>
      <Text
       
        fontSize={{base:'32px', md:"54px"}}
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
        py={{base:'20px', md:'67px'}}
        // px={{base:'12px', md:'67px'}}
        mb='62px'
        bgColor="rgb(30,28,56)"
        mx="auto"
        borderRadius="20px"
        textAlign="center">
    <Text
       
       fontSize={{base:'18px', md:"32px"}}
       fontWeight="500"
       maxWidth={{base:'340px', md:"1090px"}}
       m="auto"
        px={{base:'8px', md:'0'}}
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
