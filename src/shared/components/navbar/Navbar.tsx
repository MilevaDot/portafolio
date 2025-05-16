import { Box, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import NavbarItems from './NavbarItems';
import { HamburgerIcon } from '@chakra-ui/icons';

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
                    display={{
                        base: 'none',
                        md: 'flex',
                    }}
                    >
                    <NavbarItems toLink='about-me' text='Sobre mí' />
                    <NavbarItems toLink='experience' text='Experiencia' />
                    <NavbarItems toLink='project' text='Proyectos' />
                    <NavbarItems toLink='skills' text='Tecnologías' />
                    <NavbarItems toLink='education' text='Educación' />
                    <NavbarItems toLink='contact' text='Contacto' />
                </HStack>
                <HStack
                    backgroundColor='hsla(240, 9%, 15%, 0.5)'
                    padding='20px'
                    justifyContent='end'
                    width='100%'
                    display={{
                        base: 'flex',
                        md: 'none',
                    }}
                    >
                    <Menu>
                        <MenuButton _hover={{'color':'#a4bd3a'}} _active={{'color':'#a4bd3a'}}>
                            <HamburgerIcon />
                        </MenuButton>
                        <MenuList
                            backgroundColor='hsla(240,9%,15%, 0.5)'
                            >
                            <MenuItem
                                backgroundColor='hsla(240,9%,15%, 0.5)'
                                >
                                <NavbarItems toLink='about-me' text='Sobre mí' />
                            </MenuItem>
                            <MenuItem
                                backgroundColor='hsla(240,9%,15%, 0.5)'
                                >
                                <NavbarItems toLink='experience' text='Experiencia' />
                            </MenuItem>
                            <MenuItem
                                backgroundColor='hsla(240,9%,15%, 0.5)'
                                >
                                <NavbarItems toLink='project' text='Proyectos' />
                            </MenuItem>
                            <MenuItem
                                backgroundColor='hsla(240,9%,15%, 0.5)'
                                >
                                <NavbarItems toLink='skills' text='Tecnologías' />
                            </MenuItem>
                            <MenuItem
                                backgroundColor='hsla(240,9%,15%, 0.5)'
                                >
                                <NavbarItems toLink='education' text='Educación' />
                            </MenuItem>
                            <MenuItem
                                backgroundColor='hsla(240,9%,15%, 0.5)'
                                >
                                <NavbarItems toLink='contact' text='Contacto' />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box>
        </>
    )
}

export default Navbar