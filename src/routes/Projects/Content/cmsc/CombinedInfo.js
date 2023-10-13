import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import cmsc1 from './cmsc1.jpg'
import cmsc2 from './cmsc2.jpg'
import cmsc3 from './cmsc3.jpg'
import cmsc4 from './cmsc4.jpg'
import cmsc5 from './cmsc5.jpg'
import cmsc6 from './cmsc6.jpg'
import cmsc8 from './cmsc8.jpg'
import cmsc9 from './cmsc9.jpg'
import cmsc10 from './cmsc10.jpg'
import cmsc11 from './cmsc11.jpg'
import cmsc12 from './cmsc12.jpg'
import cmsc13 from './cmsc13.jpg'
import cmsc14 from './cmsc14.jpg'
import cmsc15 from './cmsc15.jpg'
import cmsc16 from './cmsc16.jpg'
import cmsc17 from './cmsc17.jpg'
import HR from "../../../../components/HR/HR"

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
import H3 from "../../../../components/Text/H3"
import H5 from "../../../../components/Text/H5"

const title = "CMSC"
export const Thumbnail = (props) => {
    const description = "Purdue Composites Manufacturing and Simulation Center Research Intern - Jan 2022 to Present"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={cmsc1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            {/* <P className="mb-4 px-2 md:mb-4 lg:mb-8">More info coming soon!</P> */}
        
            <ImageWithCaption image={cmsc1} number={value()} caption="Somehow I keep finding myself here..."/>
            
            <ImageWithCaption image={cmsc17} number={value()} caption="I am part of a research group developing the carbon fiber superstructure for the CMS Large Hadron Collider phase II upgrade"/>
            <HR></HR>
            <H3 className="text-center">Metals</H3>
            <ImageWithCaption image={cmsc2} number={value()} caption="Support panel for bonding two tubular sections together"/>
            
            <ImageWithCaption image={cmsc4} number={value()} caption="Locating brackets to accurately fit a tube to the above flate plate. The curvature of the slots matches the diameter of the tube. The pins are tapered for ease of assembly"/>
            <ImageWithCaption image={cmsc3} number={value()} caption="Brackets to hold a separate circular tube to a radial disk"/>
            <ImageWithCaption image={cmsc8} number={value()} caption="Testing feasibility of machining titanium brackets. This was my first time working with ISO S alloys"/>
            <ImageWithCaption image={cmsc9} number={value()} caption="The parts (only needed 1st op for demonstration) machined very well, but the cycle time and cost was determined to be too high to invest in"/>
            
            <HR></HR>
            <H3 className="text-center">Engineering Plastics</H3>
            <ImageWithCaption image={cmsc10} number={value()} caption="Brackets used to mount a dectector end section to a joining plate"/>
            <ImageWithCaption image={cmsc11} number={value()} caption="All stock come from a 3d printer. These lighter colored parts are printed with a PC-graphite material for thermal conductivity reasons, which is porous and extremely brittle. Without a torque wrench, clamping in the vice was difficult for Op 2. Too much clamping breaks the part as seen above - not enough and the part flies loose"/>
            <HR></HR>
            <ImageWithCaption image={cmsc14} number={value()} caption="Op 0 work. There weren't any extension-style/adjustable toe clamps, so I had to improvise using the solution seen on the left"/>
            <ImageWithCaption image={cmsc15} number={value()} caption="Flattening the face by manually handjogging"/>
            <ImageWithCaption image={cmsc12} number={value()} caption="With a flat face now established, I can flip the part over and use the painter's tape / superglue trick for workholding"/>
            <ImageWithCaption image={cmsc13} number={value()} caption="End of Op 1. Between Op 1 and 2 I cut the stock between the 2 parts. I machined a tooling board fixture plate for part location and used the same superglue trick to secure the part for Op2"/>
            <ImageWithCaption image={cmsc16} number={value()} caption="Final results. These are used to join two semi-cylinders of different diameters to each other. I had made an extra spare just in case, now I get to keep it!"/>
            
            <HR></HR>
            <H3 className="text-center">Ply Drape Simulation</H3>
            <ImageWithCaption image={cmsc5} number={value()} caption="Using CATIA V5 to analyze shearing of composites during the layup process. I modeled darts to reduce the composite shear to an acceptable value"/>
            <ImageWithCaption image={cmsc6} number={value()} caption="I created a DXF files of the plies and used Fusion360's nesting/arrange tools to ensure minimimum material cost and wastage. I then cut the prepreg plies on a Gerber table"/>
        </div>
    )
}