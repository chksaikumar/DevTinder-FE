import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { addUser } from "./redux/userSlice";
const apiUrl = import.meta.env.VITE_API_URL;
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((store) => store?.user);
  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${apiUrl}/profile/view`, {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
