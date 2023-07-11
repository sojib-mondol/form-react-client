import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./routes/Router";
import { Toaster } from "react-hot-toast";
// Create a client


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
