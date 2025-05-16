import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"

const Education = () => {
    return (
        <>
        <Box
            padding='10px 0'
            margin='20px 0'
            id='education'
            >
            <Heading
                as='h3'
                size='lg'
                color='#a4bd3a'
                >
                Educación
            </Heading>
            <VStack margin='20px 0' width='100%' alignItems='start'>
                <HStack justifyContent='space-between' width='100%'>
                    <Heading as='h4' size='md'>
                        CoDiGo Tecsup
                    </Heading>
                    <Text fontSize='md' as='i' color='#a4bd3a'>
                        Ene 2025 - En curso
                    </Text>
                </HStack>
                <Heading as='h5' size='sm' fontSize='md' width='100%' color='#a4bd3a'>
                    Desarrollo web Fullstack con Python 
                </Heading>
                <Text fontSize='md' width='100%'>
                    Capacitado para desarrollar aplicaciones desde el Front-end con React y desde el Back-end con Python.
                </Text>
            </VStack>
            <VStack margin='20px 0' width='100%' alignItems='start'>
                <HStack justifyContent='space-between' width='100%'>
                    <Heading as='h4' size='md'>
                        Universidad Nacional de Ingeniería (UNI)
                    </Heading>
                    <Text fontSize='md' as='i' color='#a4bd3a'>
                        Ago 2015 - Ago 2022
                    </Text>
                </HStack>
                <Heading as='h5' size='sm' fontSize='md' width='100%' color='#a4bd3a'>
                    Física
                </Heading>
                <Text fontSize='md' width='100%'>
                    Como estudiante de Física pura me he formado con mucha disciplina y empeño para desarrollar habilidades sólidas en Matemáticas, Física, Estadística y Computación.
                </Text>
            </VStack>
            <VStack margin='20px 0' width='100%' alignItems='start'>
                <HStack justifyContent='space-between' width='100%'>
                    <Heading as='h4' size='md'>
                        Universidad Nacional de Colombia (UNAL)
                    </Heading>
                    <Text fontSize='md' as='i' color='#a4bd3a'>
                        Sep 2021 - Mar 2022
                    </Text>
                </HStack>
                <Heading as='h5' size='sm' fontSize='md' width='100%' color='#a4bd3a'>
                    Física
                </Heading>
                <Text fontSize='md' width='100%'>
                    Intercambio de un semestre donde conocí gente increíble de todas partes del mundo y descubrí mi pasión por la programación. Estudié Física, Matemáticas y me sumergí en el mundo de la programación web.
                </Text>
            </VStack>
        </Box>
        </>
    )
}

export default Education