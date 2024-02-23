/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import { eventData as data } from "@/DataList/events";
import { Button } from "../ui/button";
import useUser from "@/features/authentication/useUser";
import useEvent from "@/features/events/useEvent";
import { toast } from "../ui/use-toast";
function MusicEventPage() {
	const [eventData, setEventData] = React.useState<any>([]);
	const [listData, setListData] = React.useState<any>([]);
	const { id } = useParams();
	React.useEffect(() => {
		setEventData(data[0]?.events);
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
		<div>
			<Button
				className="bg-green-500   "
				onClick={() => handleRegisterForEvent()}
				disabled={!isAuthenticated || registerForEventLoading}
			>
				Register
			</Button>
			{user?.name}
		</div>
	);
}

export default MusicEventPage;
