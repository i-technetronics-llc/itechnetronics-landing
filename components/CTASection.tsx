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
import Heroimg from "../public/assets/ctaImagenew (2).svg";
import styles from "../styles/Home.module.css";
import Heroimg2 from "../public/assets/herosmall.svg";
import Logo from "../public/assets/itech.svg";
function CTAsection() {
  return (
    <Box bgColor={"rgba(11, 10, 22, 1)"} mt="45px">
      <Box>
        <Box m="auto" w={{ base: "40%", md: "15%" }}>
          <Image src={Logo} alt="hero" />
        </Box>
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "54px" }}
          lineHeight="52px"
          color={"#fff"}
          mt="34px"
          textAlign={"center"}
          className={styles.heading}
        >
          Where Innovation meets
          <br />
          Technology
        </Text>

        <Box
          maxWidth="1100px"
          bgColor="rgb(18,17,36)"
          p={{base:'12px', md:"24px"}}
          mt="64px"
          mx="auto"
        >
          <Box
            mx="auto"
            
            // w={{base:'100%', md:"80%"}}
            // maxWidth='1052px'
            // border={"30px solid rgb(18, 17, 36)"}
            borderRadius="5px"
            // display={{ base: "none", sm: "block" }}
          >
            <Image src={Heroimg} alt="hero" />
          </Box>
          <Box
            mx="auto"
            // w={{ base: "100%" }}
            borderRadius="5px"
            display={{ base: "none", sm: "none" }}
            mt="20px"
          >
            <Image src={Heroimg2} alt="hero" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CTAsection;
{
  /* <Box m='auto' ml='-10'>
        <Image src={Heroimg} width={700} alt="hero image" />
      </Box> */
}
{
  /* <Box width='10px' margin={'auto'} textAlign={'center'} height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Box> */
}
{
  /* <Box color='white' display={'flex'} alignItems={'center'} m='auto' >

  <Text margin={'auto'} textAlign={'center'} display={'flex'} gap={'2'}>/ I <Text width='10px' margin={'auto'} textAlign={'center'} height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text> </Text>
<Text margin={'auto'}  display={'flex'} gap={'2'} textAlign={'center'}>tech <Text width='10px' margin={'auto'} textAlign={'center'} height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text></Text>
<Text margin={'auto'} display={'flex'} gap={'2'} textAlign={'center'}>net <Text width='10px' margin={'auto'} textAlign={'center'} height='10px'  borderRadius={'100%'} bgColor='#F87D0B'></Text></Text>

<Text margin={'auto'} textAlign={'center'}>tronics /</Text>
</Box> */
}
