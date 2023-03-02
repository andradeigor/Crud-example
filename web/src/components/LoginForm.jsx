import { motion } from "framer-motion";

const LoginForm = () => {
  return (
    <form className="flex h-full w-full flex-col   p-6">
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
          name=""
          placeholder="Enter your email..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
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
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        exit={{ opacity: 0, y: -50 }}
        className="mt-8 rounded-lg bg-green-500 px-8 py-2 font-bold text-neutral-50 hover:bg-green-400"
      >
        Login
      </motion.button>
    </form>
  );
};

export default LoginForm;
