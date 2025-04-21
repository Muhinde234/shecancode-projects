import Container from "../components/common/Container";
import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
    }
  };

  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="border-2 border-blue-300 p-5 shadow-2xl"
        >
          <h1 className="mt-10 mb-9 text-3xl text-blue-300">Be part of us! </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <Input
              label="First Name"
              type="text"
              value={formData.firstname}
              id="firstname"
              placeholder="enter your first name"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
            <Input
              label="Last Name"
              type="text"
              value={formData.lastname}
              id="lastname"
              placeholder="enter your last name"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
          </div>

          <div className="">
            <Input
              label="Email"
              type="email"
              value={formData.email}
              id="email"
              placeholder="enter your email"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              id="lastname"
              placeholder="enter your password"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
            <Input
              label="Confirm-Password"
              type="password"
              value={formData.password}
              id="lastname"
              placeholder="Re-enter your password"
              onChange={(e) => setFormData(e.target.value)}
              required
            />
          </div>
          <div className="text-left mt-4 text-blue-400">
            <Link to="./">forgot password</Link>
          </div>
          <div className="text-right mt-2 text-lg ">
            <p>
              don't have an account already?
              <span className="text-blue-400  underline">
                <Link to="./Register">Register</Link>
              </span>
            </p>
          </div>

          <div>
            <Button className="mt-5 bg-blue-300 py-2 px-5 rounded-full text-lg">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
