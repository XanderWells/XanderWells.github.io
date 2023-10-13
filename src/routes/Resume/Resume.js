import pdf from "./Fall '23 Xander Wells Resume.pdf"

const Resume = () => {
    return (
        <div className="text-center my-10 border-t-[1px] border-gray-500 pt-10">
            {/* <button onClick={() => {window.location.href=pdf}}>Open My Resume ↗</button> */}
            <p>If you're interested:</p>
            <div className="mt-4 pb-4">
                <a href={pdf} className=" text-orange-400 border-[3px] border-orange-400 underline hover:text-orange-500 px-2 py-2 transition-all hover:shadow hover:shadow-orange-900 rounded hover:bg-orange-400 hover:bg-opacity-10" target="_blank">My Resume ↗</a>
            </div>
        </div>
    )
}

export default Resume