import React from "react";

const Profile = ({ title, profile }) => {
  return (
    <div className="gap-2 flex justify-center items-center">
      <div
        className={`${profile} border-2 border-white rounded-full  overflow-hidden `}
      >
        <img
          src="./Images/myProfile.jpg"
          alt=""
          className="object-cover w-full"
        />
      </div>
      <h4 className="text-lg uppercase tracking-wider font-semibold text-blue-500 cursor-pointer">
        {title}
      </h4>
    </div>
  );
};

export default Profile;
