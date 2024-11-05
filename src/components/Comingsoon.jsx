import React, { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import TypingAnimation from "./ui/typing-animation";
import WordRotate from "./ui/word-rotate";

const ComingSoon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-16 md:py-24">
        <div className="mb-12 ">
          <img
            src="/TechCubeLogo.png"
            alt="Tech Cube Logo"
            // width={155}
            // height={100}
            className="h-28 md:h-28 lg:h-36 mx-auto"
          />
          <TypingAnimation
            className="text-slate-400 italic text-lg px-3  md:text-xl lg:text-2xl mt-4 mx-auto"
            text="Inspire, Innovate, Integrate"
          ></TypingAnimation>
        </div>

        {/* Coming Soon */}
        <div>
          <WordRotate
            className="text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent italic"
            words={["COMING SOON", "COMING SOON"]}
          ></WordRotate>
        </div>
      </div>

      {/* Contact Drawer */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-full bg-slate-800 shadow-lg z-50 transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h3 className="text-2xl font-medium">Contact Us</h3>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 h-full overflow-y-auto">
          <div className="grid gap-8">
            <div className="flex items-start">
              <MapPin className="w-8 h-8 mr-4 text-blue-500" />
              <div>
                <h4 className="text-xl font-medium mb-2">SHARJAH</h4>
                <p>Tech Cube LLC</p>
                <p>Office no: 307,Media City, Sharjah</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-8 h-8 mr-4 text-blue-500" />
              <div>
                <h4 className="text-xl font-medium mb-2">KOCHI</h4>
                <p>Tech Cube</p>
                <p>Techno Hub Smart Space, SEZ PO,Kakkanad, Kochin, India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 gap-2 flex text-white font-medium py-3 px-6 rounded-full shadow-lg z-50"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu className="w-6 h-6 inline-block " />
        <p className="max-sm:hidden">Contact Us</p>
      </button>
    </div>
  );
};

export default ComingSoon;
