import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"
import HR from "../../../../components/HR/HR"
import lux1 from './lux1.png'
import lux2 from './lux2.png'
import lux3 from './lux3.png'
import lux4 from './lux4.png'
import lux5 from './lux5.png'
import lux6 from './lux6.png'
import lux7 from './lux7.png'
import lux8 from './lux8.png'
import lux9 from './lux9.png'
import lux10 from './lux10.png'
import lux11 from './lux11.png'
import lux12 from './lux12.png'
import lux13 from './lux13.png'
import lux15 from './lux15.png'
import lux16 from './lux16.png'
import lux17 from './lux17.png'
import lux18 from './lux18.png'
import lux19 from './lux19.png'
import lux20 from './lux20.png'


import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"
import H1 from "../../../../components/Text/H1"
import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H3 from "../../../../components/Text/H3"
import H5 from "../../../../components/Text/H5"
const title = "LUX"
export const Thumbnail = (props) => {
    const description = "Purdue Solar Racing's upcoming car, intended to race from one side of the US to the other on a single starting charge in the 2024 American Solar Challenge. Currently at the near final design phase, I am responsible for chassis and mold design, managing progress for all other composites designs, and ensuring all composite structures integrate properly with the rest of the car"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={lux1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>     
            <H1 className="text-center">{title}</H1>  
            <HR></HR> 
            <H3 className="text-center">Chassis model</H3>
            <ImageWithCaption image={lux1} number={value()} caption="Overall ISO view"/>
            <ImageWithCaption image={lux7} number={value()} caption="Overall ISO view without driver model or aeroshell"/>
            <ImageWithCaption image={lux2} number={value()} caption="Cross section with driver model"/>
            <ImageWithCaption image={lux3} number={value()} caption="Cross section without driver model"/>
            <ImageWithCaption image={lux4} number={value()} caption="Detail view of seat, rear suspension, and rollcage mounting panels. No panel serves a singlular purpose, they all work to reinforce each other and carry load from more than just one source"/>
            <ImageWithCaption image={lux5} number={value()} caption="Detail view of steering column. Mechanical is finalizing steering angles so the current steering column is just a sketch. Similar to above, no panel serves just a singular purpose"/>
            <ImageWithCaption image={lux6} number={value()} caption="Detail view of battery tray"/>
            
            <ImageWithCaption image={lux13} number={value()} caption="The entire model is mostly driven by a single side-view sketch and is also tied to equations where needed. This makes is much easier to make modifications. Major model constraints (eg spacing between front wheel suspension) is controlled by a master model that the chassis references. Top-down assemblies are great!"/>
            <HR></HR> 
            <H3 className="text-center">Mold Design</H3>
            <ImageWithCaption image={lux8} number={value()} caption="Originally only had access to a 3-axis CNC router with 4in max model Z height. This lead to an overly-complicated design with lots of panels assembled at different orientations wrt each other"/>
            <H5 className="text-center">Fortunately our amazing president found a machining sponsor (Thermwood) - they have ultra-large-scale 5-axis CNC routers and agreed to machine molds for us</H5>
            <ImageWithCaption image={lux9} number={value()} caption="Another sponsor also convinced me for many reasons to switch to a positive foam tool, which we will then use to create a negative composite mold"/>
            <ImageWithCaption image={lux10} number={value()} caption="Side-view of the topshell-canopy-windshield model. The polycarb windshield is bonded to the canopy (kevlar). The canopy is fixed to the topshell through a hinge in the front, which allows for fast driver egress"/>
            <ImageWithCaption image={lux11} number={value()} caption="Detailed cross-section of the flange between the canopy and topshell. Note that surfaces instead of solid models are used to due limitations of CAD software"/>
            <ImageWithCaption image={lux12} number={value()} caption="Same cross-section, but now at the front of the model, where the windshield is"/>
            {/* <H5 className="text-center"></H5> */}
            <HR></HR> 
            <H3 className="text-center">Surface Modeling in 3DX/CATIA V5 for Top Shell Mold</H3>
            
            <ImageWithCaption image={lux15} number={value()} caption=""/>
            {/* <ImageWithCaption image={lux14} number={value()} caption=""/> */}
            <ImageWithCaption image={lux16} number={value()} caption=""/>

            <HR></HR> 
            <H3 className="text-center">Hinge Design (head-on cross section)</H3>
            <ImageWithCaption image={lux17} number={value()} caption="Closed State"/>
            <ImageWithCaption image={lux18} number={value()} caption="Opening State - must avoid rollcage"/>
            <ImageWithCaption image={lux19} number={value()} caption="Opened State - topshell must be 90deg wtr the vertical and as high as possible"/>
            <ImageWithCaption image={lux20} number={value()} caption="This sketch solves for the position of the joints automatically, using the constraints above"/>
        </div>
    )
}