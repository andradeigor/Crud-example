import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./signUpForm";
import { AnimatePresence } from "framer-motion";
const FormWarper = () => {
  const [signIn, setSingIn] = useState(true);
  const handleClick = (local) => {
    if ((local === "right" && signIn) || (local === "left" && !signIn)) {
      setSingIn(!signIn);
    }
  };
  return (
    <div
      className={`absolute mt-[30vh] w-80 overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-out `}
    >
      <div className="flex h-14  w-full ">
        <div
          className={`h-ful flex w-1/2 items-center justify-center rounded-tl-lg ${
            !signIn &&
            "bg-gray-300 opacity-50 hover:bg-neutral-50 hover:opacity-100"
          }`}
          onClick={() => handleClick("left")}
        >
          <p className="text-md font-medium text-neutral-700 hover:cursor-default">
            Sign in
          </p>
        </div>
        <div
          className={`flex h-full w-1/2 items-center  justify-center rounded-tr-lg ${
            signIn &&
            "bg-gray-300 opacity-50 hover:bg-neutral-50 hover:opacity-100"
          }`}
          onClick={() => handleClick("right")}
        >
          <p className="text-md font-medium text-neutral-700 hover:cursor-default">
            Sign up
          </p>
        </div>
      </div>
      <div className="h-5/6 w-full ">
        <AnimatePresence>
          {signIn ? (
            <LoginForm />
          ) : (
            <SignUpForm setSignIn={() => setSingIn(true)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FormWarper;
