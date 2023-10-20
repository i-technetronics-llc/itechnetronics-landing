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
import Logo from "../public/assets/logo.svg";
import Listimg from "../public/assets/list.svg";
function Footer() {
  return (
    <Box>
    <Box display={{base:'flex'}} justifyContent='space-between' alignItems='center'>
      <Box>
        <Box>
          <Image src={Logo} alt="logo" />
        </Box>
        <List lineHeight="30px">
          <ListItem
            color={"rgba(255, 255, 255, 1)"}
            display={"flex"}
            alignItems={"center"}
            className={styles.text2}
          >
            <ListIcon as={Image} src={ListIcon3} w={2} h={4} color="white" />
            Reach out to us!
          </ListItem>
        </List>
        <Flex gap="2">
          <Button
            border="1px solid rgba(255, 255, 255, 0.40)"
            bgColor="transparent"
            borderRadius="14px"
            color="white"
            _hover={{bgColor:'none'}}

          >
            info@itechnetronics.com
          </Button>
          <Button
            border="1px solid rgba(255, 255, 255, 0.40)"
            bgColor="transparent"
            borderRadius="14px"
            color="white"
            _hover={{bgColor:'none'}}
          >
            sales@itechnetronics.com
          </Button>
        </Flex>
      </Box>

      <Box  display={{base:'flex'}} justifyContent='space-between' alignItems='center'>
        <Box>
          <Text color='white'>Company</Text>
          <List>
            <ListItem
              color={"rgba(255, 255, 255, 1)"}
              display={"flex"}
              alignItems={"center"}
            >
              <ListIcon as={Image} src={Listimg} w={2} h={4} color="white" />
             Projects
            </ListItem>
            <ListItem
              color={"rgba(255, 255, 255, 1)"}
              display={"flex"}
              alignItems={"center"}
            >
              <ListIcon as={Image} src={Listimg} w={2} h={4} color="white" />
             About Us
            </ListItem>
            <ListItem
              color={"rgba(255, 255, 255, 1)"}
              display={"flex"}
              alignItems={"center"}
            >
              <ListIcon as={Image} src={Listimg} w={2} h={4} color="white" />
              Core Values
            </ListItem>
          </List>
        </Box>

        <Box>
          <Text color='white'>Address</Text>
<List>
<ListItem
              color={"rgba(255, 255, 255, 1)"}
              display={"flex"}
              alignItems={"center"}
            >
              <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white" />
             USA
            </ListItem>
</List>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}

export default Footer;
