import React from "react";
import Navbar from "../components/navbar";
import CTAsection from "../components/CTASection"
import CTA2 from "../components/CTA2";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import TargetAudience from "../components/TargetAudience";
import ExploreProducts from "../components/ExploreProducts";
import JoinJourney from "../components/JoinJourney";
import Fold from "../components/Fold";
import Footer from "../components/Footer";
import About from "../components/AboutHeroSection";    

function index() {
  return (
    <Box bgColor={"rgb(11,10,22)" }    className={styles.text2}>
      <Box
        bgColor={"rgb(11,10,22)"}
        display={"flex"}
        m="auto"
        flexDirection={"column"}
        gap="24"
        maxWidth="1440px"
      >
        <Navbar />
       
        <About />

        <Footer />
      </Box>
    </Box>
  );
}

export default index;
