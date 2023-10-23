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
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
       <Box maxWidth={'1200px'} m='auto'>
       <SimpleGrid spacing={'4'} m='auto'  templateColumns={{base:'repeat(auto-fill, minmax(250px, 1fr))',sm:'repeat(auto-fill, minmax(350px, 1fr))'}}>
  <Card bgColor={'rgb(18,17,36)'}>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'12px', md:'16px'}}> Not Another Tech Company</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'20px'}}>We are a dynamic force dedicated to developing cutting-edge hardware and software solutions with a strong focus on people.</Text>
</CardBody>
  </Card>
  <Card bgColor={'rgb(18,17,36)'}>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='rgba(59, 130, 246, 1)'></Text>
  <Text fontSize={{base:'12px', md:'16px'}}> We Don’t Just Create Technology</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'20px'}}>We create solutions that are friendly, easy to use, affordable, and accessible, ensuring we serve the underserved.</Text>
</CardBody>
  </Card>
  <Card bgColor={'rgb(18,17,36)'} borderRadius='5px'>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'12px', md:'16px'}}> Our Unique Approach</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'20px'}}>We are driven by a fellowship of product managers and teams who brainstorm and curate ideas to solve real-world problems. </Text>
</CardBody>
  </Card>
</SimpleGrid>
       </Box>
    </Box>
  );
}

export default CTAsection;
