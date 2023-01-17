import Listing from "../../../../components/Listing/Listing";
import jaw1 from "./jaw1.jpg";

const PreviewListing = () => {
    const description = "One of my first big tasks when I was a manufacturing TA at the Bechtel Innovation Design Center was to create softjaws for members to use. The manufacture-supplied softjaws were ~$300 per set, which meant that they were a difficult option to recommend that students use. This project tested my tolerancing skills and also gave me the opportunity to practice higher-volume production runs. In the end, the large quantity of softjaws that I made are still being used today."

    return (
        <Listing title="Softjaw Manufacturing" description={description} image={jaw1} />
    )
}

export default PreviewListing