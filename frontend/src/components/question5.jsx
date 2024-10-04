import { useState, useEffect } from "react";

export const Question5 = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, 
            (error) => {
                console.error("Error retrieving location:", error);
            }
        );
    } else {
        console.log("Geolocation unavailable");
    }
    }, []);

    const handleHomeClick = () => {
        sessionStorage.setItem()
    }

    const handleNextButtonClick = () => {
        sessionStorage.setItem("userLatitude", latitude);
        sessionStorage.setItem("userLongitude", longitude);

    }

    return (
        <>
        <div>
            <h2>Plan-Do</h2>
        </div>
        <div>
            <h1>& Where?</h1>
        </div>
        <div>
            <button>Home</button><button>Away</button><button>Inspire Me!</button>
        </div>
        <div>
            <button>Previous</button><button>Next</button>
        </div>
        </>
    );

};