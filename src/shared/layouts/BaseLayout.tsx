import type { ReactElement } from "react"
import Navbar from "../components/navbar/Navbar"
import { Box } from "@chakra-ui/react"

const BaseLayout = ({ children } : {
    children: ReactElement
}) => {
    return (
        <>
            <Box height='100vh' color='white'>
                <Box
                    margin='0 auto'
                    width={{
                        base: '85%',
                        md: '60%'
                    }}
                    >
                    <Navbar />
                    { children }
                </Box>
            </Box>
        </>
    )
}

export default BaseLayout