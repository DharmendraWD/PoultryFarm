// "use client";

// import { useState } from "react";
// import { CiLocationArrow1 } from "react-icons/ci";

// const FARM_LOCATION = {
//   lat: 27.7172, //   latitude
//   lng: 85.3240, // longitude
// };

// function getDistanceKm(lat1, lon1, lat2, lon2) {
//   const R = 6371;
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLon = ((lon2 - lon1) * Math.PI) / 180;

//   const a =
//     Math.sin(dLat / 2) ** 2 +
//     Math.cos((lat1 * Math.PI) / 180) *
//       Math.cos((lat2 * Math.PI) / 180) *
//       Math.sin(dLon / 2) ** 2;

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c;
// }

// export default function DistantPopup() {
//   const [open, setOpen] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleCheck = () => {
//     setLoading(true);

//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       setLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const userLat = pos.coords.latitude;
//         const userLng = pos.coords.longitude;

//         const dist = getDistanceKm(
//           userLat,
//           userLng,
//           FARM_LOCATION.lat,
//           FARM_LOCATION.lng
//         );

//         setDistance(dist);
//         setOpen(true);
//         setLoading(false);
//       },
//       () => {
//         alert("Permission denied");
//         setLoading(false);
//       }
//     );
//   };

//   const openMaps = () => {
//     const url = `https://www.google.com/maps/dir/?api=1&destination=${FARM_LOCATION.lat},${FARM_LOCATION.lng}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div>
//       <button
//         onClick={handleCheck}
//         className="hero__cta"
//       >
//       <span className="flex items-center gap-1">  <CiLocationArrow1 /> How far am I?</span>
//       </button>

//       {loading && <p>Checking location...</p>}

//       {open && distance !== null && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//        {open && distance !== null && (
//   <div className="modalOverlay">
//     <div className="modal">

//       {/* Decorative circles */}
//       <div className="circle circle1"></div>
//       <div className="circle circle2"></div>

//       {/* Emoji */}
//       <div className="emoji">
//         🐔
//       </div>

//       {/* Heading */}
//       {distance < 5 ? (
//         <>
//           <h2 className="title success">
//             Wow! You're Super Close 🎉
//           </h2>

//           <p className="desc">
//             You are only{" "}
//             <span>{distance.toFixed(2)} km</span> away from our poultry farm.
//           </p>
//         </>
//       ) : (
//         <>
//           <h2 className="title">
//             Thanks for checking 📍
//           </h2>

//           <p className="desc">
//             You are{" "}
//             <span>{distance.toFixed(2)} km</span> away from our poultry farm.
//           </p>
//         </>
//       )}

//       {/* Buttons */}
//       <div className="buttonGroup">
//         <button onClick={openMaps} className="directionBtn">
//           🧭 Get Directions
//         </button>

//         <button
//           onClick={() => setOpen(false)}
//           className="closeBtn"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const FARM_LOCATION = {
  lat: 27.7172,
  lng: 85.324,
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
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Gets the best position by waiting for accuracy to improve.
// On Chrome it resolves quickly; on Firefox/Brave it retries
// up to maxWaitMs to get a reading below targetAccuracyM.
function getBestPosition({ targetAccuracyM = 100, maxWaitMs = 8000 } = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
      return;
    }

    let best = null;
    let settled = false;

    const timer = setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
      if (best) resolve(best);
      else reject(new Error("Timeout — no position received"));
      settled = true;
    }, maxWaitMs);

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        if (settled) return;

        // Keep the most accurate reading seen so far
        if (!best || pos.coords.accuracy < best.coords.accuracy) {
          best = pos;
        }

        // Stop early once we're accurate enough
        if (pos.coords.accuracy <= targetAccuracyM) {
          clearTimeout(timer);
          navigator.geolocation.clearWatch(watchId);
          resolve(best);
          settled = true;
        }
      },
      (err) => {
        if (settled) return;
        clearTimeout(timer);
        navigator.geolocation.clearWatch(watchId);
        reject(err);
        settled = true;
      },
      {
        enableHighAccuracy: true, // triggers GPS on mobile, fine WiFi on desktop
        timeout: maxWaitMs,
        maximumAge: 0,           // never use a cached position
      }
    );
  });
}

