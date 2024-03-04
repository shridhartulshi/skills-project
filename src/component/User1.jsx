import React from "react";
 
const User1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {usersData.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
 
export default User1;