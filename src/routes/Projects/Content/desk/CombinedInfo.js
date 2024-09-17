import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import desk2 from './desk2.webp'
import desk3 from './desk3.webp'
import desk4 from './desk4.webp'
import desk5 from './desk5.webp'
import desk6 from './desk6.webp'
import desk7 from './desk7.webp'
import desk8 from './desk8.webp'
import desk9 from './desk9.webp'
import desk10 from './desk10.webp'
import desk11 from './desk11.webp'
import desk12 from './desk12.webp'
import desk13 from './desk13.webp'
import desk15 from './desk15.webp'
import desk16 from './desk16.webp'
import desk17 from './desk17.webp'
import desk18 from './desk18.webp'
import desk19 from './desk19.webp'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"
const title = "Fancy L-Desk"
export const Thumbnail = (props) => {
    const description = "I designed and built a fancy desk completely from scratch, starting with non-dimensional lumber (white oak and walnut) and ended up with something I'm really proud of. This features white oak surfaces with a 2x2 walnut structure and walnut inlay patterns. The structure uses mortise and tenon joints exclusively - no nails or screws"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={desk17} link={props.link}/>
    )
}

export const Content = () => {
    
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)
    return (
        <div>        
            <H1 className="text-center">{title}</H1>
            <ImageWithCaption image={desk2} number={value()} caption="CAD view #1"/>
            <ImageWithCaption image={desk3} number={value()} caption="CAD view #2"/>
            <ImageWithCaption image={desk5} number={value()} caption="Creating a flat face on the walnut slabs using a gantry router"/>
            <ImageWithCaption image={desk4} number={value()} caption="Couldn't seal the entire perimeter due to extreme wood warping, so I sealed the edges using raised foam instead"/>
            <ImageWithCaption image={desk6} number={value()} caption="Lots of chips!!"/>
            <ImageWithCaption image={desk7} number={value()} caption="White oak panels (non-dimensional) for all surfaces"/>
            <ImageWithCaption image={desk8} number={value()} caption="After lots of jointing and planing, I had the flat panels set out and began to find the best surface arrangement"/>
            <ImageWithCaption image={desk11} number={value()} caption="Gluing together some of the flat panels"/>
            <ImageWithCaption image={desk19} number={value()} caption="Using Fusion360 nesting to planout how to cut the walnut beams out of my larger walnut boards. Note how I'm using basically all of the walnut I have"/>
            <ImageWithCaption image={desk9} number={value()} caption="Layout for the walnut structure"/>
            <ImageWithCaption image={desk10} number={value()} caption="Gluing together the top structure"/>
            <ImageWithCaption image={desk12} number={value()} caption="Gluing together the entire bottom structure and shelves"/>
            <ImageWithCaption image={desk13} number={value()} caption="Slots machined on a gantry router. I cut walnut strips and sanded each strip to the required length and angle for the inlay"/>
            {/* <ImageWithCaption image={desk14} number={value()} caption="Template Caption"/> */}
            <ImageWithCaption image={desk15} number={value()} caption="After 30+ hours of inlay work and about the same amount of sanding, the desk was ready for finish to be applied"/>
            <ImageWithCaption image={desk16} number={value()} caption="I used 4 coats of wipe on polyurethane"/>
            <ImageWithCaption image={desk17} number={value()} caption="Finished product! The desk is so big that I had to take my front door off its hinges for the desk to fit through"/>
            <ImageWithCaption image={desk18} number={value()} caption="Here's my current setup!"/>
            
        </div>
    )
}