import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { FcBullish } from 'react-icons/fc';
import WifiLoader from "../utils/loader";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'EVENTS');
        const q = query(eventsCollection, orderBy('EventStartsAt', 'desc'), limit(6));
        const querySnapshot = await getDocs(q);
        const fetchedEvents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div id="event" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-up" data-aos-duration="1200">Events <FcBullish /></h2>
          <p data-aos="fade-up" data-aos-duration="1200">
            Here are some of the events conducted by SJCET Startup Bootcamp- IEDC
          </p>
        </div>
        {loading ? (
          <div style={{ height: "30vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <WifiLoader loading={loading} data-aos="fade-up" data-aos-duration="1200" />
          </div>
        ) : (
          <div className="event-grid-container">
            {events.map((event, index) => (
              <div key={event.id} className="event-card" data-aos="fade-up" data-aos-duration={`${1200 + index * 200}`}>
                <div className="card shadow d-flex flex-column justify-content-between">
                  <img src={event.IMG_URL} className="card-img-top" alt="Event" style={{ objectFit: 'cover', height: '200px' }} />
                  <div className="card-footer">
                    <a href={event.RedirectLink} className={`btn ${event.LinkExpireAt > Date.now() ? "btn-success" : "mybtn"} px-4 fs-6 fw-bold`} disabled={event.LinkExpireAt <= Date.now()}>
                      {event.LinkExpireAt > Date.now() ? "Reg Now" : "Expired"} <i className={`bi ${event.LinkExpireAt > Date.now() ? "bi-chevron-right" : "bi-clock"}`}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-4">
          <a href="https://iedc.sjcetpalai.ac.in/events/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-custom btn-lg" data-aos="fade-up" data-aos-duration="1200">VIEW ALL EVENTS</button>
          </a>
        </div>
      </div>
    </div>
  );
};



