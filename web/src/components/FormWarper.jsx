import { useState } from "react";

const FormWarper = () => {
  const [signIn, setSingIn] = useState(true);
  return (
    <div className=" flex h-80  w-72 rounded-lg shadow-md">
      <div className="flex h-1/6  w-full">
        <div className="flex h-full w-1/2 items-center justify-center rounded-tl-lg ">
          <p className="text-md font-medium text-neutral-700">Sign in</p>
        </div>
        <div className="flex h-full w-1/2 items-center  justify-center rounded-tr-lg border-l-4 border-b-4 border-white/10 bg-gray-300">
          <p className="text-md font-medium text-neutral-700">Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default FormWarper;
