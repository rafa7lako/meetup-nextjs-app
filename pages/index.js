import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg/1280px-Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg',
        address: 'Some address',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg/1280px-Old_Town_Munich_Frauenkirche_New_Town_Hall.jpg',
        address: 'Some address',
        description: 'This is a second meetup!'
    }
]



function HomePage(props){
 return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps(){
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    }
}

export default HomePage;