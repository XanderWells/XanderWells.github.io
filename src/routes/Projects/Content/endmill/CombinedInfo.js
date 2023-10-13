import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import endmill1 from './endmill1.jpg'
import endmill2 from './endmill2.jpg'
import endmill3 from './endmill3.jpg'
import endmill4 from './endmill4.jpg'
import endmill5 from './endmill5.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

const title = "Endmill Costume"
export const Thumbnail = (props) => {
    const description = "As part of a machine shop 2022 Halloween costume contest, I thought it would be funny to dress up as a Kennametal KOR 5 High Performance Solid Carbine Endmill... I wonder how late I stayed up making this..."
 
    return (
        <ThumbnailTemplate title={title} description={description} image={endmill1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>     
            <H1 className="text-center">{title}</H1>   
            <ImageWithCaption image={endmill1} number={value()} caption="Close up shot. Notice the through spindle coolant port"/>
            <ImageWithCaption image={endmill2} number={value()} caption="I'm quite proud here"/>
            <ImageWithCaption image={endmill4} number={value()} caption="It does indeed double my height"/>
            <ImageWithCaption image={endmill3} number={value()} caption="My buddy Atul dressed up as Titan Gilroy from Titans of CNC. Titan was the person who helped invent this endmill, so together we make quite the dynamic duo"/>
            <ImageWithCaption image={endmill5} number={value()} caption="I won first place as voted by my peers and got this trophy!"/>
            
        </div>
    )
}