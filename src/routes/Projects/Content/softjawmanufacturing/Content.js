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

const Content = () => {
    return (
        <div>
            <H3>I started by making a single part. I didn't bother with optimizing cycle time and I also wanted to see what tolerances I could acheive by machining the model 'as is'.</H3>
            <ImageWithCaption image={jaw1} caption="This was the result..."/>
            <ImageWithCaption image={jaw2} caption="...although it did fit into the vice, it required a mallet to force in and was much more difficult to remove compared to the original. Note that I didn't worry about finishing the sides or using the exact-size stock. This first part was for testing purposes."/>
            <HR />
            <H3>It was difficult to measure the key dimensions, since micrometers were too bulky to fit within the gaps. I was able to use in-machine probing and surface inspection to find certain measurements, but I also had to use other methods to determine which features were critical.</H3>
            <ImageWithCaption image={jaw8} caption="I accomplished this by painting on feature surfaces using a paint marker. By painting on the jaw, I could see which surfaces came into contact with the vice, as seen in the top left jaw. Later, I repeated this process but painted the vice instead, as seen in the bottom right jaw. There wasn't a specific need to switch the surface - I did this mainly to learn what would happen. I did this process enough times with both homemade and purchased jaws until I was confident in my tolerances."/>
            <HR />
            <ImageWithCaption image={jaw4} caption="I did many things in production to decrease cycle time. One example was modifying the final g-code so that the part would rotate to the correct orientation at the end of the cycle..."/>
            <ImageWithCaption image={jaw3} caption="...which made it easy to verify the jaws were machined correctly by testing the fit with an extra vice. After this, I included an optional stop which let me press cycle start when done measuring. This then oriented the table to allow easy access to opening the vice."/>
            <HR />
            <ImageWithCaption image={jaw9} caption="After finishing Op1 for all parts on the 5-axis, I used a drill-tap machine (HAAS DT-1) at max rapids, etc. to quickly finish Op2 for each part."/>
            <ImageWithCaption image={jaw6} caption="This resulted in a large quantity of softjaws for student use. Most of them have been used by now, but there are still a few remaining to remind me of my accomplishments."/>
            <HR />
            <H3 className="text-center">I made lots of chips during the production run, which required some hefty cleanup at the end... Here are some examples:</H3>
            <ImageWithCaption image={jaw5} caption=""/>
            <ImageWithCaption image={jaw7} caption=""/>
            <ImageWithCaption image={jaw10} caption=""/>
            <ImageWithCaption image={jaw11} caption=""/>
        </div>
    )
}

export default Content