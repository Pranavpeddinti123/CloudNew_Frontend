import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    orders: 0,
    delivered: 0,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ get token saved at login
        if (!token) {
          console.warn("No token found. Please log in.");
          return;
        }

        const res = await axios.get("http://ec2-54-92-219-181.compute-1.amazonaws.com:8081/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ match backend response (UserDto)
        setProfile({
          name: res.data.name,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          orders: res.data.orders || 0,
          delivered: res.data.delivered || 0,
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-72px)] pt-10">
      {/* Top Section */}
      <div className="flex flex-row gap-6 justify-between">
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user w-8 h-8 text-white"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div>
            <h1 className="text-base">{profile.name}</h1>
            <p className="text-base">{profile.email}</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone w-8 h-8 text-white"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 
                 19.79 0 0 1-8.63-3.07 19.5 
                 19.5 0 0 1-6-6 19.79 
                 19.79 0 0 1-3.07-8.63A2 
                 2 0 0 1 4.11 2h3a2 
                 2 0 0 1 2 1.72c.12.81.37 
                 1.6.73 2.33a2 2 0 0 1-.45 
                 2.11L8.09 9.91a16 16 0 0 0 
                 6 6l1.75-1.75a2 2 0 0 1 
                 2.11-.45c.73.36 1.52.61 
                 2.33.73a2 2 0 0 1 1.72 2z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-base">Phone Number:</h1>
            <h1 className="text-base">{profile.phoneNumber}</h1>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex flex-row gap-6 justify-between items-center mt-28">
        <div className="p-9 gap-3 w-60 text-center bg-white rounded-md border border-gray-200 shadow-sm">
          <p className="text-2xl font-bold text-orange-600">{profile.orders}</p>
          <p className="text-sm text-gray-600">Total Orders</p>
        </div>
        <div className="p-9 gap-3 w-60 text-center bg-white rounded-md border border-gray-200 shadow-sm">
          <p className="text-2xl font-bold text-orange-600">
            {profile.delivered}
          </p>
          <p className="text-sm text-gray-600">Total Delivered</p>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="w-full mt-20 bg-white rounded-md border border-gray-200 shadow-sm">
        <h1 className="p-6 font-bold text-3xl">Profile Settings</h1>
        <div className="p-6 pt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <p className="mt-1 text-gray-900">{profile.name || "praneeth"} </p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">{profile.email || "praneeth05@gmail.com"}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <p className="mt-1 text-gray-900">{profile.phoneNumber || "9618833899"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
