import fins1 from "./fins1.jpg"
import fins2 from "./fins2.jpg"
import fins3 from "./fins3.jpg"
import fins4 from "./fins4.jpg"
import fins5 from "./fins5.jpg"
import fins6 from "./fins6.jpg"
import fins7 from "./fins7.jpg"
import fins8 from "./fins8.jpg"
import fins9 from "./fins9.jpg"
import fins10 from "./fins10.jpg"
import fins11 from "./fins11.jpg"
import fins12 from "./fins12.jpg"
import fins13 from "./fins13.jpg"
import fins14 from "./fins14.jpg"
import fins15 from "./fins15.jpg"
import fins16 from "./fins16.jpg"
import fins17 from "./fins17.jpg"
import fins18 from "./fins18.jpg"
import fins19 from "./fins19.jpg"
import fins21 from "./fins21.jpg"

import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import HR from "../../../../components/HR/HR"
import H3 from "../../../../components/Text/H3"

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"

import useIncrements from "../../../../components/Hooks/useIncrements"
import H4 from "../../../../components/Text/H4"
import H5 from "../../../../components/Text/H5"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import fins20 from "./fins20.jpg"
import H1 from "../../../../components/Text/H1"

const title = "Rocket Fins"
export const Thumbnail = (props) => {
    const description = "I made 5 rocket fins for Purdue Space Program's Boomie-Zoomie-B Rocket (3 main and 2 spare). This took place over ~40 hours over a single weekend. It was a lot of work, but it was great fun and the results were amazing. Part of this project's success involved feeds-and-speeds testing on smaller parts in order to find the fastest possible cutting values that still yielded the desired results."
    return (
        <ThumbnailTemplate title={title} description={description} image={fins20} link={props.link}/>
    )
}

export const Content = () => {
    const { num, setNum } = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <ImageWithCaption image={fins1} number={value()} caption="Sacrificial plate attached to t-slots. Note this is actually 3 pieces of metal because I couldn't find a single large enough piece." />
            <ImageWithCaption image={fins2} number={value()} caption="Fixing the stock to the plate and drilling 3 holes in the center." />
            <ImageWithCaption image={fins3} number={value()} caption="This lets me add 3 screws to make the workholding more rigid." />
            <ImageWithCaption image={fins4} number={value()} caption="Drilling 0.25in holes..." />
            <ImageWithCaption image={fins5} number={value()} caption="...to accommodate more fixturing screws and a cross-bar as well." />
            <ImageWithCaption image={fins6} number={value()} caption="Cutting the profile. This is a rough cut, note the triangular tabs." />
            <ImageWithCaption image={fins7} number={value()} caption="The tabs let me bend the outer piece off without having to worry about them being flung off during machining itself, which could potentially cause tool or part damage." />
            <ImageWithCaption image={fins8} number={value()} caption="After a finish pass, the tabs are gone too." />
            <ImageWithCaption image={fins9} number={value()} caption="Machining all leading and trailing edges. Each edge was ~30 mins of surfacing, for a total of 2 hours. This makes me wish we had a big enough 5-axis." />
            <ImageWithCaption image={fins21} number={value()} caption="2 hours is a lot, but it was the fastest I could do without diminishing surface quality due to chatter. I made 3 of these test articles as practice beforehand to simulate the minimal rigidity I expected. This let me test all tool parameters including diameter, stepover, and feeds & speeds." />
            <ImageWithCaption image={fins10} number={value()} caption="I bored out two of the 0.25in holes to the exact diameter of two endmills by gradually changing the cutter diameter offset compensation. This gave me two features to use for relocating to Op2." />
            <ImageWithCaption image={fins11} number={value()} caption="Machining the second side leading and trailing edges. Yet another 2 hours..." />
            <ImageWithCaption image={fins12} number={value()} caption="Switching the workholding methods in order to access the other edges of the fins." />
            <ImageWithCaption image={fins13} number={value()} caption="Final step was to cut the remaining profiles, and then we have 2 fins! Now to repeat this 1.5 more times..." />
            <ImageWithCaption image={fins14} number={value()} caption="This is a comparison of my fins vs. the fins used for an older rocket. The edges' quality improved drastically, both in terms of surface finish and sharpness." />
            <ImageWithCaption image={fins15} number={value()} caption="I even went so far as to machine shadow foam on a gantry router in order to create a proper storage spot for all 5 fins." />
            <HR />
            <H5 className="text-center">There were many instances of the tool being very close to the workpiece. Many of these were unavoidable due to the part geometry and tool length requirements. I made sure to double triple check my measurements, both in CAM and real life, and as such I avoided any crashes. Here are some of my favorite closeups below:</H5>
            <ImageWithCaption image={fins16} number={value()} caption="" />
            <ImageWithCaption image={fins17} number={value()} caption="" />
            <ImageWithCaption image={fins18} number={value()} caption="" />
            <ImageWithCaption image={fins19} number={value()} caption="" />
        </div>
    )
}