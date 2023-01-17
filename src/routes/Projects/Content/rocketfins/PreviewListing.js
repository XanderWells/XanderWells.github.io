import Listing from "../../../../components/Listing/Listing";

const PreviewListing = () => {
    const description = "I made 5 rocket fins for Purdue Space Program's Boomie-Zoomie-B Rocket (3 main and 2 spare). This took place over ~40 hours over a single weekend. It was a lot of work, but it was great fun and the results were amazing. Part of this project's success involved feeds-and-speeds testing on smaller parts in order to find the fastest possible cutting values that still yielded the desired results"   

    return (
        <Listing title="Rocket Fins" description={description} />
    )
}

export default PreviewListing