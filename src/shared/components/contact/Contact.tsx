import { Box, Heading, Link, Stack, Tag, TagLabel, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import './contact.css'

const Contact = () => {
    return (
        <>
            <Box
                padding='10px 0 80px 0'
                margin='20px 0'
                id='contact'
                >
                <Heading
                    as='h3'
                    size='lg'
                    color='#a4bd3a'
                    >
                    Contacto
                </Heading>
                <Text>
                    Puedes escribirme por cualquiera de estos medios:
                </Text>
                <Stack
                    padding='1em 0'
                    spacing='1.5em'
                    direction={{
                        base:'column',
                        md: 'row',
                    }}
                    >
                    <Link href='https://github.com/MilevaDot' target='_blank'>
                        <Tag className='contactItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full'>
                            <FaGithub className='contactItem' style={{'backgroundColor': '#a4bd3a'}} />
                            <TagLabel className='contactItem' backgroundColor='#a4bd3a' fontSize='16px'>GitHub</TagLabel>
                        </Tag>
                    </Link>
                    <Link href='https://www.linkedin.com/in/aaron-dan-ilizarbe-saavedra-25988a209/' target='_blank'>
                        <Tag className='contactItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full'>
                            <FaLinkedin className='contactItem' style={{'backgroundColor': '#a4bd3a'}} />
                            <TagLabel className='contactItem' backgroundColor='#a4bd3a' fontSize='16px'>LinkedIn</TagLabel>
                        </Tag>
                    </Link>
                    <Link href='https://wa.me/+51973280498' target='_blank'>
                        <Tag className='contactItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full'>
                            <FaWhatsapp className='contactItem' style={{'backgroundColor': '#a4bd3a'}}  />
                            <TagLabel className='contactItem' backgroundColor='#a4bd3a' fontSize='16px'>WhatsApp</TagLabel>
                        </Tag>
                    </Link>
                    <Link href='mailto:aaron.d.ilizarbe.s@gmail.com' target='_blank'>
                        <Tag className='contactItemContainer' size='lg' backgroundColor='#a4bd3a' borderRadius='full'>
                            <MdEmail className='contactItem' style={{'backgroundColor': '#a4bd3a'}} />
                            <TagLabel className='contactItem' backgroundColor='#a4bd3a' fontSize='16px'>aaron.d.ilizarbe.s@gmail.com</TagLabel>
                        </Tag>
                    </Link>
                </Stack>
            </Box>
        </>
    )
}

export default Contact