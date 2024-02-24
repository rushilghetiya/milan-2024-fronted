/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Typed from "typed.js";

import chennaiBg from "../../Assets/Images/chennai.webp";
function Home() {
  const typed = React.useRef<any>(null);
  const el = React.useRef<any>(null);
  React.useEffect(() => {
    const options = {
      strings: ["மிலன்", "MILAN"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
      smartBackspace: true,
      backDelay: 3000,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <img
        src={chennaiBg}
        className="w-screen h-screen object-cover bg-no-repeat  relative"
      />

      <div className="bg-black/50 w-screen h-screen absolute top-0 left-0  " />

      {/* <h1 className="text-white text-[15rem]  font-bold text-center absolute z-[3] bottom-20 right-10 font-['Noto Sans Tamil',sans-serif]">
        {" "}
        மிலன்
      </h1> */}
      <section className=" absolute z-[3] bottom-20 right-0 ">
        <div
          className="text-white text-[15rem] text-right font-bold font-['Noto Sans Tamil','montserrat',sans-serif] w-screen pr-[30px]  "
        >
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </div>
        <h3 className=" text-white text-[2rem] font-['montserrat'] font-bold text-right pr-[50px] mt-[-40px] "><span className="text-[2.5rem]   ">14</span>th March - <span className="text-[2.5rem]   ">17</span>th March, 2024</h3>
      </section>
    </div>
  );
}

export default Home;
