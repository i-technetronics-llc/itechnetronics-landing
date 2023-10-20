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
} from "@chakra-ui/react";
import Image from "next/image";
import Heroimg from "../public/assets/heroBg.svg";
import ListIcon2 from "../public/assets/listIcon.svg";
import ListIcon3 from "../public/assets/listIcon3.svg";
import styles from "../styles/Home.module.css";
import Bg from "../public/assets/cto2bg.svg";
function CTAsection() {
  return (
    <Box bgColor={"rgb(11,10,22)"} >
        <Box maxWidth="1100px" m="auto" >

    <Flex justifyContent={'space-between'}h='90vh' pt='10' 
 style={{
    backgroundImage: `url(${Bg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: '550px',
    paddingTop:'12rem',
    // backgroundSize: "cover",
  }}
    >
        <Box width='30%' mb='-40'>
        <List lineHeight='30px'>
          <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} alignItems={'center'} className={styles.text2}>
            <ListIcon as={Image} src={ListIcon3} w={2} h={4} color="white" />
            Our Unique Approach
          </ListItem>
          <Text color='white'  className={styles.text2}>We are driven by a fellowship of product managers and teams who brainstorm and curate ideas to solve real-world problems. . </Text>
          </List>

        </Box>
        <Box width='30%' mt='-10rem'>
        <List lineHeight='30px'>
          <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} alignItems={'center'} className={styles.text2}>
            <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white" />
            We Don’t Just Create Technology
          </ListItem>
          <Text color='white'  className={styles.text2}>We create solutions that are friendly, easy to use, affordable, and accessible, ensuring we serve the underserved.</Text>
          </List>

        </Box>
    </Flex>
   </Box>
    </Box>
  );
}

export default CTAsection;
