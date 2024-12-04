import { Link } from "react-router-dom";
import google_image from "./../../assets/download - 2024-12-01T164821.239.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  const { user, logIn, googleLogin } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = { email, password };
    console.log(user);
  };

  const handleGoogleLogIn = () => {
    googleLogin().then((res) => {
      const user = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        photo: res?.user?.photoURL,
      };
    })
    .catch((err) => console.log(err.message))
  };
console.log(user)
  return (
    <div className="h-screen bg-blue-500 pt-20">
      <div className="md:w-1/3 lg:1/4 mx-auto bg-white p-10 rounded-lg ">
        <div>
          <h3>Log in Now</h3>
        </div>
        <form onSubmit={handleLogIn}>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              name="email"
              id=""
              className="py-3 px-5 bg-white text-black border rounded-md"
              placeholder="Enter Email..."
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              name="password"
              id=""
              className="py-3 px-5 bg-white text-black border rounded-md"
              placeholder="Enter Password..."
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-5 w-full text-white"
          />
        </form>
        <div>
          <p className="text-black mt-5 ">
            New to OMPSON? Please{" "}
            <Link
              to={"/register"}
              className="text-blue-600 underline font-bold"
            >
              Register
            </Link>
          </p>
          <hr />
          <div className="mt-5 w-full mx-auto">
            <img
              onClick={handleGoogleLogIn}
              width="150px"
              className="border px-5 py-2 rounded-2xl mx-auto"
              src={google_image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
