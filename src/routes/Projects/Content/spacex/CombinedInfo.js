import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import spacex1 from './spacex1.jpg'
import spacex2 from './spacex2.jpg'
import spacex3 from './spacex3.jpg'
import spacex4 from './spacex4.jpg'

import HR from "../../../../components/HR/HR"

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
import H3 from "../../../../components/Text/H3"
import H4 from "../../../../components/Text/H4"
import H5 from "../../../../components/Text/H5"

const title = "SpaceX"
export const Thumbnail = (props) => {
    const description = "Starship RND Manufacturing Engineering Intern - Summer 2023"

    return (
        <ThumbnailTemplate title={title} description={description} image={spacex2} link={props.link} />
    )
}

export const Content = () => {
    const { num, setNum } = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>

            <ImageWithCaption image={spacex1} number={value()} caption="That's Me! I got to go to Starbase for 4 days for site familiarization" />

            <HR></HR>
            <H3 className="text-center">SpaceX Logo Machining</H3>
            <H5 className="text-center">To celebrate getting this internship, I wanted to machine a SpaceX logo:</H5>
            <ImageWithCaption image={spacex4} number={value()} caption="How it started..." />
            <ImageWithCaption image={spacex2} number={value()} caption="...vs how it's going" />
            <ImageWithCaption image={spacex3} number={value()} caption="...vs how it's going (part 2)" />
            
            <HR></HR>

            <H4 className="mb-4 px-2 md:mb-4 lg:mb-8">Unfortunately, due to ITAR and proprietary reasons, there aren't many other images I can put here. </H4>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">However, I can speak about bullet points on my resume as well as other projects and experiences I had.</P>
            <ul className="list-disc ml-6 space-y-2">
                <li>
                    <P>Owned design-thru-test of modular seal performance tester (50-600K @ 9ksi). Proofed at ambient & cryo, leak checked at
                        ambient. Cut assembly time 3x. Can test diff. geometries by swapping only 1 part. Allows isolated system measurements</P>
                </li>
                <li>
                    <P>Created company-wide fixture plate DFX guidelines to eliminate unneeded tools, part features & tolerances, mfg. time &
                        processes, etc. Owned DFM, magnesium sourcing, CAM, machining, etc. for 3x Starship FTS qual. vibe fixture plates</P>
                </li>
                <li>
                    <P>Drawing checker for new 9-piecepart valve design. Owned GD&T, DFM, mfg. planning, etc. All parts met form & fit reqs</P>
                </li>
                <li>
                    <P>Procured $2k FDM printer + accessories for drastic 5S upgrades. Created documentation, training, & practical demo parts</P>
                </li>
            </ul>
        </div>
    )
}