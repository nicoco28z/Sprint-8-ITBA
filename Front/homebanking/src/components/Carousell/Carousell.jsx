import {
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAuth } from "../../hooks/useAuth";
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
    <Grid
      templateColumns={{ base: "22rem", md: "repeat(2, 1fr)" }}
      gap={6}
      align="center"
      justifyContent={"center"}
    >
      <GridItem textAlign="center" mt={{ base: "1rem", md: "2rem" }}>
        <Heading textAlign="center" mt={20} fontSize={{ base: "xl", md: "4xl" }} mb={5}>
          Bienvenido a PILLARBANK
        </Heading>
        <Accordion allowToggle width={{ base: "50%", md: "auto" }} mx="auto">
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      ¿Quienes somos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Somos PillarBank, una institución financiera comprometida con la excelencia y la confianza. Con una sólida trayectoria en el sector, nos enorgullece ofrecer soluciones financieras innovadoras y servicios de calidad que satisfacen las necesidades cambiantes de nuestros clientes.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      ¿A que nos dedicamos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  En PillarBank, nos dedicamos a proporcionar servicios financieros integrales que abarcan desde cuentas de ahorro y corriente hasta productos de inversión y préstamos. Nuestra misión es ser el socio financiero de confianza para individuos y empresas, brindando soluciones personalizadas y adaptadas a sus metas y circunstancias.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      ¿Porque deberias elegirnos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>Compromiso con la excelencia: Nos esforzamos por la excelencia en cada aspecto de nuestro servicio, brindando a nuestros clientes una experiencia bancaria sin complicaciones y de calidad.</p>
                  <p>Innovación constante: Estamos a la vanguardia de la tecnología financiera, ofreciendo soluciones innovadoras que hacen que la gestión financiera sea más eficiente y accesible.</p>
                  <p>Enfoque personalizado: Reconocemos la singularidad de cada cliente. Nuestros expertos financieros están aquí para comprender y satisfacer sus necesidades específicas, proporcionando asesoramiento personalizado y soluciones a medida.</p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='center'>
                      Nuestra vision y propuesta
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Aspiramos a ser líderes en el sector financiero, siendo reconocidos por nuestra integridad, innovación y compromiso con la satisfacción del cliente. Buscamos contribuir al bienestar económico de nuestros clientes y la comunidad en general, fomentando un crecimiento sostenible y responsable.
                </AccordionPanel>
              </AccordionItem>
              </Accordion>
        {isLogged ? null : (
          <Link to="/login">
            <Button mt={{ base: "4", md: "20" }} w={{ base: "100%", md: "200px" }} bg="#349f77">
              Ingresá
            </Button>
          </Link>
        )}
      </GridItem>
      <GridItem w={{ base: "100%", md: "45rem" }} textAlign="center" mt={{ base: "4", md: "20" }}>
        <Carousel autoPlay interval={4000} infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.alt} style={{ maxWidth: "90%" }} />
            </div>
          ))}
        </Carousel>
      </GridItem>
    </Grid>
  );
};

export default MyCarousel;
