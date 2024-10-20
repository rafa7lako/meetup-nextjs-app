import { Fragment } from "react";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
	return (
		<MeetupDetails
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg/1280px-Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg"
			title="First meetup"
			address="Some street"
			description="This is a first meetup"
		/>
	);
}

export default MeetupDetails;
