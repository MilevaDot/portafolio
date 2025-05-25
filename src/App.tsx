import { ChakraProvider } from "@chakra-ui/react"
import BaseLayout from "./shared/layouts/BaseLayout"
import './app.css'
import Theme from "./declarations/Theme"
import AboutMe from "./shared/components/aboutMe/AboutMe"
import Experience from "./shared/components/experience/Experience"
import Project from "./shared/components/project/Project"
import Skills from "./shared/components/skills/Skills"
import Education from "./shared/components/education/Education"
import Contact from "./shared/components/contact/Contact"
import { Analytics } from "@vercel/analytics/next"

function App() {
    return (
        <>
            <ChakraProvider theme={Theme}>
                <Analytics />
                <BaseLayout>
                    <>
                        <AboutMe />
                        <Experience />
                        <Project />
                        <Skills />
                        <Education />
                        <Contact />
                    </>
                </BaseLayout>
            </ChakraProvider>
        </>
    )
}

export default App
