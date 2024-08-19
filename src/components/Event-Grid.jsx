import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNbmkHVo6YAOk69h9OgMGbQJBUlW5xz4c",
    authDomain: "iedc-admin.firebaseapp.com",
    projectId: "iedc-admin",
    storageBucket: "iedc-admin.appspot.com",
    messagingSenderId: "200933316108",
    appId: "1:200933316108:web:8b5d08b6295d0962ec8029"
};

initializeApp(firebaseConfig);
const DB = getFirestore();
const EVENTS = collection(DB, 'EVENTS');

const valid = {
    btn: "btn-success px-4",
    btnText: "Reg Now",
    icon: "bi bi-chevron-right"
};
const invalid = {
    btn: "mybtn px-4",
    btnText: "Expired",
    icon: "bi bi-clock"
};

const EventTemplate = ({ data }) => {
    const validity = data.LinkExpireAt > Date.now() ? valid : null;

    if (validity) {
        const eventDate = new Date(data.EventStartsAt);
        data.Description = data.Description.toString().replace(/(?:\r\n|\r|\n)/g, '<br>');
        return (
            <div className="event-grid-item">
                <div className="event-img-container">
                    <img src={data.IMG_URL} alt="EventIMG" className="img-fluid rounded-3" />
                </div>
                <div className="card shadow-lg text-black img-fluid">
                    <div className="fs-4 fw-bold text-black card-header d-flex align-items-center gap-2">
                        {data.EventName}
                        <div className="spinner-grow text-danger spinner-grow-sm" role="status"></div>
                    </div>
                    <div className="fs-7 text-black-50 fw-bolder card-body p-1 px-3">
                        <p dangerouslySetInnerHTML={{ __html: data.Description }}></p>
                        <p>Venue: {data.EventVenue}</p>
                        <p>Date: {`${eventDate.getDate()} - ${eventDate.getMonth() + 1} - ${eventDate.getFullYear()}`}</p>
                    </div>
                    <div className="card-footer text-end">
                        <a href={data.RedirectLink} className="btn btn-success px-4 fs-6 fw-bold">
                            Reg Now <i className="bi bi-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

const EventCard = ({ i, data }) => {
    const validity = data.LinkExpireAt > Date.now() ? valid : invalid;
    return (
        <div className="event-grid-item">
            <div className="card-img">
                <img src={data.IMG_URL} alt="" className="img-fluid m-auto" />
            </div>
            <div className="card-img-overlay d-flex flex-column align-items-center">
                <a href={data.RedirectLink} className={`btn ${validity.btn} rounded-5 border mt-2`}>
                    {validity.btnText} &nbsp;<i className={validity.icon}></i>
                </a>
            </div>
        </div>
    );
};

export const Events = () => {
    const [events, setEvents] = useState([]);
    const [homeEvents, setHomeEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const qry = query(EVENTS, orderBy('EventStartsAt', "desc"));
            const querySnapshot = await getDocs(qry);
            const eventList = [];
            querySnapshot.forEach(doc => {
                eventList.push(doc.data());
            });
            setEvents(eventList);

            const homeEventList = eventList.map((event, index) => 
                index < 6 ? <EventCard key={index} i={index + 1} data={event} /> : null
            );
            setHomeEvents(homeEventList);
        };

        fetchEvents();
    }, []);

    return (
        <div id="event">
            <div className="section-title text-center">
                <h2 data-aos="fade-up" data-aos-duration="1200">BOOTCAMP EVENTS </h2>
            </div>
            <div id="homeEvent" className="event-grid-container" data-aos="fade-up" data-aos-duration="1200">
                {events.map((event, index) => (
                    <EventTemplate key={index} data={event} />
                ))}
            </div>
            <div id="container5" className="event-grid-container" data-aos="fade-up" data-aos-duration="1200">
                {homeEvents}
            </div>
            <div className="text-center mt-4">
                <a href="https://iedc.sjcetpalai.ac.in/events/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-custom btn-lg" data-aos="fade-up" data-aos-duration="1200">VIEW ALL EVENTS</button>
                </a>
            </div>
        </div>
    );
};


