import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { ToastContainer } from "react-toastify";

const Index = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Index;
