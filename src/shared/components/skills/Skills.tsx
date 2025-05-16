import { Box, Heading, HStack } from "@chakra-ui/react"
import { BiLogoTypescript } from "react-icons/bi"
import { DiDjango } from "react-icons/di"
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaPython, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { IoTerminal } from "react-icons/io5"
import { RiVercelFill } from "react-icons/ri"
import { SiChakraui, SiOdoo, SiVite } from "react-icons/si"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'

const Skills = () => {
    return (
        <>
        <Box
            padding='10px 0'
            margin='20px 0'
            id='skills'
            >
            <Heading
                as='h3'
                size='lg'
                color='#a4bd3a'
                >
                Tecnologías
            </Heading>
            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                speed={4000}
                modules={[Autoplay]}
                >
                <SwiperSlide style={{'padding':'40px 0 0 0'}}>
                    <HStack justifyContent='space-between'>
                        <FaHtml5 color='#E96228' size='60px' />
                        <FaCss3Alt color='#2763E8' size='60px' />
                        <IoLogoJavascript color='#E8D44D' size='60px' />
                        <FaGithub color='#000' size='60px' />
                        <IoTerminal color='#000' size='60px' />
                        <FaReact color='#00D1F7' size='60px' />
                        <BiLogoTypescript color='#2D79C7' size='60px' />
                    </HStack>
                </SwiperSlide>
                <SwiperSlide style={{'padding':'40px 0 0 0'}}>
                    <HStack justifyContent='space-between'>
                        <FaBootstrap color='#7A12F5' size='60px' />
                        <SiChakraui color='#64C9CB' size='60px' />
                        <FaPython color='#376F9D' size='60px' />
                        <SiOdoo color='#AA1488' size='60px' />
                        <DiDjango color='#27AA78' size='60px' />
                        <SiVite color='#F7C926' size='60px' />
                        <RiVercelFill color='#000' size='60px' />
                    </HStack>
                </SwiperSlide>
            </Swiper>
        </Box>
        </>
    )
}

export default Skills