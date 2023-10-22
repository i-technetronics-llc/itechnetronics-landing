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
import Heroimg from "../public/assets/aboutimg.svg";
function CTAsection() {
  return (
    <Box bgColor={"rgba(11, 10, 22, 1)"}>
      <Box m='auto' ml='-10'>
        <Image src={Heroimg} width={700} alt="hero image" />
      </Box>
    </Box>
  );
}

export default CTAsection;
