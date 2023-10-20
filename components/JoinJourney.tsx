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
    <Box color="white" className={styles.text2}>
      <Box maxWidth="1100px" m="auto">
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={"#fff"}
          textAlign="center"
          className={styles.heading}
        >
          Join Us on Our Journey
        </Text>

        <Flex
        mt='16'
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb="10"
   
        >
            <List>
          <ListItem color={"rgba(255, 255, 255, 1)"}  display={'flex'} alignItems={'center'}>
            <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white" />
            We are more than a tech company
          </ListItem>
          </List>

          <Box w='560px'   p='4'   style={{
            backgroundImage: `url(${Bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // borderRadius: "20px",
            border: "0.5px solid transparent",
            backgroundSize: "cover",
           
          }}>
          <Box> 
                       <Text mb='6'>Join us on our journey, explore our products, and be a part of the innovation-driven, people-centric revolution in technology. Together, we can build a brighter, more accessible, and equitable future for all.</Text>
           
        
          </Box>
           <List>
            <ListItem color={"rgba(255, 255, 255, 1)"}textAlign='center' display={'flex'} alignItems={'center'} >
            <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white"  />
            We are a committed to reshaping the future
          </ListItem>
          </List>
          </Box>
          <List>
          <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} alignItems={'center'}>
            <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white" />
            We are a movement
          </ListItem>
          </List>

        </Flex>
      </Box>
    </Box>
  );
}

export default JoinJourney;
