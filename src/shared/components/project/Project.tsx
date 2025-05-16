import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Link, Stack, Tag, TagLabel, Text, VStack } from "@chakra-ui/react"
import { BiLogoTypescript } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
import { SiChakraui, SiVite } from "react-icons/si"
import { Autoplay, EffectCube } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import './project.css'

const Project = () => {
    return (
        <>
            <Box
                padding='10px 0'
                margin='20px 0'
                id='project'
                >
                <Heading
                    as='h3'
                    size='lg'
                    color='#a4bd3a'
                    >
                    Proyectos
                </Heading>
                <Stack
                    direction={{
                        base: 'column',
                        md: 'column',
                        lg: 'row'
                    }}
                    margin='20px 0'
                    spacing='2em'
                    alignItems='center'
                    >
                    <Box
                        width={{
                            base: '100%',
                            md: '100%',
                            lg: '20%'
                        }}
                        overflow='hidden'
                        borderRadius='10px'
                        >
                        <Swiper
                            effect='cube'
                            grabCursor={true}
                            modules={[EffectCube, Autoplay]}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            >
                            <SwiperSlide>
                                <Image src='/tendoimg1.png' alt='Image Tendo 1' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/tendoimg2.png' alt='Image Tendo 2' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/tendoimg3.png' alt='Image Tendo 3' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/tendoimg4.png' alt='Image Tendo 4' />
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                    <Box
                        width={{
                            base: '100%',
                            md: '100%',
                            lg: '80%'
                        }}
                        >
                        <Link
                            href='https://tendo-one.vercel.app/'
                            target='_blank'
                            _hover={{
                                'textDecoration': 'none'
                            }}
                            >
                            <Heading
                                as='h4'
                                size='md'
                                color='#a4bd3a'
                                _hover={{
                                    'color': '#dce6b1',
                                }}
                                >
                                Tendo! <ExternalLinkIcon />
                            </Heading>
                        </Link>
                        <Text>
                            Tendo es una web que muestra y gestiona productos. También permite generar un carrito de compras. Es posible crear dos tipos de usuario: Público y Administrador. El primero puede usar el carrito y generar una compra, mientras que el segundo puede entrar a una plataforma para gestionar la creación de los productos.
                        </Text>
                        <Flex
                            wrap='wrap'
                            gap='1em'
                            marginTop='1em'
                            >
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <FaReact className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>React</TagLabel>
                                </Tag>
                            </GridItem>
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <BiLogoTypescript className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>TypeScript</TagLabel>
                                </Tag>
                            </GridItem>
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <SiVite className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>Vite</TagLabel>
                                </Tag>
                            </GridItem>
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <SiChakraui className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>Chakra UI</TagLabel>
                                </Tag>
                            </GridItem>
                        </Flex>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Project