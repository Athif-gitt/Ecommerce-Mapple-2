import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3010/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-2xl font-bold mb-3">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Orders: Hardcoded Example - iPhone 15, MacBook Air</p>
    </div>
  );
}

export default UserDetails;
