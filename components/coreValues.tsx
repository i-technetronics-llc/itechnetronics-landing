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
    <Box bgColor={"rgb(11,10,22)"} maxWidth={'1200px'} m='auto'>
       <Box>
       <SimpleGrid spacing={'16'} m='auto' templateColumns={{base:'repeat(auto-fill, minmax(250px, 1fr))',sm:'repeat(auto-fill, minmax(500px, 1fr))'}}>
  <Card bgColor={'rgb(18,17,36)'}>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'20px', md:'28px'}}>Innovation</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'18px'}}>We encourage a culture of innovation and creativity, valuing new ideas and approaches to software development. Our vision is to develop novel solutions and solve unique business problems.
</Text>
</CardBody>
  </Card>
  <Card bgColor={'rgb(18,17,36)'} borderRadius='5px'>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'20px', md:'28px'}}>  Collaboration</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px'}}>We promote teamwork, open communication, and collaboration among team members and stakeholders. This value supports our emphasis on collaborative software development and involving everyone needed to achieve results. </Text>
</CardBody>
  </Card>
</SimpleGrid>



       <SimpleGrid spacing={'16'} m='auto' my='10' templateColumns={{base:'repeat(auto-fill, minmax(250px, 1fr))',sm:'repeat(auto-fill, minmax(500px, 1fr))'}}>
  <Card bgColor={'rgb(18,17,36)'}>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'20px', md:'28px'}}>Agility</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'18px'}}>We emphasize agility and adaptability in responding to changes in the technology space. This value aligns with the iterative approach mentioned in our vision statement, allowing us to quickly adapt and deliver software efficiently.
</Text>
</CardBody>
  </Card>
  <Card bgColor={'rgb(18,17,36)'} borderRadius='5px'>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'20px', md:'28px'}}>  Customer Focus</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px'}}>We prioritize the needs and goals of our customers, aiming to understand their requirements and provide software solutions that help their businesses scale fast. This value emphasizes the customer-centric approach mentioned in our vision statement. </Text>
</CardBody>
  </Card>
</SimpleGrid>
       <SimpleGrid spacing={'16'} m='auto'  my='10' templateColumns={{base:'repeat(auto-fill, minmax(250px, 1fr))',sm:'repeat(auto-fill, minmax(500px, 1fr))'}}>
  <Card bgColor={'rgb(18,17,36)'}>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'20px', md:'28px'}}>Exellence</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'18px'}}>We strive for excellence in all aspects of software development, maintaining high standards of quality, efficiency, and performance. This reflects our commitment to building software quickly and efficiently.
</Text>
</CardBody>
  </Card>
  <Card bgColor={'rgb(18,17,36)'} borderRadius='5px'>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text>
  <Text fontSize={{base:'20px', md:'28px'}}>  Integrity</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px'}}>We conduct business with honesty, ethics, and transparency, fostering trust with customers, partners, and employees. This value is essential for establishing strong relationships and maintaining a positive reputation in the technology space.</Text>
</CardBody>
  </Card>
</SimpleGrid>
       </Box>
    </Box>
  );
}

export default CTAsection;
