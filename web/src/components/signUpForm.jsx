import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import spinnerPath from "../assets/spiner.svg";
import registerService from "../services/register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUpForm = ({ setSignIn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    setTimeout(async () => {
      try {
        const response = await registerService.CreateUser(formData);
        if (response.status === 201) {
          toast.success("User Created!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          setSignIn();
        }
      } catch (error) {
        if (error.response.status === 400) {
          toast.error("Email alredy in use.", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
          });
        }
      }
      setLoading(false);
    }, 2000);
  };
  return (
    <form
      className="flex h-full w-full flex-col   p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.div
        className="w-full "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <p className="mb-2 text-sm font-medium text-neutral-700">Name:</p>
        <input
          type="text"
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 60,
          })}
          placeholder="Enter your name..."
          className={`h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md ${
            errors.name && "border-2 border-red-400"
          }`}
        />
        {errors.name && (
          <p className="mt-2 text-xs font-normal text-red-400">
            Name must have beetween 2 and 60 digits.
          </p>
        )}
      </motion.div>
      <motion.div
        className="mt-3 w-full "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <p className="mb-2 text-sm font-medium text-neutral-700">Email:</p>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
            },
          })}
          placeholder="Enter your email..."
          className={`h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md ${
            errors.email && "border-2 border-red-400"
          }`}
        />
        {errors.email && (
          <p className="mt-2 text-xs font-normal text-red-400">
            Invalid email.
          </p>
        )}
      </motion.div>
      <motion.div
        className="mt-3 w-full "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <p className="mb-2 text-sm font-medium text-neutral-700">Password:</p>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Enter your password..."
          className={`h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md ${
            errors.password && "border-2 border-red-400"
          }`}
        />
        {errors.password && (
          <p className="mt-2 text-xs font-normal text-red-400">
            Password must have between 6 and 20 digits
          </p>
        )}
      </motion.div>
      <motion.div
        className="mt-3 w-full "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <p className="mb-2 text-sm font-medium text-neutral-700">
          Confirm your password:
        </p>
        <input
          type="password"
          {...register("cpassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          placeholder="Enter your password again..."
          className={`h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md ${
            errors.cpassword && "border-2 border-red-400"
          }`}
        />
        {errors.cpassword && (
          <p className="mt-2 text-xs font-normal text-red-400">
            Passwords don't match.
          </p>
        )}
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        exit={{ opacity: 0, y: -50 }}
        type="submit"
        disabled={Object.keys(errors).length}
        className={` mt-8 flex items-center justify-center rounded-lg bg-blue-500 px-8 py-2 font-bold text-neutral-50 hover:bg-blue-400`}
      >
        {loading ? <img src={spinnerPath} /> : "Register"}
      </motion.button>
    </form>
  );
};

export default SignUpForm;
