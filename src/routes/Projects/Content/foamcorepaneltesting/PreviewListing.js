import Listing from "../../../../components/Listing/Listing";

const PreviewListing = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet."

    return (
        <Listing title="Foamcore Panel Testing" description={description} />
    )
}

export default PreviewListing