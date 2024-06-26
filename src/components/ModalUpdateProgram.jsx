import { updateSleepProgram } from "../store/program";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ModalUpdateProgram = ({
  setSleepTime,
  setWakeTime,
  setIsUpdateModalOpen,
  date,
  entity,
}) => {
  const [newSleepTime, setNewSleepTime] = useState("");
  const [newWakeTime, setNewWakeTime] = useState("");

  useEffect(() => {
    setNewSleepTime(
      new Date(entity.sleepTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setNewWakeTime(
      new Date(entity.wakeTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, [entity]);

  return (
    <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Modifier le programme de sommeil
            </h3>
            <h2 className="font-semibold text-gray-900 mr-4">{date}</h2>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={() => {
                setIsUpdateModalOpen(false);
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="newSleepTime"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Heure de coucher
                </label>
                <input
                  type="time"
                  name="newSleepTime"
                  id="newSleepTime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="22:00"
                  value={newSleepTime}
                  onChange={(e) => setNewSleepTime(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="newWakeTime"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Heure de réveil
                </label>
                <input
                  type="time"
                  name="newWakeTime"
                  id="newWakeTime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="7:00"
                  value={newWakeTime}
                  onChange={(e) => setNewWakeTime(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="text-white inline-flex items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={async () => {
                  await updateSleepProgram(
                    date,
                    entity,
                    newSleepTime,
                    newWakeTime
                  ).then(() => {
                    setIsUpdateModalOpen(false);
                    setSleepTime(newSleepTime);
                    setWakeTime(newWakeTime);
                  });
                }}
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Modifier
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
ModalUpdateProgram.propTypes = {
  setSleepTime: PropTypes.func.isRequired,
  setWakeTime: PropTypes.func.isRequired,
  setIsUpdateModalOpen: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  entity: PropTypes.shape({
    sleepTime: PropTypes.string.isRequired,
    wakeTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalUpdateProgram;
