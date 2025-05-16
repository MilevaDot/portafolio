import { Box, HStack } from '@chakra-ui/react'
import NavbarItems from './NavbarItems';

const Navbar = () => {
    return (
        <>
            <Box
                borderBottom='1px solid #d6ebfd30'
                position='fixed'
                width='inherit'
                backgroundColor='hsla(240,9%,15%, 0.5)'
                backdropFilter='blur(5px)'
                zIndex='2'
                >
                <HStack
                    backgroundColor='hsla(240, 9%, 15%, 0.5)'
                    spacing='1em'
                    padding='20px'
                    justifyContent='end'
                    width='100%'
                    >
                    <NavbarItems toLink='about-me' text='Sobre mí' />
                    <NavbarItems toLink='experience' text='Experiencia' />
                    <NavbarItems toLink='project' text='Proyectos' />
                    <NavbarItems toLink='skills' text='Tecnologías' />
                    <NavbarItems toLink='education' text='Educación' />
                    <NavbarItems toLink='contact' text='Contacto' />
                </HStack>
            </Box>
        </>
    )
}

export default Navbar