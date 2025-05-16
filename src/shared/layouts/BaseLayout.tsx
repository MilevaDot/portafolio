import type { ReactElement } from "react"
import Navbar from "../components/navbar/Navbar"
import { Box } from "@chakra-ui/react"

const BaseLayout = ({ children } : {
    children: ReactElement
}) => {
    return (
        <>
            <Box height='100vh' color='white'>
                <Box width='60%' maxWidth='60%' margin='0 auto'>
                    <Navbar />
                    { children }
                </Box>
            </Box>
        </>
    )
}

export default BaseLayout