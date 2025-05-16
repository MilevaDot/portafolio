import { Box, Heading, HStack, Image, Tag, TagLabel, Text, VStack } from "@chakra-ui/react"
import { CiLocationOn } from "react-icons/ci"
import './aboutme.css'

const AboutMe = () => {
    return (
        <>
            <Box
                id='about-me'
                padding='80px 0 20px 0'
                >
                <HStack spacing='2em'>
                    <Box
                        boxSize='240px'
                        borderRadius='full'
                        overflow='hidden'
                        border="3px solid #ccc"
                        >
                        <Image
                            src='/meGhibli.png'
                            alt='Photo Aaron'
                            objectFit='cover'
                            objectPosition='center 20%'
                            boxSize='100%'
                            />
                    </Box>
                    <VStack padding='0 1em' alignItems='start'>
                        <Heading
                            as='h2'
                            size='xl'
                            color='#a4bd3a'>
                            Aaron Ilizarbe Saavedra
                        </Heading>
                        <Heading
                            as='h3'
                            size='lg'
                            >
                            Desarrollador de Software
                        </Heading>
                        <Tag className='tagContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                            <CiLocationOn className='tagItem' style={{'backgroundColor': '#a4bd3a'}}/>
                            <TagLabel className='tagItem' backgroundColor='#a4bd3a' fontSize='16px'>Perú</TagLabel>
                        </Tag>
                        <Text fontSize='md'>
                            Me especializo principalmente en desarrollo de software para diferentes modelos de negocio.
                        </Text>
                        <Text fontSize='md'>
                            Me entusiasma colaborar con otros y abordar proyectos desafiantes que me impulsen a crecer como profesional.
                        </Text>
                    </VStack>
                </HStack>
            </Box>
        </>
    )
}

export default AboutMe