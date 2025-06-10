import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../redux/FriendsSlice";
const ROOT_URIL = import.meta.env.VITE_API_URL;

const Friends = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const friendsConnections = useSelector((store) => store?.friends);
  console.log(friendsConnections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${ROOT_URIL}/user/connections`, {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <>
      <p className="p-4 pb-2 text-xs opacity-60 tracking-wide flex items-center justify-center">
        Your Active Connections
      </p>

      <div className=" flex justify-center ">
        {error && <p className="text-red-500">Failed to load connections.</p>}

        <ul className="list bg-base-300 rounded-box shadow-md mt-3">
          {friendsConnections.length === 0 ? (
            <li className="p-4 text-sm text-center">No connections found.</li>
          ) : (
            friendsConnections.map((friend) => (
              <li key={friend._id} className="list-row w-8/12">
                <div>
                  <img
                    className="size-10 rounded-box"
                    src={friend.photourl}
                    alt={friend.firstName}
                  />
                </div>
                <div>
                  <div>
                    {friend.firstName} {friend.lastName}
                  </div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {friend.bio}
                  </div>
                </div>
                <p className="list-col-wrap text-xs">
                  Skilled in {friend.skills.join(", ")}. Exploring distributed
                  systems at age {friend.age}.
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Friends;
