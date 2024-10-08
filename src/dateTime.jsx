import { useEffect, useState } from 'react';

function DateTime() {

    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [userLocation, setUserLocation] = useState('Not determined');

    useEffect(() => {
        // Get current date and time
        const updateDateTime = () => {
            const date = new Date();
            setCurrentDate(date.toLocaleDateString());
            setCurrentTime(date.toLocaleTimeString());
        };
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation(`Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`);
            });
        }

        return () => clearInterval(intervalId);
    }, []);

    return (

        <div className="dateTime">
            <p>Date: {currentDate} | Time: {currentTime} | Location: {userLocation}</p>
        </div>
    );
}

export default DateTime;