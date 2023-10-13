import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import puzzle1 from './puzzle1.jpg'
import puzzle2 from './puzzle2.jpg'
import puzzle3 from './puzzle3.jpg'
import puzzle4 from './puzzle4.jpg'
import puzzle5 from './puzzle5.jpg'
import puzzle6 from './puzzle6.jpg'
import puzzle7 from './puzzle7.jpg'
import puzzle8 from './puzzle8.jpg'
import allwhite from './allwhite.jpg'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

const title = "Puzzles"
export const Thumbnail = (props) => {
    const description = "I like puzzles! I've done quite a few...."
 
    return (
        <ThumbnailTemplate title={title} description={description} image={puzzle1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <P className="mb-4 px-2 md:mb-4 lg:mb-8">I like puzzles! I think they're a great way to pass time, plus they make great wall decorations too</P>
        
            <ImageWithCaption image={puzzle1} number={value()} caption="'Sunset at the farm' - 1000pcs"/>
            <ImageWithCaption image={puzzle2} number={value()} caption="Untitled fall boat scene - 1000pcs"/>
            <ImageWithCaption image={puzzle3} number={value()} caption="'Peaceful moments' - 1000pcs"/>
            <ImageWithCaption image={puzzle4} number={value()} caption="'Pretty succulents' - 1000pcs"/>
            <ImageWithCaption image={puzzle5} number={value()} caption="'Purdue arches at sunset' - 1000pcs"/>
            <ImageWithCaption image={puzzle6} number={value()} caption="Untitled snowy landscape - 1000pcs"/>
            <ImageWithCaption image={puzzle7} number={value()} caption="Chicago transportation map - 500pcs"/>
            <ImageWithCaption image={puzzle8} number={value()} caption="'Flower Calendar' - 1008pcs"/>
            <ImageWithCaption image={allwhite} number={value()} caption="Should I buy this one??"/>
            
        </div>
    )
}