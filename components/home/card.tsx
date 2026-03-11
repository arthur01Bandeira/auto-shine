import { CardBody, CardFooter, CardRoot, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LuSparkles } from "react-icons/lu";

interface CardProps{
    icon: ReactNode;
    title: string;
    description: string;
    textFooter: string;
}

export function Card({icon, title, description, textFooter}: CardProps){


    return(
        <CardRoot w={80} _hover={{borderColor: "yellow.500"}} cursor="pointer">
                      <CardBody gap={2}>
                        <Flex 
                        w={12}
                        h={12}
                        rounded="lg"
                        align="center"
                        justify="center"
                        bgColor="yellow.300"
                        >
        
                          {icon}
                        </Flex>
        
                        <Heading as="h3" fontSize="xl" fontWeight="semibold">{title}</Heading>
        
                        <Text fontSize="sm">{description}</Text>
                      </CardBody>
                      <CardFooter>
                        <Text >{textFooter}</Text>
                      </CardFooter>  
                    </CardRoot>  
    )
}