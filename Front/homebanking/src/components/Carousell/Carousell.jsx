import { Box, Grid, GridItem, Heading, Text, Button, Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useAuth} from '../../hooks/useAuth'
import { Link } from "react-router-dom";



const images = [
  {
    url: "/imagen1.png",
    alt: "Imagen 1",
    width: "600px",
  },
  {
    url: "/bancopordentro.jpg",
    alt: "bancopordentro",
    width: "600px",
  },
  {
    url: "/imagen3.png",
    alt: "Imagen 3",
    width: "600px",
  },
  {
    url: "/imagen22.png",
    alt: "Imagen 22",
    width: "600px",
  },
  {
    url: "/imagen2.png",
    alt: "Imagen 2",
    width: "600px",
  },
  {
    url: "/reunionadministrativa.jpg",
    alt: "reunionadministrativa",
    width: "600px",
  },
];

const MyCarousel = () => {
  const {isLogged} = useAuth();

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem textAlign='center' mt='5rem'>
            <Heading textAlign='center'>
                Bienvenido a PILLARBANK
            </Heading>
            <br />
            <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            {isLogged ? null : <Link to='/login'><Button mt="24" w="200px" colorScheme="teal">Ingresá</Button></Link>}
        </GridItem>
      <GridItem w="45rem" textAlign="center" mt="15px">
        <Carousel autoPlay interval={4000} infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={image.alt}
                style={{ width: image.width }}
              />
            </div>
          ))}
        </Carousel>
      </GridItem>
    </Grid>
  );
};

export default MyCarousel;
