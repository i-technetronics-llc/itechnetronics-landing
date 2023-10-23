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
    <Box color="white"  maxWidth={'1200px'} bgColor={"rgb(11,10,22)" } m='auto'   mb='24' className={styles.text2}>   <Text
          fontSize={"4xl"}
          
          color={"#fff"}
          mb='4'
          className={styles.heading}
         
        >
         Reach out to us!
        </Text>
    <Box display={'flex'} maxWidth={'1200px'}  border={'1px solid red'} flexDir={{base:'column',md:'row'}}justifyContent={'space-between'} gap='6' alignItems={'center'}>
      <Box >
   
        <Text color={'white'} mb='20px' fontSize={{base:'16px', md:'22px'}} lineHeight={'32px'} maxWidth={'600px'} >Join us on our journey, explore our products, and be a part of the innovation-driven, people-centric revolution in technology. Together, we can build a brighter, more accessible, and equitable future for all.</Text>

        <Flex gap={{base:'10', md:'2'}} mt={{base:'4', md:'0'}} flexDirection={{ base: "column"}}>
            <Button
              border="3px solid rgb(35,33,67)"
              bgColor={'rgb(18,17,36)'}
              borderRadius="14px"
              color="white"
              _hover={{ bgColor: "none" }}
              w='200px'
            >
              info@itechnetronics.com
            </Button>
            <Button
              border="3px solid rgb(35,33,67)"
              bgColor={'rgb(18,17,36)'}
              borderRadius="14px"
              color="white"
              w='200px'
              _hover={{ bgColor: "none" }}
            >
              sales@itechnetronics.com
            </Button>
          </Flex>
      </Box>


      <SimpleGrid spacing={'6'} m='auto'   templateColumns={{base:'repeat(auto-fill, minmax(250px, 1fr))',sm:'repeat(auto-fill, minmax(250px, 1fr))'}}>
  <Card bgColor={'rgb(18,17,36)'}>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='rgba(27, 7, 255, 1)'></Text>
  <Text fontSize={{base:'20px', md:'16px'}}>United</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px', md:'18px'}}>8 The Green Suite R </Text>
  <Text color={'white'} fontSize={{base:'18px', md:'18px'}}>Dover, DE 19901</Text>
  <Text color={'white'} fontSize={{base:'18px', md:'18px'}}> USA </Text>
</CardBody>
  </Card>
  <Card bgColor={'rgb(18,17,36)'} borderRadius='5px'>
<CardHeader>
    <Box alignItems={'center'} gap={'1'} color={"#fff"} display={'flex'} className={styles.text}>
    <Text width='10px' height='10px'  borderRadius={'100%'} bgColor='rgba(6, 139, 12, 1)'></Text>
  <Text fontSize={{base:'20px', md:'16px'}}>  Nigeria</Text> 
    </Box>
</CardHeader>
<CardBody>
 
  <Text color={'white'} fontSize={{base:'18px'}}>House 15, RichyGold</Text>
  <Text color={'white'} fontSize={{base:'18px'}}>Homes and Estate</Text>
  <Text color={'white'} fontSize={{base:'18px'}}>Apo, Dutse,Abuja, FCT, NIgeria</Text>
  {/* <Text color={'white'} fontSize={{base:'18px'}}></Text> */}
</CardBody>
  </Card>
</SimpleGrid>
    </Box>
    </Box>
  );
}

export default JoinJourney;
