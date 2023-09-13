import React from "react";

const TaskList = () => {
  return (
    <div className="flex justify-center items-center md:px-10 min-h-screen">
      <div className="w-96 my-12 h-auto bg-[#f2f9fb] transition-all rounded-lg  md:w-full p-4">
        <div className="relative">
          <input
            className="w-full h-12 text-sm outline-none border mt-3 rounded-lg transition-all pl-7 pr-20 focus:border-blue-600"
            type="text"
            placeholder="Search tasks like product pages,product photos etc."
          />
          <i className="absolute top-7 text-[#bfc6cd] left-2 fa fa-search"></i>
          <button className="absolute right-2 rounded-lg cursor-pointer transition-all hover:bg-blue-900 top-4 h-10 w-16 bg-blue-500 text-white text-sm">
            Search
          </button>
        </div>
        <div className="flex mt-3 justify-between items-center">
          <p className="text-[#545968] text-sm font-semibold">
            Showing 291 tasks
          </p>
          <div>
            <div className="flex items-center gap-1">
              <p className="text-xs mt-1 ">Sort by</p>
              <select className="outline-none cursor-pointer h-6 w-20  text-sm font-semibold ">
                <option className="hidden">Size</option>
                <option>Date</option>
                <option>Time</option>
                <option>Length</option>
                <option>None</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center md:flex-wrap gap-6">
          <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
            <div className="flex items-center gap-1">
              <img alt="img" src="https://imgur.com/paKJ7DO.png" width="30px" />
              <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
            </div>
            <p className="text-lg font-semibold mt-1">
              Increase confidence with TrustPilot reviews
            </p>
            <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
              Integrations
            </span>
            <p className="text-sm mt-3 text-pink-500">
              Some Kind of short description can go here to better explain the
              recommended task.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-2">
                <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
                <p className="text-pink-400 font-semibold text-sm">2 Days</p>
              </div>
              <div className="flex cursor-pointer">
                <span className="h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="-ml-3 border-2 h-9 w-9 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="h-9 w-9 justify-center items-center rounded-full flex border text-orange-500 font-semibold">
                  16
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
            <div className="flex items-center gap-1">
              <img alt="img" src="https://imgur.com/paKJ7DO.png" width="30px" />
              <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
            </div>
            <p className="text-lg font-semibold mt-1">
              Increase confidence with TrustPilot reviews
            </p>
            <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
              Integrations
            </span>
            <p className="text-sm mt-3 text-pink-500">
              Some Kind of short description can go here to better explain the
              recommended task.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-2">
                <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
                <p className="text-pink-400 font-semibold text-sm">2 Days</p>
              </div>
              <div className="flex cursor-pointer">
                <span className="h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="-ml-3 border-2 h-9 w-9 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="h-9 w-9 justify-center items-center rounded-full flex border text-orange-500 font-semibold">
                  16
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
            <div className="flex items-center gap-1">
              <img alt="img" src="https://imgur.com/paKJ7DO.png" width="30px" />
              <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
            </div>
            <p className="text-lg font-semibold mt-1">
              Increase confidence with TrustPilot reviews
            </p>
            <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
              Integrations
            </span>
            <p className="text-sm mt-3 text-pink-500">
              Some Kind of short description can go here to better explain the
              recommended task.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-2">
                <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
                <p className="text-pink-400 font-semibold text-sm">2 Days</p>
              </div>
              <div className="flex cursor-pointer">
                <span className="h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="-ml-3 border-2 h-9 w-9 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="h-9 w-9 justify-center items-center rounded-full flex border text-orange-500 font-semibold">
                  16
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
            <div className="flex items-center gap-1">
              <img alt="img" src="https://imgur.com/paKJ7DO.png" width="30px" />
              <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
            </div>
            <p className="text-lg font-semibold mt-1">
              Increase confidence with TrustPilot reviews
            </p>
            <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
              Integrations
            </span>
            <p className="text-sm mt-3 text-pink-500">
              Some Kind of short description can go here to better explain the
              recommended task.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-2">
                <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
                <p className="text-pink-400 font-semibold text-sm">2 Days</p>
              </div>
              <div className="flex cursor-pointer">
                <span className="h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="-ml-3 border-2 h-9 w-9 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="h-9 w-9 justify-center items-center rounded-full flex border text-orange-500 font-semibold">
                  16
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
            <div className="flex items-center gap-1">
              <img alt="img" src="https://imgur.com/paKJ7DO.png" width="30px" />
              <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
            </div>
            <p className="text-lg font-semibold mt-1">
              Increase confidence with TrustPilot reviews
            </p>
            <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
              Integrations
            </span>
            <p className="text-sm mt-3 text-pink-500">
              Some Kind of short description can go here to better explain the
              recommended task.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-2">
                <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
                <p className="text-pink-400 font-semibold text-sm">2 Days</p>
              </div>
              <div className="flex cursor-pointer">
                <span className="h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="-ml-3 border-2 h-9 w-9 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="h-9 w-9 justify-center items-center rounded-full flex border text-orange-500 font-semibold">
                  16
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-84 p-3 border bg-white mt-5 rounded-lg md:w-80">
            <div className="flex items-center gap-1">
              <img alt="img" src="https://imgur.com/paKJ7DO.png" width="30px" />
              <p className="text-pink-500 font-semibold text-sm ">2 Credits </p>
            </div>
            <p className="text-lg font-semibold mt-1">
              Increase confidence with TrustPilot reviews
            </p>
            <span className="h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full">
              Integrations
            </span>
            <p className="text-sm mt-3 text-pink-500">
              Some Kind of short description can go here to better explain the
              recommended task.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-2">
                <i className="cursor-pointer text-pink-400 fa fa-calendar-o"></i>
                <p className="text-pink-400 font-semibold text-sm">2 Days</p>
              </div>
              <div className="flex cursor-pointer">
                <span className="h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="-ml-3 border-2 h-9 w-9 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                  <img
                    alt="img"
                    className="rounded-full object-cover"
                    src="https://imgur.com/s1Y39Um.png"
                    height="100%"
                    width="100%"
                  />
                </span>
                <span className="h-9 w-9 justify-center items-center rounded-full flex border text-orange-500 font-semibold">
                  16
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
