import React from "react";


const UserBadgw = ({name,role,image}) => {
  return (
    <div className='p-4 m-2 bg-blue-100 rounded-lg
    shadow-md border-4 border-blue-500 w-52 text-center '>
      <img
        src={image}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover mx-auto"
      />

      <h2 className="text-xl font-bold text-gray-800">
        {name}
      </h2>

      <p className="text-sm text-gray-600">
       {role}
      </p>
    </div>
  );
};

export default UserBadgw;