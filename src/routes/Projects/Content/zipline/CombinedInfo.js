import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"
import HR from "../../../../components/HR/HR"
import zipline1 from './zipline1.jpg'
import zipline2 from './zipline2.jpg'
import zipline3 from './zipline3.jpg'
import zipline4 from './zipline4.webp'
import zipline5 from './zipline5.webp'
import zipline6 from './zipline6.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
import H3 from "../../../../components/Text/H3"
import H4 from "../../../../components/Text/H4"
import Resume from "../../../Resume/Resume"

const title = "Zipline International"
export const Thumbnail = (props) => {
    const description = "Fixture Design Engineering Intern - Spring 2024"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={zipline1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">Zipline focuses on drone delivery + all related supply chain logistics, including cold-chain compatibility</P>
            <HR></HR>
            <H3 className="text-center">Background and Work</H3>
            <ImageWithCaption image={zipline4} number={value()} caption="Zipline's upcoming P2 system uses a large drone called the Zip that drops a smaller drone called the droid"/>
            <ImageWithCaption image={zipline5} number={value()} caption="The droid is what actually carries the delivered goods. It also happens to be the most fixture-intensive product Zipline builds."/>
            <ImageWithCaption image={zipline6} number={value()} caption="One of my main projects was the ground-up development of all fixtures used to build the droid. My fixtures enabled Zipline to build functional droids for the first time and are still being used in production as of writing (Sep '24)."/>

            <H4 className="text-center">Full resume bullet points:</H4>
            <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>
                    <P>Enabled company milestone path progress via clean-sheet design of all 17 fixtures for 1 of Zipline’s 3 main products</P>
                </li>
                <li>
                    <P>Eliminated $82k/year hardware risk by designing fixture to prevent winch rope tangling/unwinding during build & shipping</P>
                </li>
                <li>
                    <P>Created snap-on propeller guards to prevent injuries & hardware damage, while protecting extremely fragile motor coating</P>
                </li>
            </ul>
            <HR></HR>
            <H3 className="text-center">Other Fun Info:</H3>
            <ImageWithCaption image={zipline1} number={value()} caption="I organized an Intern Lunch with CEO Keller Rinaudo Cliffton"/>

            <ImageWithCaption image={zipline2} number={value()} caption="My projects focsed on making Zipline's Droids, so on my last day to celebrate I made around 40 of these chocolate droids using custom silicone molds"/>
            <ImageWithCaption image={zipline3} number={value()} caption="Another chocolate droid photo!"/>
            <Resume></Resume>
        </div>
    )
}