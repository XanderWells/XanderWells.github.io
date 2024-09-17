import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"

import website1 from './website1.webp'
import website2 from './website2.webp'
import website3 from './website3.webp'
import website4 from './website4.webp'
import website5 from './website5.webp'
import website6 from './website6.webp'
import website7 from './website7.webp'

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

const title = "This Website"
export const Thumbnail = (props) => {
    const description = "I programmed my own website! This is built from scratch, programmed in JavaScript using the ReactJS framework. I'm using TailwindCSS for styling because it plays well with JS frameworks and I dislike coming up with CSS class names or using external stylesheets"
 
    return (
        <ThumbnailTemplate title={title} description={description} image={website1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>    
             <H1 className="text-center">{title}</H1>
            <ImageWithCaption image={website1} number={value()} caption="I could definitely have used a website creator, but I think webdev is fun. Also, being able to program this from scratch gives me exact control of the end product. I can also add things like a custom loading screen, togglable numbered images, and so on"/>
            
            <ImageWithCaption image={website2} number={value()} caption="Each url 'section' (xanderwells.me/projects, xanderwells.me/personal, etc) is a class with various parameters. Each 'subsection' url (/projects/lux, /projects/website, /personal/mycat, etc) is represented as an array within the section class"/>
            <ImageWithCaption image={website7} number={value()} caption="The page routing (ie url structure) is done 100% dynamically, meaning it is very easy for me to add to or rearrange my site layout. I don't have to worry about managing descrepancies between different url names and such"/>
            
            <ImageWithCaption image={website4} number={value()} caption="This is my folder layout for all subsections. The only restriction / code duplication is that the folder name must match what I type in the subsection url arrays"/>
            <ImageWithCaption image={website3} number={value()} caption="To create a new subsection, I just need to copy the 'template' folder. There is only a single file to modify, as seen here. The Thumbnail function controls what you see on my main page (ie just xanderwells.me). The Content function controls what you see on the relevant subsection page"/>
            <ImageWithCaption image={website6} number={value()} caption="This function takes a section class as an input and dynamically imports the 'Thumbnail' portions of all subsections that belong to said section class. It then combines the Thumbnail functions for each subsection into a single element and adds in extra text (headers, styling, etc). This is then what you see on the homepage"/>
            <ImageWithCaption image={website5} number={value()} caption="This function takes a subsection url as an input. Next, it imports the Content function of the subsection. It then adds extra wrapping content (loading screen, buttons, etc)."/>
            <P className="text-center">^^Note that the images shown above might not be 100% up to date. They should still show the general idea though^^</P>   
        </div>
    )
}