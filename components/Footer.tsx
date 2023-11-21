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
import Logo from "../public/assets/i-tech.png";
import Listimg from "../public/assets/list.svg";
import Link from "next/link";

function Footer() {
  return (
    <Box bgColor={"rgb(18,17,36)"} py="10">
      <Box
        display={{ base: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        m="auto"
        mx="5"
        gap="10"
        justifyContent="space-between"

        // alignItems="center"
      >
        <Box>
          <Box w="35px" h="40px">
            <Image src={Logo} alt="logo" />
          </Box>
          <List lineHeight="30px">
            <ListItem
              color={"rgba(255, 255, 255, 1)"}
              display={"flex"}
              alignItems={"center"}
              fontSize={"16px"}
              className={styles.text2}
              my={{ base: "4", md: "11px" }}
            >
              <ListIcon as={Image} src={ListIcon3} w={2} h={4} color="white" />
              Reach out to us!
            </ListItem>
          </List>
          <Flex
            gap={{ base: "10", md: "2" }}
            mt={{ base: "4", md: "0" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <a href="mailto:info@itechnetronics.com">
            <Button
              border="3px solid rgb(35,33,67)"
              bgColor={"rgb(18,17,36)"}
              borderRadius="14px"
              color="white"
              fontSize={"16px"}
              fontWeight="400"
              _hover={{ bgColor: "none" }}
              w="200px"
            >
              info@itechnetronics.com
            </Button></a>
            <a href="mailto:sales@itechnetronics.com">
            <Button
              border="3px solid rgb(35,33,67)"
              bgColor={"rgb(18,17,36)"}
              borderRadius="14px"
              color="white"
              w="200px"
              fontSize={"16px"}
              fontWeight="400"
              _hover={{ bgColor: "none" }}
            >
              sales@itechnetronics.com
            </Button>
            </a>
          </Flex>
        </Box>

        <Box
          display={{ base: "flex" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
          flexDirection={{ base: "column", md: "row" }}
          gap="66"
        >
          <Box>
            <Text mb="10px" color="white">
              Company
            </Text>
            <List
              display={{ base: "flex" }}
              justifyContent="space-between"
              flexDirection={{ base: "column" }}
              gap="10px"
            >
              <Link href="/products">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  fontSize={"16px"}
                  lineHeight="26px"
                  alignItems={"center"}
                >
                  <ListIcon
                    as={Image}
                    src={Listimg}
                    w={2}
                    h={4}
                    color="white"
                  />
                  Products
                </ListItem>
              </Link>
              <Link href="/about">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"16px"}
                  lineHeight="26px"
                >
                  <ListIcon
                    as={Image}
                    src={Listimg}
                    w={2}
                    h={4}
                    color="white"
                  />
                  About Us
                </ListItem>
              </Link>
              <Link href="/core-values">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"16px"}
                  lineHeight="26px"
                >
                  <ListIcon
                    as={Image}
                    src={Listimg}
                    w={2}
                    h={4}
                    color="white"
                  />
                  Core Values
                </ListItem>
              </Link>
            </List>
          </Box>

          <Box maxWidth="450px">
            <Text color="white">Address</Text>

            <Box display={"flex"} flexDirection={"row"} gap="8">
              <Box display={"flex"}>
                <List>
                  <ListItem
                    color={"rgba(255, 255, 255, 1)"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <ListIcon
                      as={Image}
                      src={ListIcon2}
                      w={2}
                      h={4}
                      color="white"
                    />
                    USA
                  </ListItem>
                  <Text
                    color="white"
                    display="block"
                    fontSize="16px"
                    fontWeight="500px"
                  >
                    8 The Green Suite R Dover, DE 19901 <br /> USA
                  </Text>
                </List>
              </Box>

              <Box
                height="100%px"
                w="1px"
                background="rgba(113, 113, 113, 1)"
              ></Box>

              <Box>
                <List>
                  <ListItem
                    color={"rgba(255, 255, 255, 1)"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <ListIcon
                      as={Image}
                      src={ListIcon2}
                      w={2}
                      h={4}
                      color="white"
                    />
                    Nigeria
                  </ListItem>
                  <Text color="white" fontSize="16px" fontWeight="500px">
                    House 15, RichyGold Homes and Estate <br /> Apo, Dutse {" "}
                    <br /> Abuja, FCT, NIgeria
                  </Text>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Text
        color="rgba(173, 184, 204, 1)"
        textAlign="center"
        fontSize="16px"
        mt="62px"
        mb="41px"
      >
        &copy;2023. All Rights Reserved & Privacy Statement
      </Text>
    </Box>
  );
}

export default Footer;
