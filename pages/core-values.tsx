import React from "react";
import Navbar from "../components/navbar";
import CTA2 from "../components/CTA2";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import CoreValues from "../components/coreValues";
import Hero from "../components/coreValuesHero";	
function index() {
  return (
    <Box bgColor={"rgb(11,10,22)" }   className={styles.text2}>
      <Box
        bgColor={"rgb(11,10,22)"}
        display={"flex"}
        m="auto"
        flexDirection={"column"}
        gap="24"
        maxWidth="1440px"
      >
        <Navbar />
        <Hero />  
        <CoreValues />
       
        <Footer />
      </Box>
    </Box>
  );
}

export default index;
