
const Footer = () => {
  return (
    <div className="w-[80%] mx-auto">
        <div className="flex">

        <div className="w-1/4">
            <h3 className="font-bold mb-5">Driver Buddy</h3>
            <p className="text-gray-500">Making every journey memorable</p>
        </div>
        <div className="w-1/4">
            <h3 className="font-bold mb-5">Driver Buddy</h3>
            <p className="text-gray-500">Making every journey memorable</p>
        </div>
        <div className="w-1/4">
            <h3 className="font-bold mb-5">Driver Buddy</h3>
            <p className="text-gray-500">Making every journey memorable</p>
        </div>
        <div className="w-1/4">
            <h3 className="font-bold mb-5">Connect</h3>
            <div className="text-gray-500 flex ">
            <i className="fa-brands fa-facebook-f text-3xl mr-7"></i>
            <i className="fa-brands fa-instagram text-3xl mr-7"></i>
            <i className="fa-brands fa-x-twitter text-3xl "></i>
            </div>
        </div>
        </div>
      
        <hr className="w-full mt-10" />
        <div className="mt-10">
            <p className="mt-5 text-center text-gray-500">&copy; 2025 Driver Buddy. All rights reserver.</p>
        </div>
    </div>
  )
}

export default Footer