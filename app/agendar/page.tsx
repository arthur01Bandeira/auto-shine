'use client'
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Button, Heading, VStack, Text, Steps, ButtonGroup, useSteps, Separator } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

export default function Agendar() {
    const steps = useSteps({
        defaultStep: 0,
        count: items.length,
    })

    const router = useRouter();

    function handleNavigationToBack() {
        if (steps.hasPrevStep) {
            steps.goToPrevStep();
        } else {
            router.push("/")
        }
    }

    return (
        <VStack as="main">
            <VStack as="section" align="start" w="100vw" pt={28} pb={16} px={6}>
                <Button onClick={handleNavigationToBack} variant="ghost" rounded="full" mb={6}>
                    <LuArrowLeft />
                    <Text>
                        {steps.hasPrevStep ? "Voltar" : "Início"}
                    </Text>
                </Button>
                <Heading as="h1" fontSize={"4xl"}>Agendar Serviço</Heading>
                {!steps.isCompleted && <Text>Passo {steps.value + 1} de {items.length}</Text>}
                {steps.isCompleted && <Text>Completo!</Text>}
                <Steps.RootProvider value={steps}>
                    <Steps.List gap={4}>
                        {items.map((step, index) => (
                            <Steps.Item flex="1" key={index} index={index} title={step.title}>
                                <Separator w="100%" borderColor={steps.value >= index ? "yellow" : "white"} borderWidth={2}/>
                            </Steps.Item>
                        ))}
                    </Steps.List>
                    {items.map((step, index) => (
                        <Steps.Content key={index} index={index}>
                            {step.description}
                        </Steps.Content>
                    ))}
                    

                    <ButtonGroup size="sm" variant="outline">
                        <Steps.NextTrigger asChild>
                            <Button>{steps.value === 3 ? "Concluído" : steps.value === 2 ? "Concluir" : "Next"}</Button>
                        </Steps.NextTrigger>
                        <Steps.PrevTrigger asChild>
                <Button>Prev</Button>
              </Steps.PrevTrigger>
                    </ButtonGroup>
                </Steps.RootProvider>
            </VStack>
        </VStack>
    )
}

const items = [
    {
        title: "Passo 1",
        description: "Step 1 description",
    },
    {
        title: "Passo 2",
        description: "Step 2 description",
    },
    {
        title: "Passo 3",
        description: "Step 3 description",
    },
]