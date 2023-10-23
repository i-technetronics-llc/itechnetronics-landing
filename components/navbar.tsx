import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Icon, createIcon } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logo from "../public/assets/i-tech.png";
import Listimg from "../public/assets/list.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { link } from "fs";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    // Set the active link based on the current route
    if (router.pathname === "/") {
      setActiveLink("home");
    } else if (router.pathname === "/core-values") {
      setActiveLink("core-values");
    } else if (router.pathname === "/products") {
      setActiveLink("products");
    } else if (router.pathname === "/about") {
      setActiveLink("about");
    } else if (router.pathname === "/contact") {
      setActiveLink("contact");
    } else {
      setActiveLink(null); // Set to null for other routes
    }
  }, [router.pathname]);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      bgColor={"rgb(18,17,36)"}
      className={styles.navbar}
      color={"rgba(255, 255, 255, 1)"}
      borderRadius={"20px"}
      mt="6"
      mx={{ base: "0", md: "10" }}
      // maxWidth={'1200px'}
      // m={'auto'}
      // w='100%'
      // zIndex='99999'
      // position={'fixed'}

      // pt={'8'}
      // pb={'4'}
      py="6"
      px={"14"}
      //   px={{ base: "4", md: "4", lg: "20" }}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              size="5xl"
              variant="ghost"
              color="white"
              onClick={onOpen}
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bgColor="rgba(11, 10, 22, 1)">
                <DrawerCloseButton color={"white"} />
                <DrawerHeader>
                  <Link href="/">
                    <Image src={Logo} height={40} width={40} alt="Logo" />
                  </Link>
                </DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection="column" gap="16" alignItems="center">
                    <List spacing={3}>
                      <Link href="/about">
                        <ListItem color={"rgba(255, 255, 255, 1)"}>
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
                        <ListItem color={"rgba(255, 255, 255, 1)"}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} />
                          Core Values
                        </ListItem>
                      </Link>
                      <Link href="/products">
                        <ListItem color={"rgba(255, 255, 255, 1)"}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} />
                          Products
                        </ListItem>
                      </Link>
                      <Link href="/contact">
                        <ListItem color={"rgba(255, 255, 255, 1)"}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} />
                          Contact Us
                        </ListItem>
                      </Link>
                    </List>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Box>
              <Link href="/">
                <Image src={Logo} height={40} width={40} alt="Logo" />
              </Link>
            </Box>
          </>
        ) : (
          <Box color={"black"}>
            <List
              display="flex"
              justifyContent={"space-around"}
              color={"rgba(255, 255, 255, 1)"}
              gap={"  10"}
              alignItems={"center"}
            >
             <Link href="/about">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  alignItems={"center"}
                  style={{
                    backgroundColor:
                      activeLink === "about" ? "white" : "transparent",
                    padding:
                      activeLink === "about" ? "8px 16px 8px 16px" : "0",
                    borderRadius: activeLink === "about" ? "12px" : "0",
                    color: activeLink === "about" ? "black" : "white",
                  }}
                  onClick={() => setActiveLink("about")}
                >
                  <Icon
                    viewBox="0 0 200 200"
                    mr="1"
                    w={3}
                    h={3}
                    color={
                      activeLink === "about"
                        ? "rgba(59, 130, 246, 1)"
                        : "white"
                    }
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  About
                </ListItem>
              </Link>

              <Link href="/core-values">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  alignItems={"center"}
                  style={{
                    backgroundColor:
                      activeLink === "core-values" ? "white" : "transparent",
                    padding:
                      activeLink === "core-values" ? "8px 16px 8px 16px" : "0",
                    borderRadius: activeLink === "core-values" ? "12px" : "0",
                    color: activeLink === "core-values" ? "black" : "white",
                  }}
                  onClick={() => setActiveLink("core-values")}
                >
                  <Icon
                    viewBox="0 0 200 200"
                    mr="1"
                    w={3}
                    h={3}
                    color={
                      activeLink === "core-values"
                        ? "rgba(59, 130, 246, 1)"
                        : "white"
                    }
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  Core Values
                </ListItem>
              </Link>
            </List>
          </Box>
        )}
        {!isMobile && (
          <Box>
            <Link href="/">
              <Image src={Logo} height={40} width={40} alt="Logo" />
            </Link>
          </Box>
        )}
        {!isMobile && (
          <Box color={"black"}>
            <List
              display="flex"
              justifyContent={"space-around"}
              color={"rgba(255, 255, 255, 1)"}
              gap={"10"}
              alignItems={"center"}
            >
           <Link href="/products">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  alignItems={"center"}
                  style={{
                    backgroundColor:
                      activeLink === "products" ? "white" : "transparent",
                    padding:
                      activeLink === "products" ? "8px 16px 8px 16px" : "0",
                    borderRadius: activeLink === "products" ? "12px" : "0",
                    color: activeLink === "products" ? "black" : "white",
                  }}
                  onClick={() => setActiveLink("products")}
                >
                  <Icon
                    viewBox="0 0 200 200"
                    mr="1"
                    w={3}
                    h={3}
                    color={
                      activeLink === "products"
                        ? "rgba(59, 130, 246, 1)"
                        : "white"
                    }
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  Products
                </ListItem>
              </Link>



            <Link href="/contact">
                <ListItem
                  color={"rgba(255, 255, 255, 1)"}
                  display={"flex"}
                  alignItems={"center"}
                  style={{
                    backgroundColor:
                      activeLink === "contact" ? "white" : "transparent",
                    padding:
                      activeLink === "contact" ? "8px 16px 8px 16px" : "0",
                    borderRadius: activeLink === "contact" ? "12px" : "0",
                    color: activeLink === "contact" ? "black" : "white",
                  }}
                  onClick={() => setActiveLink("contact")}
                >
                  <Icon
                    viewBox="0 0 200 200"
                    mr="1"
                    w={3}
                    h={3}
                    color={
                      activeLink === "contact"
                        ? "rgba(59, 130, 246, 1)"
                        : "white"
                    }
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  Contact
                </ListItem>
              </Link>
            </List>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
