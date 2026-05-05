import { VStack, Text, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";
import { ChakraLink } from "./ChakraLink";

export default function Footer() {
  return (
    <VStack as="footer" borderTopWidth={1} py={12}>
      <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
        <NextLink href="/">
          <Icon w={7} h={7}><LuCar /></Icon>
          <Text fontWeight="bold">Auto Shine</Text>
        </NextLink>
      </ChakraLink>
      <Text fontSize="sm">@ 2026 Autoshine Estetica Automotiva. Todos os direitos reservados.</Text>
    </VStack>
  );
}
