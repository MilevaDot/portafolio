import { Box, Heading, HStack, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const Experience = () => {
    return (
        <>
            <Box
                padding='10px 0'
                margin='20px 0'
                id='experience'
                >
                <Heading
                    as='h3'
                    size='lg'
                    color='#a4bd3a'
                    >
                    Experiencia
                </Heading>
                <VStack margin='20px 0' width='100%' alignItems='start'>
                    <HStack justifyContent='space-between' width='100%'>
                        <Heading as='h4' size='md'>
                            Marketing Alterno
                        </Heading>
                        <Text fontSize='md' as='i' color='#a4bd3a'>
                            Ene 2023 - Ene 2025
                        </Text>
                    </HStack>
                    <Heading as='h5' size='sm' fontSize='md' width='100%' color='#a4bd3a'>
                        Mid-Level Software Developer
                    </Heading>
                    <Text fontSize='md' width='100%'>
                        Desarrollo Front-End y Back-End de un modelo de negocio basado en el Marketing y Outsourcing de personal. Análisis de requerimientos. Responsable de subir cambios al servidor. Tutor de practicantes.
                    </Text>
                    <List>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Desarrollo en Odoo versión 15.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Conexión SFTP con WinSCP y manejo de terminal Linux para subir cambios a los servidores.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Maquetación y generación de reportes PDF y Excel/xlsx.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Consultas SQL usando PostgreSQL.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Diseño y desarrollo de la web de Odoo.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Revisión del código de compañeros con GitHub.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Análisis y toma de requerimientos de los usuarios.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Apoyo y formación completa de compañeros Trainee.
                        </ListItem>
                    </List>
                </VStack>

                <VStack margin='20px 0' width='100%' alignItems='start'>
                    <HStack justifyContent='space-between' width='100%'>
                        <Heading as='h4' size='md'>
                            Anka ERP
                        </Heading>
                        <Text fontSize='md' as='i' color='#a4bd3a'>
                            Mar 2022 - Set 2022
                        </Text>
                    </HStack>
                    <Heading as='h5' size='sm' fontSize='md' width='100%' color='#a4bd3a'>
                        Junior Software Developer
                    </Heading>
                    <Text fontSize='md' width='100%'>
                        Desarrollo Front-End y Back-End de Sistemas de Planificación de Recursos Empresariales (ERP's) utilizando Odoo como framework.
                    </Text>
                    <List>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Desarrollo en Odoo versión 12, 14 y 15.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Conexión SFTP y manejo de terminal Linux.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            JavaScript para manipular la interfaz Web de Odoo.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Maquetación de reportes QWeb/PDF con XML, Bootstrap y CSS.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='#a4bd3a' />
                            Consultas SQL en PostgreSQL para procesar datos con Python.
                        </ListItem>
                    </List>
                </VStack>
            </Box>
        </>
    )
}

export default Experience