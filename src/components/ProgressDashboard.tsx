import { ChevronRight } from "lucide-react";
import RightSideBar from "./RightSideBar";
import Footer from "./Footer";
import { useSidebar } from "./ui/sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const { toggleSidebar } = useSidebar();

  return (
    <>
      <header className="w-full flex justify-between items-center md:hidden pt-4 px-6">
        <div className="flex gap-4 ">
          <button className="cursor-pointer" onClick={toggleSidebar}>
            <img src="hamburger.svg" alt="" />
          </button>

          <button className="cursor-pointer">
            <img src="search.svg" alt="" />
          </button>
        </div>

        <div className="flex gap-4 cursor-pointer">
          <img src="flag.svg" alt="" />

          <Link to="/login">
          <img src="user2.svg" alt="" />
          </Link>
        </div>
      </header>

      <div className="flex flex-col md:grid md:grid-cols-4 w-full max-w-[1440px] mx-auto gap-2 min-h-screen p-2">
       
        <div className="md:col-span-3 p-4 sm:p-6">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
            Progress Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
           
            <div className="bg-[#28439d] text-white p-4 sm:p-5 rounded-lg sm:col-span-2 md:col-span-2">
              <div className="text-xs sm:text-sm opacity-80 mb-1">
                DEADLINE 12:00
              </div>
              <h2 className="text-lg sm:text-xl font-medium mb-1">
                Exam - Unit 5
              </h2>
              <p className="text-xs sm:text-sm opacity-90 mb-4 sm:mb-6">
                Spanish for beginners
              </p>
              <div className="flex items-center mt-auto">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-700 overflow-hidden">
                    <img
                      src="/avatar1.png"
                      alt="User"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-700 overflow-hidden">
                    <img
                      src="/avatar2.png"
                      alt="User"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-700 overflow-hidden">
                    <img
                      src="/avatar3.png"
                      alt="User"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-700 bg-white text-blue-700 flex items-center justify-center text-xs font-medium">
                    +99
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-amber-50 p-4 sm:p-5 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-full rounded-full">
                  <img src="/red-check-circle.svg" alt="" />
                </div>
                <div className="ml-2 sm:ml-3">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800">
                    Homework
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    For today's lesson
                  </p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-bold mt-auto">
                35 MIN AGO
              </div>
            </div>

            <div className="bg-blue-50 p-4 sm:p-5 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-6 rounded-full">
                  <img src="/blue-check-circle.svg" alt="" />
                </div>
                <div className="ml-2 sm:ml-3">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800">
                    Reading
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    24 words per week
                  </p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-bold mt-auto">
                2H AGO
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-6">
            {/* Left Column */}
            <div className="md:col-span-3 space-y-4 w-full">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800">
                    Group info
                  </h2>
                  <img src="/notification.svg" alt="" className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  13 students in the group
                </p>

                <div className="bg-[#ff9365] rounded-lg p-4 mb-4">
                  <h3 className="text-sm sm:text-base font-medium text-white mb-1">
                    Group homework
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xs sm:text-sm text-gray-100 truncate">
                      4 students from your group online now
                    </p>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                    Today's lesson
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    unit 6 - Article
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 border rounded-lg p-4 w-full">
              <h2 className="text-base sm:text-lg font-medium text-gray-800 mb-4">
                Overall progress
              </h2>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-800">
                    Germany for beginners
                  </h3>
                </div>
                <div className="bg-white shadow p-2 rounded-full flex items-center justify-center">
                  <img
                    src="/germany.svg"
                    alt="German flag"
                    className="object-cover w-5 h-5 sm:w-[22px] sm:h-[22px]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3855b3] rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">75%</div>
              </div>

              <div className="flex items-center justify-end">
                <div className="flex justify-center items-center text-[#4c66bb] text-xs sm:text-sm">
                  <span>Explore more</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <div className="hidden md:block md:col-span-1">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
