import React from "react";

type OnCloseHandler = () => void;

export const Sort = ({ onClose }: { onClose: OnCloseHandler }) => {
  return (
    <div className="py-2">
      <div className="flex justify-between">
        <p className="text-[20px] font-[600] py-4">Sort</p>
        <button onClick={onClose}>
          {" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1.8em"
            width="1.8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between space-x-2">
          <label
            htmlFor="lowest price"
            className="text-gray-700 text-[14px] font-medium"
          >
            Lowest Price
          </label>

          <input
            type="checkbox"
            id="lowest price"
            className="border rounded-full h-5 w-5 text-blue-600"
          />
        </div>

        <div className="flex justify-between space-x-2">
          <label
            htmlFor="highest price"
            className="text-gray-700 font-medium text-[14px] "
          >
            Highest Price
          </label>

          <input
            type="checkbox"
            id="highest price"
            className="border rounded-full h-5 w-5 text-blue-600"
          />
        </div>

        <div className="flex justify-between space-x-2">
          <label
            htmlFor="newly added"
            className="text-gray-700 font-medium text-[14px] "
          >
            Newly Added
          </label>

          <input
            type="checkbox"
            id="newly added"
            className="border rounded-full h-5 w-5 text-blue-600"
          />
        </div>
      </div>
    </div>
  );
};