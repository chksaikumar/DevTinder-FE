import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../redux/RequestSlice";

const ROOT_URL = import.meta.env.VITE_API_URL;

const ConnectionReceived = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Corrected selector to extract the array from state
  const receivedRequests = useSelector((state) => state.request || []);

  const requestfetchd = async () => {
    try {
      const res = await axios.get(`${ROOT_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.connectionRequests));
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    requestfetchd();
  }, []);

  return (
    <>
      <p className="p-4 pb-2 text-xs opacity-60 tracking-wide flex items-center justify-center">
        Connection Requests
      </p>

      <div className="flex justify-center">
        {error && <p className="text-red-500">Failed to load requests.</p>}

        <ul className="list bg-base-300 rounded-box shadow-md mt-3 w-full max-w-2xl">
          {receivedRequests.length === 0 ? (
            <li className="p-4 text-sm text-center">No requests found.</li>
          ) : (
            receivedRequests.map((req) => {
              const user = req.fromUserId;
              return (
                <li
                  key={req._id}
                  className="list-row w-full p-4 border-b flex items-center gap-4"
                >
                  <img
                    className="size-12 rounded-box"
                    src={user.photourl}
                    alt={user.firstName}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      {user.bio}
                    </div>
                    <p className="text-xs mt-1">
                      Skilled in {user.skills?.join(", ") || "N/A"} • Age:{" "}
                      {user.age}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button className="btn btn-sm btn-success">Accept</button>
                    <button className="btn btn-sm btn-error">Ignore</button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default ConnectionReceived;
