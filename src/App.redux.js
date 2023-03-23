import ClassCounter from "./components/ClassCounter";
import HooksCounter from "./components/HooksCounter";

import BasicProps from "./tutorial/BasicProps";

import StateArray from "./tutorial/StateArray";
import StateBoolean from "./tutorial/StateBoolean";
import StateCounter from "./tutorial/StateCounter";
import StateEffect from "./tutorial/StateEffect";
import StateForm from "./tutorial/StateForm";
import StateInput from "./tutorial/StateInput";
import StateObject from "./tutorial/StateObject";
import StateReducer from "./tutorial/StateReducer";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {username ? (
        <div className="flex flex-col items-center">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {username}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>

          <button
            className="px-4 py-2 mt-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <div className="flex justify-center items-center gap-4">
            <input
              onChange={(e) => setUser(e.target.value)}
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />

            <button
              className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => dispatch(login({ username: user }))}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
