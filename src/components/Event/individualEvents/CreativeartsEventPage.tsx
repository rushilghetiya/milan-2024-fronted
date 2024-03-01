/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";
import { Button } from "../../ui/button";
import useUser from "@/features/authentication/useUser";
import useEvent from "@/features/events/useEvent";
import { toast } from "../../ui/use-toast";
import './CreativeartsEventPage.css'

function CreativeartsEventPage() {
	const [eventData, setEventData] = React.useState<any>([]);
	const [listData, setListData] = React.useState<any>([]);
	const { id } = useParams();
	const { eventCode, eventCodeOfUser, eventCodeOfUserLoading } = useEvent();
	React.useEffect(() => {
		setEventData(data[5]?.events);
		eventCodeOfUser();
	}, []);
	const { user, isAuthenticated } = useUser();
	const { registerForEvent, registerForEventLoading } = useEvent();
	React.useEffect(() => {
		eventData?.forEach((item: any) => {
			if (item.id === id) {
				setListData(item);
			}
		});
	});
	const handleRegisterForEvent = () => {
		if (isAuthenticated) {
			if (user?.name && user?.id && id) {
				const data = {
					user_name: user?.name,
					user_id: user?.id,
					event_code: Number(id),
				};

				registerForEvent(data);
			} else {
				toast({
					variant: "error",
					title: "Error",
					description: "Please login to register for the event1",
				});
			}
		} else {
			toast({
				variant: "error",
				title: "Error",
				description: "Please login to register for the event2",
			});
		}
	};
	return (
		<div className="creativearts-eventsdata">
			{/* {eventCodeOfUserLoading && eventCode?.includes(Number(id)) ? (
				<Button
					className="bg-green-500   "
					onClick={() => handleRegisterForEvent()}
					disabled={!isAuthenticated || registerForEventLoading}
				>
					Register
				</Button>
			) : (
				<Button
					className="bg-green-500   "
					onClick={() => handleRegisterForEvent()}
					disabled={!isAuthenticated || registerForEventLoading}
				>
					unregister
				</Button>
			)}

			{user?.name} */}
			<div>
        		<h1 className='creativearts-title'> {listData.title}</h1>
      		</div>

      		<div className='creativearts-content'>
				<p className='creativearts-description'>{listData.description}</p>
				<div className='creativearts-top'>
					<div className='flexcreativearts'>
						<h3 className='creativeartshead '>Team size: </h3>
						<h4>{listData.teamSizeFrontend}</h4>
					</div>

					{listData.timeLimit && (
						<div className='flexcreativearts'>
							<h3 className='creativeartshead'>Time Limit :</h3>
							<h4> {listData.timeLimit}</h4>
						</div>
					)}

					{listData.eventType && (
						<div className='flexcreativearts'>
							<h3 className='creativeartshead'>Event type:</h3>
							<h4> {listData.eventType}</h4>
						</div>
					)}

					{listData.category && (
						<div className='flexcreativearts'>
							<h3 className='creativeartshead'>Category:</h3>
							<h4> {listData.category}</h4>
						</div>
					)}

					{listData.mode && (
						<div className='flexcreativearts'>
							<h3 className='creativeartshead'>Mode:</h3>
							<h4> {listData.mode}</h4>
						</div>
					)}

					{/* <div className='flexcreativearts'>
						<h3 className='creativeartshead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexcreativearts'>
						<h3 className='creativeartshead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexcreativearts'>
						<h3 className='creativeartshead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        		</div>

        		<div className='creativeartsMainContent'>
					{listData.theme && (
						<div className='creativearts-theme'>
							<h3 className='creativeartsSubtitle'>Theme :</h3>
							<p className='rules'>{listData.theme}</p>
						</div>
					)}

					{listData.requirements && (
						<div className='creativearts-theme'>
							<h3 className='creativeartsSubtitle'>Requirements :</h3>
							<p className='rules'>{listData.requirements}</p>
						</div>
					)}

                    {listData.judgementCriteria && (
                        <div className="creativearts-theme">
                            <h3 className='creativeartsSubtitle'>Judging Criteria :</h3>
                            <p className='rules'>{listData.judgementCriteria}</p>
                        </div>
                    )}

                    {listData.result && (
						<div className='creativearts-theme'>
							<h3 className='creativeartsSubtitle'>Result :</h3>
							<p className='rules'>{listData.result}</p>
						</div>
					)}

					<h3 className='creativeartsSubtitle'>Rules :</h3>
					{listData.generalRules?.map((ruleItem: any, index: number) => {
						return(
							<p key={index} className='rules'>{ruleItem}</p>
						);
					})}

					{/* <div className='creativearts-note'> <h3>Note : </h3> {listData.note}</div> */}
					<div className='creativearts-contact'>
						<h3>Contact:</h3>
						{listData.contact?.map((contactitem: any) => (
							<div className='creativearts-items'>
								{contactitem.name} : {contactitem.contact}
							</div>
						))}
					</div>
				</div>
      		</div>
		</div>
	);
}

export default CreativeartsEventPage;
