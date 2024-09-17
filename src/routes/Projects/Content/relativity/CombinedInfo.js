import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"
import HR from "../../../../components/HR/HR"
import relativity1 from './relativity1.jpg'

import Resume from "../../../Resume/Resume"
import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
import H4 from "../../../../components/Text/H4"

const title = "Relativity Space"
export const Thumbnail = (props) => {
    const description = "Propulsion Manufacturing Engineering Intern - Summer 2024"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={relativity1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            {/* <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P> */}
            
            <ImageWithCaption image={relativity1} number={value()} caption="Hiking up Inspiration Point with other interns!"/>
            <HR></HR>
            <H4 className="text-center">Resume bullet points:</H4>
            <ul className="list-disc ml-6 space-y-2">
                <li>
                    <P>Reduced CdA measurement uncertainty 5X for N2 gasflow test stand. Doubled hardware compatibility to include ability to
                    test AN-orifices. Done via extra flow paths/valves,, uncertainty calculation revamps, PT sensor sourcings/installs, etc</P>
                </li>
                <li>
                    <P> Eliminated critical QD hose whip safety hazard through detailed Tier 1 design, analysis, and release processes
                   </P>
                </li>
                <li>
                    <P>Designed 2x balance arbors and created procedures for component-level match balancing of life-limited turbine hardware</P>
                </li>
                <li>
                    <P>Designed, analyzed, drafted, and procured 2x 5000psi dev tooling articles for main igniter proof and FOD backflush
                    </P>
                </li>
                <li>
                    <P>Performed design trades & feasibility demo/calcs for patternator to measure main injector per-element flow distribution
                    </P>
                </li>
            </ul>
            <Resume />
        </div>
    )
}