import { useState, useEffect } from "react";

function GetUserID(token) {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchUserID = async () => {
      const response = await fetch(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUserID(data.id);
    };
    fetchUserID();
  }, [token]);

  return userID;
}

export default GetUserID;
