/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Event.css";

import data from "../../DataList/EventList";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
// import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
// import { useQueryClient } from "react-query";

function Event() {
  // const queryClient = useQueryClient();
  //  React.useEffect(() => {
  //   queryClient.invalidateQueries("eventCodeOfUser");

  //  },[]);

  return (
    <div className="eventContainer">
      <div className="event-top">
        <h1 className='text-white text-center text-[3rem] uppercase font-["Unbounded",sans-serif] font-extrabold tracking-wider pt-[3rem]'>
          Events
        </h1>
        <p className="text-white font-regular font-[montserrat] text-center text-[2rem] uppercase drop-shadow-md pt-[2rem] ">
          Tighten Your Seatbelts!
        </p>
      </div>
      <div className="club-container">
        <div className="clubs">
          {data?.map((event: any, index: number) => {
            return (
              <CardContainer>
                <CardBody>
                  <CardItem translateZ="30" rotateX={10} rotateZ={-5}>
                    <Link to={`/event/${event.nameLink}`}>
                      <div key={index} className="club-box">
                        {/* <img src={event.bgImage} className="object-cover w-full h-full   "></img> */}
                        <div className="category-box">
                          <CardItem translateZ="50">
                            <p className="text-white text-[poppins] font-extrabold capitalize  ">
                              #{event.name}
                            </p>
                          </CardItem>
                        </div>
                      </div>
                    </Link>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Event;
