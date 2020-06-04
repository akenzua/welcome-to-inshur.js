import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get("http://localhost:4000/api/");
      setProfile(res.data);
    };
    fetchProfile();
  }, []);
  return (
    <div className="App">
      {profile.map(({ name, jobTitle, favouriteFood, pictureUrl }, i) => (
        <div key={i} className="profile">
          <h1 className="heading">Profile</h1>
          <div className="image-wrapper">
            <img src={pictureUrl} alt="{name}" />
          </div>

          <div className="info-wrapper">
            <div className="info"> {name}</div>
            <div className="info">{jobTitle}</div>
            <div className="info no-border">I love {favouriteFood}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
