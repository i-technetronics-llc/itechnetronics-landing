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
import Heroimg from "../public/assets/corevalues.svg";
import styles from "../styles/Home.module.css";
import ListIcon2 from "../public/assets/listIcon.svg";

function CTAsection() {
  return (
    <Box bgColor={"rgba(11, 10, 22, 1)"}>
    <Box bgColor={"rgba(11, 10, 22, 1)"}>
           <List textAlign='center'  margin='auto'>
          <ListItem color={"rgba(255, 255, 255, 1)"}  display={'flex'} alignItems='center' justifyContent='center' textAlign='center' margin='auto'>
            <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white" />
            We are more than a tech company
          </ListItem>
          </List>
       <Text fontSize={{base:'sm', md:'md'}} mx={'3'} textAlign='center' color={"#fff"} className={styles.text}>
       We aim to set the standard for cross-board solutions, and adapt and excel in an ever-evolving tech landscape.
        </Text>
    </Box>


<Box>
    <Box>
    <List textAlign='center'  >
          <ListItem color={"rgba(255, 255, 255, 1)"}  display={'flex'} alignItems='center'   >
            <ListIcon as={Image} src={ListIcon2} w={2} h={4} color="white" />
            Innovation
          </ListItem>
          </List>
       <Text fontSize={{base:'sm', md:'md'}} mx={'3'}  color={"#fff"} className={styles.text}>
       We encourage a culture of innovation and creativity, valuing new ideas and approaches to software development. Our vision is to develop novel solutions and solve unique business problems.

        </Text>
    </Box>
</Box>

    </Box>
  );
}

export default CTAsection;
