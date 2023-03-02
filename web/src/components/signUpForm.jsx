import { motion } from "framer-motion";

const SignUpForm = () => {
  return (
    <form className="flex h-full w-full flex-col   p-6">
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
          name=""
          placeholder="Enter your email..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
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
          name=""
          placeholder="Enter your password..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
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
          name=""
          placeholder="Enter your password..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
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
          name=""
          placeholder="Enter your password..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        exit={{ opacity: 0, y: -50 }}
        className="mt-8 rounded-lg bg-blue-500 px-8 py-2 font-bold text-neutral-50 hover:bg-blue-400"
      >
        Register
      </motion.button>
    </form>
  );
};

export default SignUpForm;
