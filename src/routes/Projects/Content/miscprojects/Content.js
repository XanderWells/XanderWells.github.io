
import misc1 from "./misc1.jpg"
import misc2 from "./misc2.jpg"
import misc3 from "./misc3.jpg"
import misc4 from "./misc4.jpg"
import misc5 from "./misc5.jpg"
import misc6 from "./misc6.jpg"
import misc7 from "./misc7.jpg"
import misc8 from "./misc8.jpg"
import misc9 from "./misc9.jpg"
import misc10 from "./misc10.jpg"
import misc11 from "./misc11.jpg"
import misc12 from "./misc12.jpg"
import misc13 from "./misc13.jpg"
import misc14 from "./misc14.jpg"
import misc15 from "./misc15.jpg"
import misc16 from "./misc16.jpg"
import misc17 from "./misc17.jpg"
import misc18 from "./misc18.jpg"
import misc19 from "./misc19.jpg"

import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import HR from "../../../../components/HR/HR"
import H3 from "../../../../components/Text/H3"
import P from "../../../../components/Text/P"

const Content = () => {
    return (
        <div>
            <ImageWithCaption image={misc1} caption="Beginner machine training project - facing and engraving carbon steel. This was the first part I made at Purdue - gotta start somewhere!"/>
            <ImageWithCaption image={misc2} caption="Electric skateboard motor mounting brackets - 6061 - these fixed the motor plate to the skateboard truck."/>
            <ImageWithCaption image={misc3} caption="Ship wall hanging piece. Machined on a large gantry router for learning purposes."/>
            <HR />
            <H3 className='text-center'>Aluminum Launch Lugs:</H3>
            <ImageWithCaption image={misc4} caption="My first 5 axis part. Used to attatch rocket to launch rail. "/>
            <ImageWithCaption image={misc7} caption="Finished surface which I then decided to sandblast."/>
            <ImageWithCaption image={misc5} caption="This part was machined in 2 ops. Op0 machined the dovetail, and Op1 did everything else. I used tabs to avoid having to add an Op2."/>
            <ImageWithCaption image={misc6} caption="The tool chuck came quite close to the part, but I was very careful in CAM and setup, and thus knew what steps to take here to avoid crashes."/>
            <HR />
            <ImageWithCaption image={misc8} caption="2 LEGO pieces I made and taught 15 other people to make as part of a manufacturing training program."/>
            <ImageWithCaption image={misc9} caption="Fin can spacers - 6061."/>
            <ImageWithCaption image={misc10} caption="Tubing stability mounts - 6061"/>
            <HR />
            <H3 className="text-center">International Manufacturing Trade Show:</H3>
            <P className="mb-2">I got the opportunity in Fall 2022 to represent Purdue at IMTS. I spent most my time at our booth, but I also got the chance to walk around, see cool machines, and meet many people I look up to.</P>
            <ImageWithCaption image={misc11} caption="This is me showing off our display centerpiece to Abom79. I made it to his social media!"/>
            <ImageWithCaption image={misc12} caption="Me with Titan Gilroy from Titans of CNC."/>
            <ImageWithCaption image={misc13} caption="Me with John Saunders from NYC CNC / Saunders Machine Works."/>
            <ImageWithCaption image={misc14} caption="Ran into Mark Terryberry from HAAS at the hotel lobby!"/>
            <HR />
            <H3 className="text-center">Foamcore Panel Inserts</H3>
            <P className="mb-2">These inserts are placed in foamcore composite panels used by my solar racing team car chassis. You can then put screws through the insert without having to worry about ruining the panels. The purpose of this testing is to explore viable solutions for our upcoming car.</P>
            <ImageWithCaption image={misc16} caption="Solution 1 was more elaborate and contained 2 screw holes."/>
            <ImageWithCaption image={misc17} caption="The sides had slots which allowed for epoxy to settle in and fix the outer side walls of the insert to the foamcore itself."/>
            <ImageWithCaption image={misc15} caption={`I was able to machine only 0.004" away from the vice because I probed my Z off the vice top surface. A bit nerve wracking, but it worked in the end.`}/>
            <ImageWithCaption image={misc18} caption="This solution is much more simple, and can also be mass produced on a Y-axis lathe. The 3 outer holes serve as epoxy ports."/>
            <HR />
            <ImageWithCaption image={misc19} caption="Brackets for Purdue composites research - 6061."/>
        </div>
    )
}

export default Content