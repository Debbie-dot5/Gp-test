import { useState, ChangeEvent, FormEvent,  } from "react";
import { Link } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
  keepLoggedIn: boolean;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    keepLoggedIn: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
  };

  const handleGoogleSignUp = (): void => {
    console.log("Sign up with Google clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1d368e]  ">
      <main className="w-full max-w-md p-8 bg-white rounded-md shadow-md mx-4">
        <p className="mb-6 text-center text-sm text-[#676768]">
          Don't have an account yet?{" "}
          <Link to="/" className="text-[#3855b3] font-bold hover:underline">
            Create an account
          </Link>
         
        </p>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full mb-6 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded bg-white hover:bg-gray-50"
        >
            <img src="google.png" alt="" />
          <span className="font-medium">Sign up with Google</span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">OR</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="/remember" className="text-sm text-[#3855b3] hover:underline">
                Remember me
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              id="keepLoggedIn"
              name="keepLoggedIn"
              type="checkbox"
              checked={formData.keepLoggedIn}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="keepLoggedIn" className="ml-2 block text-sm text-gray-700">
              Keep me logged in
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#3855b3] hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;