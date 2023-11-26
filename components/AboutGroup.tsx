import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Grid } from "@chakra-ui/react";
import Explore from "../public/assets/aboutsubtract.svg";
import { Icon, createIcon } from "@chakra-ui/react";
import { SimpleGrid,Flex } from "@chakra-ui/react";
interface CustomSliderProps {}

const CustomSlider: React.FC<CustomSliderProps> = () => {
  const CardProps = [
    {
      image: Explore,
      title: "Ahmed Faruk",
      description: "Co-founder/Engineering leads",
    },
    {
      image: Explore,
      title: "Abubakar A. Prince",
      description: "Co-founder/Project and Product Manager",
    },
    {
      image: Explore,
      title: "Benjamin Ali Abah",
      description: "Brand Manager",
    },
    // {
    //   image: Explore,
    //   title: "Benjamin Ali Abah",
    //   description: "Brand Manager",
    // },
    // {
    //   image: Explore,
    //   title: "Benjamin Ali Abah",
    //   description: "Brand Manager",
    // },
  ];

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      {/* <Slider {...settings}> */}
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
        {CardProps.map((card) => (
          <Box key={card.title} m='auto'>
            <Box
              maxWidth="368px"
              minHeight="465px"
              borderRadius="20px"
              border="3px solid rgb(30,28,56)"
              bgColor="rgb(18,17,36)"
              pt="12px"
              pl="21px"
              pr="22px"
              m="auto"
            >
              <Box w="100%">
                <Box maxWidth="325px">
                  <Image src={card.image} alt="B2B" width={325} height={390} />
                </Box>
                <Text
                  fontSize={{ base: "24px", md: "30px" }}
                  fontWeight="400"
                  // ml="38px"
                  mt={{ base: "-14", md: "-20" }}
                >
                  {card.title}
                </Text>

                <Text
                  fontSize={{ base: "14px", md: "20px" }}
                  mt="6px"
                  fontWeight="400"
                  // display='flex'
                  gap="6px"
                  // alignItems='center'
                  maxWidth="259px"
                >
                  <Icon
                    viewBox="0 0 200 200"
                    color="rgba(59, 130, 246, 1)"
                    mt="-1"
                    mr="6px"
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  {card.description}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
                  
</SimpleGrid>
      {/* </Slider> */}
    </>
  );
};

interface CustomArrowProps {
  onClick: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} colorScheme="teal" variant="outline" mx={2}>
      Previous
    </Button>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} colorScheme="teal" variant="outline" mx={2}>
      Next
    </Button>
  );
};

export default CustomSlider;
