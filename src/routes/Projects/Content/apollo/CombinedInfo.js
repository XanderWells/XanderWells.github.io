import ImageWithCaption from "../../../../components/Image/ImageWithCaption"
import P from "../../../../components/Text/P"
import H5 from "../../../../components/Text/H5"
import HR from "../../../../components/HR/HR"
import apollo1 from './apollo1.jpeg'
import apollo2 from './apollo2.jpg'
import apollo3 from './apollo3.jpg'
import apollo4 from './apollo4.jpg'
import apollo5 from './apollo5.jpg'
import apollo6 from './apollo6.jpg'
import apollo7 from './apollo7.jpg'
import apollo8 from './apollo8.jpg'
import apollo9 from './apollo9.jpg'
import apollo10 from './apollo10.jpg'
import apollo11 from './apollo11.JPG'
import apollo12 from './apollo12.JPG'
import apollo13 from './apollo13.jpg'
import apollo14 from './apollo14.jpg'
import apollo15 from './apollo15.jpg'


import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H3 from "../../../../components/Text/H3"
import H1 from "../../../../components/Text/H1"

const title = "Apollo Solar Car"
export const Thumbnail = (props) => {
    const description = "Apollo took 3 months to build from start to finish. As composites lead, I was responsible for managing and performing over 20+ layups. I can't even begin to count how much time I spent planning and working on this project. I can barely cover the tip of the iceberg here"

    return (
        <ThumbnailTemplate title={title} description={description} image={apollo1} link={props.link} />
    )
}

export const Content = () => {
    const { num, setNum } = useContext(NumberContext)
    const [value] = useIncrements(num)

    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <ImageWithCaption image={apollo1} number={value()} caption="Apollo in front of the Purdue Engineering Fountain" />

            <HR></HR>
            <H3 className="text-center">Chassis Corner Reinforcement</H3>
            
            <ImageWithCaption image={apollo12} number={value()} caption="3 plies of carbon fiber are used on each edge to reinforce the bonds between chassis panels" />
            <ImageWithCaption image={apollo11} number={value()} caption="This corner reinforcement layup was quite difficult to access" />
            <ImageWithCaption image={apollo10} number={value()} caption="This is me reaching all the way back to do the above layup" />
            <HR></HR>
            <H3 className="text-center">Practice Topshell Layup</H3>
            <ImageWithCaption image={apollo2} number={value()} caption="Prepping vacuum bagging" />
            <ImageWithCaption image={apollo3} number={value()} caption="The mold itself - printed and machined by our sponsor Thermwood! Tape parts the top-bottom apex line" />
            <ImageWithCaption image={apollo4} number={value()} caption="Spreading epoxy on a plastic sheet" />
            <ImageWithCaption image={apollo5} number={value()} caption="Draping dry fabric on the sheet" />
            <ImageWithCaption image={apollo6} number={value()} caption="Further saturating the dry fabric. Excess epoxy can be squeezed out at this point" />
            <ImageWithCaption image={apollo7} number={value()} caption="The plastic sheet lets us carry the fabric to the mold" />
            <ImageWithCaption image={apollo8} number={value()} caption="After pressing the fiber down, the plastic can be removed. We call this method 'pseudo-prepreg'. This is a cleaner process and gets us a better fiber/epoxy ratio than if we were to directly brush epoxy on the mold" />
            <ImageWithCaption image={apollo9} number={value()} caption="Pulling vacuum after release film, breather, and bagging was done" />
            <HR></HR>
            <H3 className="text-center">Actual Topshell Layup</H3>
            <div className="relative tranlate-y-0">
                <img className="block w-full h-auto opacity-0" src="http://placehold.it/16x9" />
                <iframe className="absolute rounded md:rounded-md lg:rounded-lg top-0 left-0 w-full h-full" src="https://drive.google.com/file/d/13vM2NufzVwV-eevHv73i8QGfORnmAqZP/preview" allowFullScreen allow="autoplay"></iframe>
            </div>
            <H5 className="text-center mt-2">Full timelapse of the top aeroshell layup. This followed the same process and took over 8 hours from cutting the fabric to finishing cleanup. This is the largest undergrad composite layup in Purdue history</H5>



            <HR></HR>
            <H3 className="text-center">Sanding / Polishing</H3>
            
            <ImageWithCaption image={apollo14} number={value()} caption="Me after 8 hours of continuously sanding the top shell. This is what motivated me to purchase a full-face respirator" />
            <ImageWithCaption image={apollo13} number={value()} caption="I managed to get a smooth result though!" />
            


        </div>
    )
}