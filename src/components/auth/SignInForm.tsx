import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import { Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";
import Checkbox from "../form/input/Checkbox";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../reduxStore/store"; // adjust this path as needed
import { login } from "../../reduxStore/authSlice";
// import { login as loginRedux } from "../../reduxStore/authSlice";

type FormData = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // 👈 Redux dispatch

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("Response:", response);

      const resData = await response.json();
      // console.log("resData:", resData);

      if (!response.ok) throw new Error(resData.message || "Login failed");

      Cookies.set("token", resData.token, {
        expires: isChecked ? 7 : undefined,
        secure: true,
        sameSite: "Strict",
      });
      if (response.ok && resData.userData && resData.token) {
        dispatch(
          login({
            user: resData.userData, // Must match your User interface
            token: resData.token,
          })
        );
        // console.log("User Response:",resData.userData);
      }

      // dispatch(loginRedux({ user: user, token: resData.token })); // ✅ dispatch login

      navigate("/");
    } catch (error) {
      console.error("Login error:", (error as Error).message);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userCredentials");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue("email", parsedData.email);
      setValue("password", parsedData.password);
    }
  }, [setValue]);

  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
            <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                  fill="#34A853"
                />
                <path
                  d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>
            <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
              <FaLinkedinIn size={20} />
              Sign in with LinkedIn
            </button>
          </div>
          <div className="relative py-3 sm:py-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                Or
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="info@gmail.com"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                hint={errors.email?.message}
              />
            </div>

            <div>
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password", { required: "Password is required" })}
                  error={!!errors.password}
                  hint={errors.password?.message}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <span className="text-sm">Keep me logged in</span>
            </div>
            <Link
              to="/reset-password"
              className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Forgot password?
            </Link>
            <Button type="submit" size="sm" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-5">
            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
              Don&apos;t have an account? {""}
              <Link
                to="/signup"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
