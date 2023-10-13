import './loading.css'
import './ship.css'
const Loading = () => {
    return (
        <>
            <div className="h-screen bg-opacity-70 bg-gray-900 fixed top-0 left-0 w-[100%] flex items-center justify-center ">
                <div className='absolute bg-gray-900 w-80 h-2/5 flex flex-col rounded-3xl '>
                    <div className="container translate-x-5">
                        <div className="stage">
                            <div className="body">
                                <div className="top"></div>
                                <div className="glass"></div>
                                <div className="boster bosterL"></div>
                                <div className="boster bosterR"></div>
                                <div className="ring"></div>
                                <div className="fire">
                                    <div className="flame h1"></div>
                                    <div className="flame h2"></div>
                                    <div className="flame h3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' top-1/2 py-3 pl-3 pr-6 rounded-md flex opacity-100 items-center justify-center'>
                        <p className='text-2xl'>Loading</p>
                        <div className='dot-flashing ml-6 mt-2'></div>
                    </div>
                </div>


            </div>
            <div className='h-screen'></div>
        </>




    )
}

export default Loading


