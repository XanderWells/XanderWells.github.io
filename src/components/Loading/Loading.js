import './loading.css'

const Loading = () => {
    return (
        <div className="h-screen bg-opacity-50 bg-gray-900 absolute top-0 left-0 w-screen flex items-center justify-center">
            <div className=' py-3 pl-3 pr-6 rounded-md flex opacity-100 shadow-xl shadow-gray-900 bg-gray-900 items-center justify-center mb-[50vh]'>
                <p className='text-lg'>Loading</p>
                <div className='dot-flashing ml-6 mt-2'></div>
            </div>
            
        </div>



    )
}

export default Loading


