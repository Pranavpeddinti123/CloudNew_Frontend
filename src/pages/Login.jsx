import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        currentState === "Login"
          ? "http://ec2-54-92-219-181.compute-1.amazonaws.com:8081/api/auth/login"
          : "http://ec2-54-92-219-181.compute-1.amazonaws.com:8081/api/auth/register";

      const bodyData =
        currentState === "Login"
          ? { email: formData.email, password: formData.password }
          : {
              name: formData.name,
              email: formData.email,
              phoneNumber: formData.phoneNumber,
              password: formData.password,
            };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token); // ✅ save token for profile page
        alert(
          (currentState === "Login" ? "Login" : "Register") + " successful!"
        );
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-72px)] flex items-center justify-center pt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm"
      >
        <div className="flex flex-col justify-center items-center gap-2 font-bold text-2xl">
          <p className="text-3xl font-semibold">{currentState}</p>
          <hr className="border-none h-[1.5px] w-20 bg-gray-800 mt-2 mb-4" />
        </div>

        {/* Name input (Register only) */}
        {currentState === "Register" && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-md"
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        {/* Phone Number (Register only) */}
        {currentState === "Register" && (
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-md"
            required
          />
        )}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          {currentState === "Login" ? "Login" : "Register"}
        </button>

        {/* ✅ Toggle Login/Register */}
        <p className="mt-4 text-sm text-center">
          {currentState === "Login" ? (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => setCurrentState("Register")}
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => setCurrentState("Login")}
              >
                Login
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
