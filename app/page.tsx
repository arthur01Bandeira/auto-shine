'use client'

import { HStack, Link as ChakraLink, Image as ChakraImage, Text, Icon, Button, VStack, Heading, Flex, CardRoot, CardBody, CardFooter } from "@chakra-ui/react";
import NextLink from "next/link"
import NextImage from "next/image"
import { LuArrowRight, LuCar, LuClock, LuShield, LuSparkles, LuStar, LuStarHalf } from "react-icons/lu";
import heroCar from "../public/assets/hero-car.jpeg"
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/home/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleNavigationToSchedule(){
    router.push("/agendar");
  }

  return (
    <>
      <HStack as="header" position="fixed" left={0} right={0} top={0} zIndex={50} bg="blackAlpha.800/90">
        <HStack as="nav" w="full" alignItems="center" justifyContent="space-between" px={6} py={4}>
          <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
            <NextLink href={"/"}>
              <Icon w={7} h={7}>
                <LuCar />
              </Icon>
              <Text fontSize="xl" fontWeight="bold">Auto Shine</Text>
            </NextLink>
          </ChakraLink>
          <HStack alignItems={"center"} gap={8}>
            <ChakraLink asChild>
              <NextLink href="/">
                Inicio
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="#serviços">
                Serviços
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/agendar">
                Agendar
              </NextLink>
            </ChakraLink>

            <Button variant="outline" rounded="lg">Acessar</Button>

          </HStack>
        </HStack>
      </HStack>

      <VStack as="main" gap={0}>
        <VStack 
        as="section" 
        position="relative" 
        w="100vw" 
        h="100vh" 
        align="start" 
        justify="center"
        >

        <Flex position="absolute" zIndex={1} w="100vw" h="100vh" bgColor="blackAlpha.400/90"/>

        <ChakraImage zIndex={0} position="absolute" w="100vw" h="100vh" asChild>
          <NextImage src={heroCar} alt="Autoshine"></NextImage>
        </ChakraImage>

        <VStack zIndex={2} maxW="2xl" align="start" position="relative" px={6} gap={0}>
            <Tag 
            colorPalette="yellow"
            position="relative" 
            startElement={<LuSparkles />} 
            rounded="full"
            px={4}
            py={2}
            fontWeight="medium"
            fontSize="sm"
        
            >
               Excelência em Estética Automotiva</Tag> 

               <Heading 
               as="h1" 
               fontSize="6xl"
               fontWeight="bold"
               lineHeight="normal"
               letterSpacing="tight"
               mb={6}
               >
              Seu carro merece o <Text as="span" color="yellow.400">melhor</Text> cuidado 
              
              </Heading>
              <Text maxW="lg" fontSize="lg">Transformamos seu veículo com serviços premiu de estética automativa.
                Agende online e garanta o brilho que seu carro merece
              </Text>
              <HStack colorPalette="yellow">
                <Button rounded="lg" asChild>
                  <a href="/agendar"><LuClock /> 
                  Agendar agora</a>
                
                  </Button>

                <Button rounded="lg" asChild>
                  <a href="#servicos"> Ver serviços <LuArrowRight /></a>
                </Button>
              </HStack>
        </VStack>
      </VStack>

      
      <VStack id="services" as="section" py="24" gap={16}>
        <VStack gap={4}>
          <Heading as="h2" fontSize="4xl" fontWeight="bold">Nossos Serviços</Heading>
          <Text maxW="xl" fontSize="lg" textAlign="center">Oferecemos os melhores serviços de estética automotiva para manter seu veículo impecável</Text>
        </VStack>

          <HStack gap={6}>
            <Card
            icon={<LuSparkles color="black" />}
            title="Polimento Premiun"
            description="Restauração completa do brilho original da pintura com técnicas profissionais"
            textFooter="A partir de R$ 1200,00"
            />                       

            <Card 
            icon={<LuShield color="black"/>}
            title="Vitrificação"
            description="Proteção cerâmica de loga duração que mantém seu carro impecável por meses"
            textFooter="A partir de R$ 800,00"
            />              

            <Card 
            icon={<LuCar color="black"/>}
            title="Lavagem Detalhada"
            description="Limpeza comleta interna e externa com produtos de qualidade"
            textFooter="A partir de R$ 120,00"
            />

            <Card 
            icon={<LuStar color="black"/>}
            title="Higienização Interna"
            description="Limpeza profunda de paineis carpetes e paines com ozônio"
            textFooter="A partir de R$ 200,00"
            />


          </HStack>

            <Button colorPalette="yellow" rounded="lg">
              <a href="/agendar">Agendar serviço</a>
          
              <LuArrowRight/>
            </Button>
      </VStack>
    </VStack >
    
    <VStack as="footer" borderTopWidth={1} py={12}>
      <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
        <NextLink href="/">
          <Icon w={7} h={7}>
            <LuCar />
          </Icon>
          <Text fontWeight="bold">Auto Shine</Text>
        </NextLink>
      </ChakraLink>
      <Text fontSize="sm">@ 2026 Autoshine Estetica Automotiva. Todos os direitos reservados.</Text>
    </VStack>
    </>
  );
}