import { HStack, Link as ChakraLink, Image as ChakraImage, Text, Icon, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link"
import NextImage from "next/image"
import { LuCar } from "react-icons/lu";
import heroCar from "../public/assets/hero-car.jpeg"

export default function Home() {
  return (
    <>
      <HStack as="header" position="fixed" left={0} right={0} top={0} zIndex={0}>
        <HStack as="nav" w="full" alignItems="center" justifyContent="space-between" px={6} py={4}>
          <ChakraLink alignItems="center" gap={2} asChild>
            <NextLink href={"/"}>
              <Icon w={7} h={7}>
                <LuCar />
              </Icon>
              <Text fontSize="xl" fontWeight="bold">Auto Shine</Text>
            </NextLink>
          </ChakraLink>
          <HStack alignItems={"center"} gap={0}>
            <ChakraLink>
              <NextLink href={"/"}>
                Inicio
              </NextLink>
            </ChakraLink>

            <ChakraLink>
              <NextLink href={"#serviços"}>
                Serviços
              </NextLink>
            </ChakraLink>

            <ChakraLink>
              <NextLink href={"/agendar"}>
                Agendar
              </NextLink>
            </ChakraLink>

            <Button variant={"outline"} rounded="lg">Acessar</Button>

          </HStack>
        </HStack>
      </HStack>

      <VStack as="main" gap={0}>
        <VStack as="section">
        <ChakraImage w="full" h="full" asChild>
          <NextImage src={heroCar} ></NextImage>
        </ChakraImage>
      </VStack>
    </VStack >
    
    </>
  );
}