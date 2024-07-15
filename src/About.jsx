import { MdEmojiObjects } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { BsEmojiSunglasses } from "react-icons/bs";

import NavBar from "./components/NavBar"


const About = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4 max-w-2xl mt-12">
        <div className="flex flex-col justify-center items-center">
         {/* WHY */}
        <div>
          <div className="flex justify-center mb-4">
            <MdEmojiObjects className="text-amber-500 text-9xl" />
          </div>
          <div className="bg-base-200 p-4 rounded-xl">
            <h3>Have you ever found yourself wanting to watch your favorite TV show but unsure which episode to choose? I’ve been there too. That’s why I decided to create this web app. My goal was to provide a simple and fun solution for those moments of indecision. Now, with just a few clicks, you can discover a random episode from your preferred show. I hope you enjoy exploring and reliving those iconic moments!</h3>
            <div className="flex flex-row justify-center mt-4 text-amber-500 text-2xl">
              <BsEmojiSunglasses /><LuPartyPopper />
            </div>
          </div>
        </div>
         {/* WHY */}
        
        
         {/* TECH STACK */}
        <div className="mt-12">
          <p></p>
          <div tabIndex={0} className="collapse collapse-plus bg-base-200">
            <div className="collapse-title text-xl font-medium">Tecnologies and libraries:</div>
            <div className="collapse-content">
              <p>React, Tailwind, DaisyUI, Axios, React-router-dom, React-icons, React-loader-spinner.</p>
            </div>
          </div>
        </div>
         {/* TECH STACK */}
        </div>
      </div>
    </>
  )
}

export default About