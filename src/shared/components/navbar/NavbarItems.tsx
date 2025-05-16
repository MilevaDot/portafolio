import { Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const NavbarItems = ({toLink, text} : {
    toLink: string
    text: string
}) => {
    return (
        <>
            <ScrollLink
                to={toLink}
                duration={500}
                offset={-60}
                >
                <Text
                    _hover={{
                        'color':'#a4bd3a',
                        'cursor':'pointer'
                    }}
                    backgroundColor='hsla(240,9%,15%, 0.5)'
                    >
                    {text}
                </Text>
            </ScrollLink>
        </>
    )
}

export default NavbarItems