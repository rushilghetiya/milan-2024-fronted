/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useParams } from 'react-router-dom'
import data from '@/DataList/EventList';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import './EventContainer.css';
function EventContainer() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [clubData, setClubData] = React.useState<any>({});
    const { name } = useParams()
    React.useEffect(() => {
      data?.forEach((item:any) => {
        if (item.nameLink === name) {
          setEventData(item.events);
          setClubData(item);
        }
      })},[]);
 
  return (
    <div className="club-page" style={{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.536) 0), url(${clubData.bgImage}) 50%/cover no-repeat fixed`,}}>
      <div className=" relative  ">
        <h1 className='text-white text-center text-[3rem] uppercase font-["Unbounded",sans-serif] font-extrabold tracking-wider pt-[3rem]  '>
          {clubData.name}
        </h1>
        <p className="text-white font-regular font-[montserrat] text-center text-[2rem] uppercase drop-shadow-md pt-[2rem] ">
          {clubData.eventText}
        </p>
      </div>
      <div className='events-container'>
        {eventData?.map((event: any, index: number) => {
          return (
        <Link to={`${event.eventLink}`}>
          <div
              key={index}
              className="event-card"
              style={clubData.eventColor}
            >
              {/* <img src={clubData.bgImage} className="object-cover w-full h-full"></img> */}
              <div className="" />
              <p className="text-white text-[poppins] font-extrabold capitalize">{event.title}</p>
            </div>
        </Link>
          
          );
        })}
      </div>
    </div>
  )
}

export default EventContainer