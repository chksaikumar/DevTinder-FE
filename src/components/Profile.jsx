import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { addUser } from "../redux/userSlice";
const BASE_URL = import.meta.env.VITE_API_URL;

const ProfileEdit = () => {
  const [loading, setloading] = useState(false);
  const [profileTost, setprofiletost] = useState(false);
  const dispatch = useDispatch();
  const userdata = useSelector((store) => store?.user);
  if (!userdata) return <p>Loading....</p>;
  let { firstName, lastName, age, gender, bio, skills, photourl } = userdata;
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    bio: bio,
    skills: skills || [],
    photourl: photourl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setFormData({ ...formData, skills: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      await axios.patch(`${BASE_URL}/profile/edit`, formData, {
        withCredentials: true,
      });
      dispatch(addUser(formData));
      // Show success message (optional)
      // alert("Profile updated successfully!");
      setprofiletost(true);
      setTimeout(() => {
        setprofiletost(false);
      }, 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      // alert("Failed to update profile. Please try again.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="card w-full max-w-xl bg-base-100 shadow-xl p-6 mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
              value={formData.lastName}
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              className="input input-bordered w-full"
              value={formData.age}
              onChange={handleChange}
            />

            <select
              name="gender"
              className="select select-bordered w-full"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="bio"
              placeholder="Short Bio"
              className="textarea textarea-info text-yellow-600 w-full"
              value={formData.bio}
              onChange={handleChange}
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills (comma-separated)"
              className="input input-bordered w-full"
              value={formData.skills.join(",")}
              onChange={handleChange}
            />

            <input
              type="text"
              name="photourl"
              placeholder="Profile Image URL"
              className="input input-bordered w-full"
              value={formData.photourl}
              onChange={handleChange}
            />

            {formData.photourl && (
              <img
                src={formData.photourl}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mx-auto mt-2 object-cover"
              />
            )}

            <button className="btn btn-primary mt-4" type="submit">
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </form>

        <UserCard user={formData} />
      </div>
      {profileTost && (
        <div className="alert alert-success toast toast-top toast-center">
          <span>profile successfully.</span>
        </div>
      )}
    </div>
  );
};

export default ProfileEdit;
