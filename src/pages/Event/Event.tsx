/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./Event.css";

import { eventData } from "../../DataList/events";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function Event() {
  return (
    <div className="eventContainer w-screen h-screen relative ">
      <div className="absolute h-screen w-screen bg-black/30 z-[0] "></div>
      <div className=" relative  ">
        <h1 className='text-white text-center text-[3rem] uppercase font-["Unbounded",sans-serif] font-extrabold tracking-wider pt-[3rem]  '>
          Events
        </h1>
        <p className="text-white font-regular font-[montserrat] text-center text-[2rem] uppercase drop-shadow-md pt-[2rem] ">
          Tighten Your Seatbelts!
        </p>
      </div>
      <div>
        {eventData?.map((event: any, index: number) => {
          return (
            <Link to={`/event/${event.nameLink}`}>
              <div
                key={index}
                className={cn(
                  " w-[350px] h-[250px] border-2 relative z-[3]   ",
                )}
              >
                <img src={event.bgImage} className="object-cover w-full h-full   "></img>
                <div className="absolute w-full h-full bg-black/30 top-0" />
                <h1 className=" absolute top-10 right-5 text-white text-[poppins] font-extrabold text-[4rem] capitalize  ">#{event.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Event;
