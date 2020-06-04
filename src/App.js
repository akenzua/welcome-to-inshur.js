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
  return <div className="App">Profile</div>;
};

export default App;
