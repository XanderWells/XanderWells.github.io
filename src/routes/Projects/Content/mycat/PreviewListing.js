import Listing from "../../../../components/Listing/Listing";

const PreviewListing = () => {
    const description = "This has nothing to do with any of my technical projects... my family just has an adorable cat named Andrés. I feel the need to spread his cuteness everywhere."
 
    return (
        <Listing title="My Cat" description={description} />
    )
}

export default PreviewListing