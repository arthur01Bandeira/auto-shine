import { HStack, Link as ChakraLink, Text, Icon, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";

export default function Header() {
  return (
    <HStack as="header" position="fixed" left={0} right={0} top={0} zIndex={50} bg="blackAlpha.800/90">
      <HStack as="nav" w="full" alignItems="center" justifyContent="space-between" px={6} py={4}>
        <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
          <NextLink href={"/"}>
            <Icon w={7} h={7}><LuCar /></Icon>
            <Text fontSize="xl" fontWeight="bold">Auto Shine</Text>
          </NextLink>
        </ChakraLink>
        <HStack alignItems={"center"} gap={8}>
          <ChakraLink asChild><NextLink href="/">Inicio</NextLink></ChakraLink>
          <ChakraLink asChild><NextLink href="#serviços">Serviços</NextLink></ChakraLink>
          <ChakraLink asChild><NextLink href="/agendar">Agendar</NextLink></ChakraLink>
          <Button variant="outline" rounded="lg">Acessar</Button>
        </HStack>
      </HStack>
    </HStack>
  );
}
