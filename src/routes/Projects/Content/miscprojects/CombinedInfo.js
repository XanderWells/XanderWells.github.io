
import misc1 from "./misc1.webp"
import misc2 from "./misc2.webp"
import misc3 from "./misc3.webp"
import misc4 from "./misc4.webp"
import misc5 from "./misc5.webp"
import misc6 from "./misc6.webp"
import misc7 from "./misc7.webp"
import misc8 from "./misc8.webp"
import misc9 from "./misc9.webp"
import misc10 from "./misc10.webp"
import misc11 from "./misc11.webp"
import misc12 from "./misc12.webp"
import misc13 from "./misc13.webp"
import misc14 from "./misc14.webp"
import misc15 from "./misc15.webp"
import misc16 from "./misc16.webp"
import misc17 from "./misc17.webp"
import misc18 from "./misc18.webp"

import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import HR from "../../../../components/HR/HR"
import H3 from "../../../../components/Text/H3"
import P from "../../../../components/Text/P"
import H1 from "../../../../components/Text/H1"

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"


import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";

const title = "Misc Projects"
export const Thumbnail = (props) => {
    const description = "I've worked on a lot of other projects as well. Not all of them deserve a full, dedicated section, but together, the magnitude of these projects adds up to results I am proud of and that I think make a difference. These projects are for clubs, work, or just as personal projects"

    return (
        <ThumbnailTemplate title={title} description={description} image={misc5} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <ImageWithCaption image={misc1} number={value()} caption="Beginner machine training project - facing and engraving carbon steel. This was the first part I made at Purdue - gotta start somewhere!"/>
            <ImageWithCaption image={misc2} number={value()} caption="Electric skateboard motor mounting brackets - 6061 - these fixed the motor plate to the skateboard truck"/>
            <ImageWithCaption image={misc3} number={value()} caption="Ship wall hanging piece. Machined on a large gantry router for learning purposes"/>
            <HR />
            <H3 className='text-center'>Aluminum Launch Lugs:</H3>
            <ImageWithCaption image={misc4} number={value()} caption="My first 5 axis part. Used to attatch rocket to launch rail "/>
            <ImageWithCaption image={misc7} number={value()} caption="Finished surface which I then decided to sandblast"/>
            <ImageWithCaption image={misc5} number={value()} caption="This part was machined in 2 ops. Op0 machined the dovetail, and Op1 did everything else. I used tabs to avoid having to add an Op2"/>
            <ImageWithCaption image={misc6} number={value()} caption="The tool chuck came quite close to the part, but I was very careful in CAM and setup, and thus knew what steps to take here to avoid crashes"/>
            <HR />
            <ImageWithCaption image={misc8} number={value()} caption="2 LEGO pieces I made and taught 15 other people to make as part of a manufacturing training program"/>
            <ImageWithCaption image={misc9} number={value()} caption="Fin can spacers - 6061"/>
            <ImageWithCaption image={misc10} number={value()} caption="Tubing stability mounts - 6061"/>
            <HR />
            <H3 className="text-center">International Manufacturing Trade Show:</H3>
            <P className="mb-2">I got the opportunity in Fall 2022 to represent Purdue at IMTS. I spent most my time at our booth, but I also got the chance to walk around, see cool machines, and meet many people I look up to</P>
            <ImageWithCaption image={misc11} number={value()} caption="This is me showing off our display centerpiece to Abom79. I made it to his social media!"/>
            <ImageWithCaption image={misc12} number={value()} caption="Me with Titan Gilroy from Titans of CNC"/>
            <ImageWithCaption image={misc13} number={value()} caption="Me with John Saunders from NYC CNC / Saunders Machine Works"/>
            <ImageWithCaption image={misc14} number={value()} caption="Ran into Mark Terryberry from HAAS at the hotel lobby!"/>
            <HR />
            <H3 className="text-center">Foamcore Panel Inserts</H3>
            <P className="mb-2">These inserts are placed in foamcore composite panels used by my solar racing team car chassis. You can then put screws through the insert without having to worry about ruining the panels. The purpose of this testing is to explore viable solutions for our upcoming car</P>
            <ImageWithCaption image={misc16} number={value()} caption="Solution 1 was more elaborate and contained 2 screw holes"/>
            <ImageWithCaption image={misc17} number={value()} caption="The sides had slots which allowed for epoxy to settle in and fix the outer side walls of the insert to the foamcore itself"/>
            <ImageWithCaption image={misc15} number={value()} caption={`I was able to machine only 0.004" away from the vice because I probed my Z off the vice top surface. A bit nerve wracking, but it worked in the end`}/>
            <ImageWithCaption image={misc18} number={value()} caption="This solution is much more simple, and can also be mass produced on a Y-axis lathe. The 3 outer holes serve as epoxy ports"/>
            
        </div>
    )
}