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
function CTAsection() {
  return (
    <Box bgColor={"rgba(11, 10, 22, 1)"} maxW={'300px'}>
      <Box width='50%'>
        <Image src={Heroimg} width='2%'  alt="hero image" />
      </Box>
    </Box>
  );
}

export default CTAsection;
