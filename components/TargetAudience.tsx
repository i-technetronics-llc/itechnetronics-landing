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
import Image from "next/image";
import styles from "../styles/Home.module.css";
import B2B from "../public/assets/B2B.svg";
import Software from "../public/assets/software.svg";
import Innovators from "../public/assets/innovators.svg";
function TargetAudience() {
  return (
    <Box bgColor={"transparent"} >
      <Box textAlign={"center"}  m="auto">
        <Text
          fontSize={{base:'2xl',sm:'3xl', md:"54px"}}
          color={"#fff"}
          className={styles.heading}

        >
          Our Target Audience
        </Text>
        <Text fontSize={{base:'sm', md:'24px'}} lineHeight='39px'  maxWidth='1260px' color={"#fff"} className={styles.text}>
          While we serve both B2B and SaaS markets, our primary focus goes
          beyond conventional boundaries. We aim to reach everyone who can
          benefit from our innovative products and solutions, making the world
          of technology a better place for all.
        </Text>
      </Box>

      <Box mt='24' >
      <SimpleGrid templateColumns={{ base:'repeat(1, 1fr)',sm:'repeat(2,1fr)', md:"repeat(3,1fr)"}} mx={{base:'6',lg:'20', }}  maxWidth='1100px' spacing={{base:'6', lg:'14'}}>
      {/* <SimpleGrid spacing={4} m='auto' templateColumns='repeat(auto-fill, minmax(220px, 1fr))'> */}
        <Card
          // w="290px"
          maxWidth='420px'
          bgColor={"rgba(11, 10, 22, 1)"}
          // height="307px"
          mb="4"
          className={styles.box}
          style={{
            backgroundImage: `url(${B2B.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "20px",
            border: "3px solid #FFF",


            backgroundSize: "cover",
          }}
        >
          <Button
            bg='rgba(28, 24, 53, 0.81)'
            className={styles.button}
            mx="2"
            py="7"
            _hover={{ bg: "transparent" }}
            textAlign="center"
            mt="230px"
            fontSize={{base:'12px', sm:'18px'}}
            px="4"
            lineHeight='38px'
            borderRadius="16"
            color="white"
          >
            Business To Business (B2B) Market
          </Button>
        </Card>
        <Card
          // w="290px"
          bgColor={"rgba(11, 10, 22, 1)"}
          // height="307px"
          mb="4"
          maxWidth='420px'
          className={styles.box}
          style={{
            backgroundImage: `url(${Software.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "20px",
            border: "3px solid #FFF",
            backgroundSize: "cover",
          }}
        >
          <Button
            bg='rgba(28, 24, 53, 0.81)'
            className={styles.button}
            mx="2"
            py="7"
            _hover={{ bg: "transparent" }}
            textAlign="center"
            mt="230px"
            fontSize={{base:'12px', sm:'18px'}}
            px="4"
            lineHeight='38px'
            borderRadius="16"
            color="white"
          >
            Software as a Service (Saas) Market
          </Button>
        </Card>
        <Card
          // w="290px"
          bgColor={"rgba(11, 10, 22, 1)"}
          // height="307px"
          maxWidth='420px'
          mb="4"
          className={styles.box}
          style={{
            backgroundImage: `url(${Innovators.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "20px",
            border: "3px solid #FFF",
            backgroundSize: "cover",
          }}
        >
          <Button
          bg='rgba(28, 24, 53, 0.81)'
            className={styles.button}
            mx="2"
            py="7"
            _hover={{ bg: "transparent" }}
            textAlign="center"
            mt="230px"
            fontSize={{base:'12px', sm:'18px'}}
            lineHeight='38px'
            
            px="4"
            borderRadius="16"
            color="white"
          >
            Innovators
          </Button>
        </Card>
      </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TargetAudience;
