import { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ToastProps {}

const Toast: FC<ToastProps> = ({}) => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 3000,
        },
      }}
    />
  );
};

export default Toast;
