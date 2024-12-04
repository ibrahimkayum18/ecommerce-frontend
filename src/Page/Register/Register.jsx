import { Link, useNavigate } from "react-router-dom";
import google_image from "./../../assets/download - 2024-12-01T164821.239.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const first_name = form.fname.value;
    const last_name = form.lname.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    if (password !== cpassword) {
      return console.error("Password mismatch");
    }
    const user_info = {
      first_name,
      last_name,
      email,
      password,
      cpassword,
    };
    console.log(user_info);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
console.log(user)
  return (
    <div className="h-screen bg-[#4070F4] pt-20">
      <div className="md:w-1/3 mx-auto bg-white p-10 rounded-2xl">
        <div className="text-center">
          <h2 className="text-center text-4xl text-black font-bold">
            Signup To OMPSON
          </h2>
          <p className="pt-10 text-black">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions.
          </p>
          <p className="pb-10 text-black">
            To opt out, click unsubscribe in our emails.
          </p>
        </div>
        <form onSubmit={handleCreateUser} className="w-full">
          <div className="flex justify-center items-center gap-6  pb-8">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-black">First Name</label>
              <input
                type="text"
                name="fname"
                className="py-3 px-6 rounded-sm bg-gray-200"
                placeholder="Type First Name..."
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-black">Last Name</label>
              <input
                type="text"
                name="lname"
                className="py-3 px-6 rounded-sm bg-gray-200"
                placeholder="Type Last Name..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full pb-8">
            <label className="text-black">Email</label>
            <input
              type="email"
              name="email"
              className="py-3 px-6 rounded-sm bg-gray-200 w-full"
              placeholder="Type Email..."
            />
          </div>
          <div className="flex justify-center items-center gap-6  pb-8">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-black">Password</label>
              <input
                type="password"
                name="password"
                className="py-3 px-6 rounded-sm bg-gray-200"
                placeholder="Type Password..."
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-black">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                className="py-3 px-6 rounded-sm bg-gray-200"
                placeholder="Confirm Password..."
              />
            </div>
          </div>
          <input type="submit" className="btn btn-primary w-full text-white" />
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="to-blue-500 underline" to={"/login"}>
            {" "}
            Login
          </Link>{" "}
        </p>
        <div>
          <p>Or log in with</p>
          <hr />
          <div className="mt-5 w-full mx-auto">
            <img
              onClick={handleGoogleLogin}
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

export default Register;
