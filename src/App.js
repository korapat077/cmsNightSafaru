import "./App.css";
import { FaOtter } from "react-icons/fa";
import { IoChevronDownCircleOutline ,IoCheckmarkSharp } from "react-icons/io5";
function App() {
  return (
    <div className="container mx-auto px-2 py-2">
      <div className="shadow-lg bg-gradient-to-r from-purple-500/95 to-pink-500/50 p-4 rounded-lg ">
        <div className="font-sans text-2xl font-semibold text-white">
          <div className="flex justify-center">
            <div>NightSafari XR CMS</div> &nbsp;&nbsp;
            <FaOtter className="text-2xl mt-1" />
          </div>
        </div>
      </div>

      <div className="shadow-lg bg-gradient-to-r from-purple-500/95 to-pink-500/50 p-4 rounded-lg  mt-5 px-12">
        <div className="font-sans text-2xl font-semibold text-white">
          <div className="flex justify-center">
            <div>Spawners</div> &nbsp;&nbsp;
          </div>
          <div className="mt-3">coordinates</div>
          <input
            className="shadow appearance-none  text-base  border rounded w-full py-1 px-1 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            id="username"
            type="text"
            placeholder="Latitude"
          ></input>
          <input
            className="shadow appearance-none text-base  border rounded w-full py-1 px-1 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Longitude"
          ></input>
          <input
            className="shadow appearance-none text-base  border rounded w-full py-1 px-1 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Range"
          ></input>

          <div className="flex mt-2">
            <div>RateSpawnDinosaurs</div> &nbsp;&nbsp;
          </div>
          <input
            className="shadow appearance-none text-base  border rounded w-full py-1 px-1 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Dinosaur"
          ></input>
          <input
            className="shadow appearance-none text-base  border rounded w-full py-1 px-1 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Percentage"
          ></input>
          <hr className="mt-4"></hr>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:text-[#211852] font-bold py-2 px-4 w-full rounded-full mt-2">
          <div className="flex justify-center">
            <div>ADD Dinosaur </div> &nbsp;&nbsp;
            <IoChevronDownCircleOutline className=" text-2xl หห" />
          </div>
        </button>
        <hr className="mt-4"></hr>
        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:text-[#211852] font-bold py-2 px-4 w-full rounded-full mt-4">
          <div className="flex justify-center">
            <div>Confirm</div> &nbsp;&nbsp;
            <IoCheckmarkSharp className=" text-2xl " />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
