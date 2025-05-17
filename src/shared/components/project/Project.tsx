import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, GridItem, Heading, Image, Link, Stack, Tag, TagLabel, Text } from "@chakra-ui/react"
import { BiLogoTypescript } from "react-icons/bi"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiAppwrite, SiChakraui, SiVite } from "react-icons/si"
import { Autoplay, EffectCube } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import './project.css'
import { IoLogoJavascript } from "react-icons/io5"

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
                                <Image src='/tendoimg1.png' alt='Image Tendo 1' loading='lazy' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/tendoimg2.png' alt='Image Tendo 2' loading='lazy' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/tendoimg3.png' alt='Image Tendo 3' loading='lazy' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/tendoimg4.png' alt='Image Tendo 4' loading='lazy' />
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
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <SiAppwrite className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>Appwrite</TagLabel>
                                </Tag>
                            </GridItem>
                        </Flex>
                    </Box>
                </Stack>
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
                                <Image src='/frontendmentorimg1.png' alt='Frontend Mentor 1' loading='lazy' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/frontendmentorimg2.png' alt='Frontend Mentor 2' loading='lazy' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/frontendmentorimg3.png' alt='Frontend Mentor 3' loading='lazy' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/frontendmentorimg4.png' alt='Frontend Mentor 4' loading='lazy' />
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
                            href='https://www.frontendmentor.io/profile/MilevaDot'
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
                                Retos de Frontend Mentor <ExternalLinkIcon />
                            </Heading>
                        </Link>
                        <Text>
                            He resuelto muchos retos para fortalecer mis habilidades como desarrollador Front-End. También comento y recibo opiniones de otros desarrolladores para tener un mejor panorama.
                        </Text>
                        <Flex
                            wrap='wrap'
                            gap='1em'
                            marginTop='1em'
                            >
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <FaHtml5 className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>HTML</TagLabel>
                                </Tag>
                            </GridItem>
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <FaCss3Alt className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>CSS</TagLabel>
                                </Tag>
                            </GridItem>
                            <GridItem>
                                <Tag className='projectItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full' cursor='pointer'>
                                    <IoLogoJavascript className='projectItem' style={{'backgroundColor': '#a4bd3a'}} />
                                    <TagLabel className='projectItem' backgroundColor='#a4bd3a' fontSize='16px'>JavaScript</TagLabel>
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