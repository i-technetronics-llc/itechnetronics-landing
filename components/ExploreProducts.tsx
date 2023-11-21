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
import Explore from "../public/assets/Subtract.svg";
import Image from "next/image";
import Ant from "../public/assets/antp1.png";
import Pennywise from "../public/assets/pennywise.png";
import AntConfig from "../public/assets/antConfig.png";
import Antfi from "../public/assets/anfi.png";
import Link from "next/link";


 const CardProps = [
  {
    image: Explore,
    title: "AntBuilder",
    description:
      "Our flagship product designed to shape the future with innovative technology solutions by empowering businesses and individuals with user-friendly, affordable, and accessible software.",
  },
  {
    image: Explore,
    title: "AntConfig",
    description:
      "A developer-centric feature flag service with unlimited team size, awesome support, and a reasonable price tag.",
  },
  {
    image: Explore,
    title: "Pennywise",
    description:
      "(Adashe/Ajo/Esusu); Revolutionizing financial management with our suite of digital solutions.",
  },
  {
    image: Explore,
    title: "AntFi",
    description:
      "Empowering businesses and individuals with cross-board finance solutions, making financial management simpler and more efficient.",
  },
];

function ExploreProducts() {
  return (
    <Box color="white">
      <Box maxWidth="1150px" m="auto">
        <Box mb="10" mt="16">
          <SimpleGrid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
            m="auto"
            maxWidth="1150px"
            spacing={{ base: "12", lg: "16" }}
          >
            <Text
              fontSize={"54px"}
              lineHeight="52px"
              color={"#fff"}
              textAlign={{ base: "center", md: "left" }}
              className={styles.heading}
            >
              Explore Our <br /> Products
            </Text>

            {CardProps.map((card) => (
              <Box key={card.title}>
                <Box
                  maxWidth="368px"
                  minHeight="480px"
                  borderRadius="20px"
                  border="3px solid rgb(30,28,56)"
                  bgColor="rgb(18,17,36)"
                  pt="12px"
                  pl="21px"
                  pr="22px"
                >
                  <Box w="100%">
                    <Box maxWidth="325px">
                      <Image
                        src={card.image}
                        alt="B2B"
                        width={325}
                        height={273}
                      />
                    </Box>
                    <Text
                      className={styles.heading}
                      fontSize="2xl"
                      fontWeight="bold"
                      ml="38px"
                      mt="-10"
                    >
                      {card.title}
                    </Text>

                    <Text lineHeight="26px" fontSize="16px" mt="23px">
                      {card.description}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreProducts;
