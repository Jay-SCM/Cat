// //components/UserProfile
// import React from 'react';

// const UserProfile = ({ user }) => {
//   return (
//     <div className="user-profile">
//       <h2>User Profile</h2>
//       <div>Name: {user.name}</div>
//       <div>Email: {user.email}</div>
//       <div>Status: {user.status}</div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user-profile')
      .then(response => response.json())
      .then(data => setUser(data.user))
      .catch(error => console.error('Error fetching user profile:', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Status: {user.status}</div>
    </div>
  );
};

export default UserProfile;