export default function DistancePopup() {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | locating | done | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleCheck = async () => {
    setStatus("locating");
    setOpen(false);

    try {
      const pos = await getBestPosition({ targetAccuracyM: 100, maxWaitMs: 8000 });
      const dist = getDistanceKm(
        pos.coords.latitude,
        pos.coords.longitude,
        FARM_LOCATION.lat,
        FARM_LOCATION.lng
      );
      setDistance(dist);
      setAccuracy(Math.round(pos.coords.accuracy));
      setStatus("done");
      setOpen(true);
    } catch (err) {
      setStatus("error");
      if (err.code === 1) {
        setErrorMsg("Location permission denied. Please allow location access in your browser settings.");
      } else if (err.code === 2) {
        setErrorMsg("Could not determine your position. Make sure GPS or location services are enabled.");
      } else {
        setErrorMsg(err.message || "Unknown error");
      }
      setOpen(true);
    }
  };

  const openMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${FARM_LOCATION.lat},${FARM_LOCATION.lng}`,
      "_blank"
    );
  };

  const close = () => {
    setOpen(false);
    setStatus("idle");
  };

  return (
    <>
      <button onClick={handleCheck} className="hero__cta" disabled={status === "locating"}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <CiLocationArrow1 />
          {status === "locating" ? "Locating…" : "How far am I?"}
        </span>
      </button>

      {open && (
        <div style={overlay}>
          <div style={modal}>

            {/* Close X */}
            <button onClick={close} style={closeX} aria-label="Close">✕</button>

            {status === "error" ? (
              <>
                <div style={emoji}>😕</div>
                <h2 style={{ ...title, color: "#e53935" }}>Location Unavailable</h2>
                <p style={desc}>{errorMsg}</p>
                <div style={btnGroup}>
                  <button onClick={close} style={closeBtn}>Close</button>
                </div>
              </>
            ) : (
              <>
                <div style={emoji}>{distance < 5 ? "🎉" : "📍"}</div>

                <h2 style={{ ...title, color: distance < 5 ? "#5bbf1a" : "#1e2d1e" }}>
                  {distance < 5 ? "Wow! You're Super Close!" : "Thanks for checking"}
                </h2>

                <p style={desc}>
                  You are{" "}
                  <strong style={{ color: "#5bbf1a" }}>
                    {distance < 1
                      ? `${Math.round(distance * 1000)} m`
                      : `${distance.toFixed(2)} km`}
                  </strong>{" "}
                  away from our poultry farm.
                </p>

                {/* Accuracy indicator — helps users understand readings differ by browser */}
                <p style={accuracyNote}>
                  📡 Location accuracy: ±{accuracy} m
                  {accuracy > 500 && (
                    <span style={{ color: "#e07b00" }}>
                      {" "}(low — try on mobile or allow GPS for a better reading)
                    </span>
                  )}
                </p>

                <div style={btnGroup}>
                  <button onClick={openMaps} style={dirBtn}>🧭 Get Directions</button>
                  <button onClick={close} style={closeBtn}>Close</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ── Inline styles (no external CSS dependency) ── */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: "16px",
};

const modal = {
  position: "relative",
  background: "#fff",
  borderRadius: "20px",
  padding: "48px 36px 36px",
  maxWidth: "420px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
};

const closeX = {
  position: "absolute",
  top: "14px",
  right: "16px",
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#999",
  lineHeight: 1,
};

const emoji = {
  fontSize: "52px",
  marginBottom: "12px",
};

const title = {
  fontFamily: "var(--font-display, sans-serif)",
  fontSize: "22px",
  fontWeight: 800,
  marginBottom: "12px",
  lineHeight: 1.2,
};

const desc = {
  fontSize: "15px",
  color: "#555",
  lineHeight: 1.6,
  marginBottom: "8px",
};

const accuracyNote = {
  fontSize: "12px",
  color: "#888",
  marginBottom: "24px",
  lineHeight: 1.5,
};

const btnGroup = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const dirBtn = {
  padding: "12px 24px",
  background: "#5bbf1a",
  color: "#fff",
  border: "none",
  borderRadius: "50px",
  fontWeight: 700,
  fontSize: "14px",
  cursor: "pointer",
};

const closeBtn = {
  padding: "12px 24px",
  background: "#f0f0f0",
  color: "#333",
  border: "none",
  borderRadius: "50px",
  fontWeight: 600,
  fontSize: "14px",
  cursor: "pointer",
};