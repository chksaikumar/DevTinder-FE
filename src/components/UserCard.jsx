import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, age, photourl, bio, gender, skills = [] } = user;

  return (
    <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
      <figure className="h-64">
        <img
          src={photourl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-2xl font-semibold text-center">
          {firstName} {lastName},{" "}
          <span className="text-base font-normal">{age}</span>
        </h2>
        <p className="text-center text-sm text-gray-500">{gender}</p>
        <p className="text-green-700 text-sm text-justify">{bio}</p>

        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline badge-info text-sm px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="card-actions justify-between pt-4">
          <button className="btn btn-outline btn-success w-1/2">
            Interest
          </button>
          <button className="btn btn-outline btn-error w-1/2">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
