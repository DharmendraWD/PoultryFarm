"use client";

import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const FARM_LOCATION = {
  lat: 27.7172, //   latitude
  lng: 85.3240, // longitude
};

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export default function DistantPopup() {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        const dist = getDistanceKm(
          userLat,
          userLng,
          FARM_LOCATION.lat,
          FARM_LOCATION.lng
        );

        setDistance(dist);
        setOpen(true);
        setLoading(false);
      },
      () => {
        alert("Permission denied");
        setLoading(false);
      }
    );
  };

  const openMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${FARM_LOCATION.lat},${FARM_LOCATION.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <button
        onClick={handleCheck}
        className="hero__cta"
      >
      <span className="flex items-center gap-1">  <CiLocationArrow1 /> How far am I?</span>
      </button>

      {loading && <p>Checking location...</p>}

      {open && distance !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
       {open && distance !== null && (
  <div className="modalOverlay">
    <div className="modal">

      {/* Decorative circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      {/* Emoji */}
      <div className="emoji">
        🐔
      </div>

      {/* Heading */}
      {distance < 5 ? (
        <>
          <h2 className="title success">
            Wow! You're Super Close 🎉
          </h2>

          <p className="desc">
            You are only{" "}
            <span>{distance.toFixed(2)} km</span> away from our poultry farm.
          </p>
        </>
      ) : (
        <>
          <h2 className="title">
            Thanks for checking 📍
          </h2>

          <p className="desc">
            You are{" "}
            <span>{distance.toFixed(2)} km</span> away from our poultry farm.
          </p>
        </>
      )}

      {/* Buttons */}
      <div className="buttonGroup">
        <button onClick={openMaps} className="directionBtn">
          🧭 Get Directions
        </button>

        <button
          onClick={() => setOpen(false)}
          className="closeBtn"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
        </div>
      )}
    </div>
  );
}