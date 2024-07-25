import React, { useState } from "react";
import Explorer from "../components/apps/Explorer";
import Taskbar from "../components/layout/Taskbar";
import RightClick from "../components/utilities/RightClick";
import StartMenu from "../components/layout/StartMenu";
import Browser from "../components/apps/Browser";
import Calculator from "../components/apps/Calculator";
import VsCode from "../components/apps/VsCode";
import Slider from "../components/utilities/Slider";
import RecycleBin from "../components/apps/RecycleBin";
import Apps from "../components/apps/Apps";
import Torch from "../components/apps/Torch";
import { motion } from "framer-motion";
import { useRef } from "react";

function Main() {
  const constraintsRef = useRef(null);

  const [windows, setWindows] = useState({
    menu: false,
    start: false,
    explorer: false,
    browser: false,
    calculator: false,
    vscode: false,
    recycle: false,
    app: false,
  });

  const [aboutMe, setAboutMe] = useState(null);
  const [input, setInput] = useState(null);

  const toggleWindow = (window, input = null) => {
    setWindows({
      menu: false,
      start: false,
      explorer: false,
      browser: false,
      calculator: false,
      vscode: false,
      recycle: false,
      app: false,
      [window]: !windows[window],
    });

    if (window === "explorer" && input !== null) {
      setAboutMe(input);
    } else if (window === "app" && input !== null) {
      setInput(input);
    }
  };

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const bounds = {
    left: 0,
    top: 0,
    right: screenWidth - 1128,
    bottom: screenHeight - 624,
  };

  return (
    <>
      <Torch input={input} setInput={setInput} />
      <div className="relative h-screen" ref={constraintsRef}>
        <div className="relative h-full w-full top-0 left-0 z-10 text-white">
          <RightClick option={true} />
          <div className="grid grid-cols-2 h-[80vh] grid-rows-8 gap-2 absolute top-2 left-2">
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-1"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("browser")}
              >
                <img
                  src="/images/apps/chrome.png"
                  alt="edge"
                  className="w-18 h-18"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm ">
                  Google Chrome
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-2"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("explorer", false)}
              >
                <img
                  src="/images/apps/folder.png"
                  alt="edge"
                  className="w-18 h-18"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm select-none">
                  About Me
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-3"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("recycle")}
              >
                <img
                  src="/images/apps/recyclebin.png"
                  alt="edge"
                  className="w-16 h-16"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-xs">
                  Recycle Bin
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-4"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("browser")}
              >
                <img
                  src="/images/apps/edge.png"
                  alt="edge"
                  className="w-11 h-11"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm select-none">
                  Microsoft Edge
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-5"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("calculator")}
              >
                <img
                  src="/images/apps/calculator.png"
                  alt="calc"
                  className="w-11 h-11"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm select-none pt-2">
                  Calculator
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-6"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("vscode")}
              >
                <img
                  src="https://laaouatni.github.io/w11CSS/images/vs-code.ico"
                  alt="vscode"
                  className="w-8 h-8"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm select-none pt-2">
                  VS Code
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-7"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("app", "emoji")}
              >
                <img
                  src="https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico"
                  alt="emoji"
                  className="w-10 h-10"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm select-none pt-2">
                  Emoji TicTacToe
                </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="row-start-8"
            >
              <div
                className="w-[5em] h-full flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2"
                onDoubleClick={() => toggleWindow("app", "spotify")}
              >
                <img
                  src="https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png"
                  alt="spotify"
                  className="w-10 h-10"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="text-balance text-center text-sm select-none pt-2">
                  Spotify
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute right-3 top-2">
            <div
              className="w-[5em] h-full flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2 select-none hidden"
              onDoubleClick={() => toggleWindow("app", "terminal")}
            >
              <img
                src="images/apps/terminal.png"
                alt="terminal"
                className="w-10 h-10"
              />
              <div className="text-balance text-center text-sm select-none pt-2">
                Terminal
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 flex justify-center items-center w-full h-full`}
        >
          <StartMenu
            isStartOpen={windows.start}
            toggleStart={() => toggleWindow("start")}
            setInput={setInput}
            input={input}
          />
          <Browser
            isAppOpen={windows.browser}
            toggleBrowser={() => toggleWindow("browser")}
            bounds={bounds}
          />
          <Explorer
            isExplorerOpen={windows.explorer}
            toggleExplorer={(input) => toggleWindow("explorer", input)}
            aboutMe={aboutMe}
            bounds={bounds}
          />
          <RecycleBin
            isRecycleOpen={windows.recycle}
            toggleRecycle={() => toggleWindow("recycle")}
            bounds={bounds}
          />
          <Calculator
            isAppOpen={windows.calculator}
            toggleCalculator={() => toggleWindow("calculator")}
            bounds={bounds}
          />
          <VsCode
            isAppOpen={windows.vscode}
            toggleVsCode={() => toggleWindow("vscode")}
            bounds={bounds}
          />
          <Apps
            isAppOpen={windows.app}
            toggleApp={(input) => toggleWindow("app", input)}
            bounds={bounds}
            input={input}
          />
        </div>
        <Taskbar
          toggleStart={() => toggleWindow("start")}
          toggleExplorer={(input) => toggleWindow("explorer", input)}
          toggleBrowser={() => toggleWindow("browser")}
        />
      </div>
      <Slider
        isMenuOpen={windows.menu}
        setIsMenuOpen={() => toggleWindow("menu")}
        toggleMenu={() => toggleWindow("menu")}
      />
    </>
  );
}

export default Main;
