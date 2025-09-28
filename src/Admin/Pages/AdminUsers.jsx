import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3010/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id} className="bg-white shadow p-3 rounded flex justify-between">
            <span>{user.name} ({user.email})</span>
            <Link to={`/admin-home/users/${user.id}`} className="text-blue-600 hover:underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminUsers;
