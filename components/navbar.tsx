import React, { useState, useEffect } from "react";
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
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logo from "../public/assets/i-tech.png";
import Listimg from "../public/assets/list.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

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
      borderRadius={'20px'}
      mt='6'
      // w='100%'
      // zIndex='99999'
      // position={'fixed'}
      
      // pt={'8'}
      // pb={'4'}
      py='6'
      px={'14'}
    //   px={{ base: "4", md: "4", lg: "20" }}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              size="lg"
              variant="ghost"
              color="white"
              onClick={onOpen}
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bgColor="rgba(11, 10, 22, 1)">
                <DrawerCloseButton color={'white'} />
                <DrawerHeader>
                <Link href="/">
              <Image src={Logo} height={40} width={40} alt="Logo" />
            </Link>
                </DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection="column" gap='16' alignItems="center">
                    <List spacing={3}>
                      <Link href="/about">
                        <ListItem color={"rgba(255, 255, 255, 1)"}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} color="white"/>
                          About Us
                        </ListItem>
                      </Link>
                      <Link href="/core-values">
                        <ListItem  color={"rgba(255, 255, 255, 1)"}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} />
                          Core Values
                        </ListItem>
                      </Link>
                      <Link href="/products">
                        <ListItem  color={"rgba(255, 255, 255, 1)"}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} />
                          Products
                        </ListItem>
                      </Link>
                      <Link href="/signup">
                        <ListItem  color={"rgba(255, 255, 255, 1)"}>
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
                        <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} alignItems={'center'}>
                          About Us
                        </ListItem>
                      </Link>
                  <Link href="/core-values">
                        <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} alignItems={'center'}>
                          <ListIcon as={Image} src={Listimg} w={2} h={4} color="white"/>
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
                     <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} gap='2' alignItems={'center'}>
                     <Text width='8px' height='8px'  borderRadius={'100%'} bgColor='#FFF'></Text>

                       Products
                     </ListItem>
                   </Link>
               <Link href="/">
                     <ListItem color={"rgba(255, 255, 255, 1)"} display={'flex'} alignItems={'center'}>
                       <ListIcon as={Image} src={Listimg} w={2} h={4} color="white"/>
                       Contact Us
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
