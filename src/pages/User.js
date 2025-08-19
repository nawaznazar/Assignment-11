import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();           // dynamic ID
  const userId = id || 1;               // default to 1 if no ID
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      {user && (
        <div className="user-card">
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
          <p><strong>Company:</strong> Safa Water</p>
        </div>
      )}
    </div>
  );
};

export default User;