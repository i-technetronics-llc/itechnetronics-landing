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
import { Icon, createIcon } from "@chakra-ui/react";

import Bg from "../public/assets/JoinBg2.svg";
import ListIcon2 from "../public/assets/listIcon.svg";
import Explore from "../public/assets/aboutsubtract.svg";
import AboutSlider from "./AboutGroup";

function AboutCard() {
  return (
    <Box
      maxWidth="1260px"
      mt="98px"
      minHeight="875px"
      bgColor="rgb(18,17,36)"
      border="3px solid rgb(20,22,42)"
      borderRadius="20px"
      m="auto"
    >
      <Box>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          mt="34px"
          mb="64px"
          textAlign={"center"}
        >
          <Icon viewBox="0 0 200 200" color="rgba(59, 130, 246, 1)">
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
          Our Team Ready to Bring your Ideas to Life
        </Text>
      </Box>


    <Box >
<AboutSlider/>
    </Box>

    </Box>
  );
}

export default AboutCard;
