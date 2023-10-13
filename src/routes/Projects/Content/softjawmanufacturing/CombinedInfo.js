import jaw1 from "./jaw1.jpg";
import jaw2 from "./jaw2.jpg";
import jaw3 from "./jaw3.jpg";
import jaw4 from "./jaw4.jpg";
import jaw5 from "./jaw5.jpg";
import jaw6 from "./jaw6.jpg";
import jaw7 from "./jaw7.jpg";
import jaw8 from "./jaw8.jpg";
import jaw9 from "./jaw9.jpg";
import jaw10 from "./jaw10.jpg";
import jaw11 from "./jaw11.jpg";

import P from "../../../../components/Text/P";
import H3 from "../../../../components/Text/H3";
import HR from "../../../../components/HR/HR";

import ImageWithCaption from "../../../../components/Image/ImageWithCaption";

import { useContext } from "react"
import NumberContext from "../../../../components/Contexts/NumberContext"
import useIncrements from "../../../../components/Hooks/useIncrements"

import ThumbnailTemplate from "../../../../components/Thumbnail/ThumbnailTemplate";
import H1 from "../../../../components/Text/H1"

const title = "Softjaw Manufacturing"
export const Thumbnail = (props) => {
    const description = "One of my first big tasks when I was a manufacturing TA at the Bechtel Innovation Design Center was to create softjaws for members to use. The manufacture-supplied softjaws were ~$300 per set, which meant that they were a difficult option to recommend that students use. This project tested my tolerancing skills and also gave me the opportunity to practice higher-volume production runs. In the end, the large quantity of softjaws that I made are still being used today."

    return (
        <ThumbnailTemplate title={title} description={description} image={jaw1} link={props.link}/>
    )
}

export const Content = () => {
    const {num, setNum} = useContext(NumberContext)
    const [value] = useIncrements(num)
    return (
        <div>
            <H1 className="text-center">{title}</H1>
            <H3>I started by making a single part. I didn't bother with optimizing cycle time and I also wanted to see what tolerances I could acheive by machining the model 'as is'.</H3>
            <ImageWithCaption image={jaw1} number={value()} caption="This was the result..."/>
            <ImageWithCaption image={jaw2} number={value()} caption="...although it did fit into the vice, it required a mallet to force in and was much more difficult to remove compared to the original. Note that I didn't worry about finishing the sides or using the exact-size stock. This first part was for testing purposes."/>
            <HR />
            <H3>It was difficult to measure the key dimensions, since micrometers were too bulky to fit within the gaps. I was able to use in-machine probing and surface inspection to find certain measurements, but I also had to use other methods to determine which features were critical.</H3>
            <ImageWithCaption image={jaw8} number={value()} caption="I accomplished this by painting on feature surfaces using a paint marker. By painting on the jaw, I could see which surfaces came into contact with the vice, as seen in the top left jaw. Later, I repeated this process but painted the vice instead, as seen in the bottom right jaw. There wasn't a specific need to switch the surface - I did this mainly to learn what would happen. I did this process enough times with both homemade and purchased jaws until I was confident in my tolerances."/>
            <HR />
            <ImageWithCaption image={jaw4} number={value()} caption="I did many things in production to decrease cycle time. One example was modifying the final g-code so that the part would rotate to the correct orientation at the end of the cycle..."/>
            <ImageWithCaption image={jaw3} number={value()} caption="...which made it easy to verify the jaws were machined correctly by testing the fit with an extra vice. After this, I included an optional stop which let me press cycle start when done measuring. This then oriented the table to allow easy access to opening the vice."/>
            <HR />
            <ImageWithCaption image={jaw9} number={value()} caption="After finishing Op1 for all parts on the 5-axis, I used a drill-tap machine (HAAS DT-1) at max rapids, etc. to quickly finish Op2 for each part."/>
            <ImageWithCaption image={jaw6} number={value()} caption="This resulted in a large quantity of softjaws for student use. Most of them have been used by now, but there are still a few remaining to remind me of my accomplishments."/>
            <HR />
            <H3 className="text-center">I made lots of chips during the production run, which required some hefty cleanup at the end... Here are some examples:</H3>
            <ImageWithCaption image={jaw5} number={value()} caption=""/>
            <ImageWithCaption image={jaw7} number={value()} caption=""/>
            <ImageWithCaption image={jaw10} number={value()} caption=""/>
            <ImageWithCaption image={jaw11} number={value()} caption=""/>
        </div>
    )
}