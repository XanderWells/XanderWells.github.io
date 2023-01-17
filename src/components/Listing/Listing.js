import H1 from "../Text/H1"
import P from "../Text/P"
import Image from "../Image/Image"

import { Link } from "react-router-dom"

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
                    <P className="my-4 lg:mb-8 lg:mt-0">{props.description}</P>
                    <Link className="self-center lg:self-start max-w-xs w-full" to={`/projects/${props.title.toLowerCase().replaceAll(' ','')}`}>
                        <button className="border-[3px] border-orange-400 text-orange-400 hover:shadow hover:shadow-orange-900 py-2 px-3 rounded hover:bg-orange-400 hover:bg-opacity-10 transition-all w-full">Learn More</button>
                    </Link>
                </div>
                <div className=" lg:w-1/2 lg:ml-4 flex items-center justify-center">
                    <Image />
                </div>
            </div>
        </div>
    )
}

Listing.defaultProps = {
    title: "Unlabeled Listing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit purus. Vivamus elementum placerat mauris, eu auctor libero ultricies quis. Pellentesque accumsan odio sed vestibulum aliquet.",
}

export default Listing