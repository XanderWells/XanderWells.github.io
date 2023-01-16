import H1 from "../Text/H1"
import Image from "../Image/Image"

const Listing = (props) => {
    return (
        <div className="bg-gray-900 md:rounded lg:rounded-md mb-4 lg:mb-8 p-4 lg:p-8 shadow-lg shadow-gray-900">
            <div className="lg:hidden text-center"> 
                <H1>{props.title}</H1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center">
                <div className="lg:w-1/2 lg:mr-4 flex flex-col justify-between">
                    <div className="hidden lg:block">
                        <H1>{props.title}</H1>
                    </div>
                    <p className="my-4 lg:mb-8 lg:mt-0">{props.description}</p>
                    <button className="border-[3px] border-orange-400 text-orange-400 py-2 px-3 rounded hover:bg-orange-400 hover:bg-opacity-10 transition-all self-center lg:self-start max-w-xs w-full">Learn More</button>
                </div>
                <div className=" lg:w-1/2 lg:ml-4 flex items-center justify-center">
                    <Image />
                </div>
            </div>
            {/* <div className="flex flex-col lg:flex-row-reverse">

                <div className="flex items-center justify-center">
                    <Image />
                </div>
                <div className="flex flex-col lg:flex lg:mr-8">
                    <div className="hidden lg:block">
                        <H1>{props.title}</H1>
                    </div>
                    <p className="mb-2">{props.description}</p>
                    <button className="border-[3px] border-orange-400 text-orange-400 py-2 px-3 rounded hover:bg-orange-400 hover:bg-opacity-10 transition-all mt-auto max-w-xs self-center lg:mr-auto w-full">Learn More</button>
                </div>
            </div> */}
        </div>
    )
}

Listing.defaultProps = {
    title: "Unlabeled Listing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet.",
}

export default Listing