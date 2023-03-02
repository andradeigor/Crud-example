const LoginForm = () => {
  return (
    <form className="flex h-full w-full flex-col justify-around  p-6">
      <div className="w-full ">
        <p className="mb-2 text-sm font-medium text-neutral-700">Email:</p>
        <input
          type="text"
          name=""
          placeholder="Enter your email..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
      </div>
      <div className="mt-3 w-full ">
        <p className="mb-2 text-sm font-medium text-neutral-700">Password:</p>
        <input
          type="password"
          name=""
          placeholder="Enter your password..."
          className="h-10 w-full rounded-md border-[1px] bg-neutral-50 py-2 pl-2 text-sm text-neutral-700 shadow-sm focus:shadow-md"
        />
      </div>
      <button className="mt-8 rounded-lg bg-green-400 px-8 py-2 font-bold text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
