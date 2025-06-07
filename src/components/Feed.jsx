import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/Feedslice";
import UserCard from "./UserCard";
const BASE_URL = import.meta.env.VITE_API_URL;
const Feed = () => {
  const dispatch = useDispatch();
  const feedstate = useSelector((store) => store.feed);

  const getfeed = async () => {
    try {
      const FeedData = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });

      dispatch(addFeed(FeedData?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getfeed();
  }, []);

  return (
    feedstate && (
      <div className="flex justify-center items-center mt-3">
        {feedstate.length > 0 ? (
          <UserCard user={feedstate[0]} />
        ) : (
          <p>No data </p>
        )}
      </div>
    )
  );
};

export default Feed;
