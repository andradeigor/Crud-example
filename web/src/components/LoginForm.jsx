import { motion } from "framer-motion";
import { useState } from "react";
import spinnerPath from "../assets/spiner.svg";
import { useForm } from "react-hook-form";
import LoginService from "../services/login";
import { api } from "../services";
import { toast } from "react-toastify";
const LoginForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoginError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await LoginService.LoginUser(data);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data}`;
        toast.success("Successfully Login!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        if (error.response.status === 400) {
          setLoginError(true);
        }
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      className="flex h-full w-full flex-col   p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        exit={{ opacity: 0, y: -50 }}
        className="w-full "
      >
        <p className="mb-2 text-sm font-medium text-neutral-700">Email:</p>
        <input
          type="text"
          placeholder="Enter your email..."
          className={`h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md ${
            errors.email && "border-2 border-red-400"
          }`}
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
            },
          })}
        />
        {errors.email && (
          <p className="mt-2 text-xs font-normal text-red-400">
            Invalid email.
          </p>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        exit={{ opacity: 0, y: -50 }}
        className="mt-3 w-full "
      >
        <p className="mb-2 text-sm font-medium text-neutral-700">Password:</p>
        <input
          type="password"
          name=""
          placeholder="Enter your password..."
          className={`h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md${
            errors.password && "border-2 border-red-400"
          } `}
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
        />
        {errors.password && (
          <p className="mt-2 text-xs font-normal text-red-400">
            Password must have between 6 and 20 digits
          </p>
        )}
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        exit={{ opacity: 0, y: -50 }}
        type="submit"
        disabled={Object.keys(errors).length}
        className="mt-8 flex items-center justify-center rounded-lg bg-green-500 px-8 py-2 font-bold text-neutral-50 hover:bg-green-400"
      >
        {loading ? <img src={spinnerPath} /> : "Login"}
      </motion.button>
      {loginError && (
        <p className="mt-2 text-xs font-normal text-red-400">
          Invalid email or password.
        </p>
      )}
    </form>
  );
};

export default LoginForm;
