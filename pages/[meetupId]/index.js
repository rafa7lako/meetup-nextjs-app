import { Fragment } from "react";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
	return (
		<MeetupDetails
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg/1280px-Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg"
			title="First meetup"
			address="First meetup"
			description="This is a first meetup"
		/>
	);
}

export async function getStaticProps(){
	// fetch data for a single meetup

	const meetupId = context.params.meetupId

	return {
		props: {
			meetupData: {
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg/1280px-Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg",
				id: 'm1',
				title: "First meetup",
				address: "First meetup",
				description: "This is a first meetup",
			}
		}
	}
}

export default MeetupDetails;
