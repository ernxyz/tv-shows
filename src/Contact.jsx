import { RxGithubLogo } from "react-icons/rx";
import { FaDiscord, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpring, SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

import NavBar from "./components/NavBar"

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-[calc(100vh-80px)] text-gray-200 font-display">
        <div className="bg-base-100 rounded-lg shadow-xl w-96">
          <figure>
            <div className="pt-4 flex justify-center">
              <div className="flex justify-center items-center bg-amber-500 w-24 h-24 rounded-full">
                <span className="text-3xl text-white">EC</span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ernesto Colmenares</h2>
            <div className="flex flex-col py-2">
              <div className="flex flex-row">
                <p className="pr-2">Software Developer</p><span>💻🌐</span> 
              </div>              
              <div className="flex flex-row">
                <p>Full Stack JavaScript</p><RiJavascriptFill color="yellow" size={20}/><FaReact color="cyan" size={20} /><SiExpress style={{marginLeft: 2}} color="lime" size={20} />
              </div>              
              <div className="flex flex-row">
                <p>Java, Spring boot</p><FaJava color="tomato" size={20}/><SiSpring color="lightgreen" size={20} />
              </div>              
            </div>
            <ul className="mt-4">
              <li className="flex flex-row items-center">
                <RxGithubLogo /> <span className="mx-2">&&</span> <FaDiscord /> <p className="px-2">ernxyz</p>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact