/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";
import { Button } from "../../ui/button";
import useUser from "@/features/authentication/useUser";
import useEvent from "@/features/events/useEvent";
import { toast } from "../../ui/use-toast";
import './AstrophiliaEventPage.css';
function AstrophiliaEventPage() {
	const [eventData, setEventData] = React.useState<any>([]);
	const [listData, setListData] = React.useState<any>([]);
	const { id } = useParams();
	const { eventCode, eventCodeOfUser, eventCodeOfUserLoading } = useEvent();
	React.useEffect(() => {
		setEventData(data[9]?.events);
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
		<div className="astrophilia-eventsdata">
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
        		<h1 className='astrophilia-title'> {listData.title}</h1>
      		</div>

      		<div className='astrophilia-content'>
				<p className='astrophilia-description'>{listData.description}</p>
				<div className='astrophilia-top'>
					<div className='flexastrophilia'>
						<h3 className='astrophiliahead '>Team size: </h3>
						<h4>{listData.teamSizeFrontend}</h4>
					</div>

					{listData.mode && (
						<div className='flexastrophilia'>
							<h3 className='astrophiliahead'>Mode:</h3>
							<h4> {listData.mode}</h4>
						</div>
					)}

					{/* <div className='flexastrophilia'>
						<h3 className='astrophiliahead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexastrophilia'>
						<h3 className='astrophiliahead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexastrophilia'>
						<h3 className='astrophiliahead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        		</div>

        		<div className='astrophiliaMainContent'>
                    {listData.theme && (
						<div className='astrophilia-judgment'>
							<h3 className='astrophiliaSubtitle'>Theme :</h3>
							<p className='rules'>{listData.theme}</p>
						</div>
					)}
                    
					<h3 className='astrophiliaSubtitle'>Rules :</h3>
					{listData.rules?.map((ruleItem: any, index: number) => {
						return(
							<p key={index} className='rules'>{ruleItem}</p>
						);
					})}

					{listData.fouls && (
                     <h3 className='astrophiliaSubtitle'>Fouls :</h3> )}
					{listData.fouls?.map((foulItem: any, index: number) => {
						return(
							<p key={index} className='rules'>{foulItem}</p>
						);
					})}

					<div className='astrophilia-contact'>
						<h3>Contact:</h3>
						{listData.contact?.map((contactitem: any) => (
							<div className='astrophilia-items'>
								{contactitem.name} : {contactitem.contact}
							</div>
						))}
					</div>
				</div>
      		</div>
		</div>
	);
}

export default AstrophiliaEventPage;
