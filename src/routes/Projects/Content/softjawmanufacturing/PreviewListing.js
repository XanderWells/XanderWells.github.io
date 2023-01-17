import Listing from "../../../../components/Listing/Listing";

const PreviewListing = () => {
    const description = "Soft Jaws dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet."

    return (
        <Listing title="Softjaw Manufacturing" description={description} />
    )
}

export default PreviewListing