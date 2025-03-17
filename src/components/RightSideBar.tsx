import {  BookOpen, ChevronRight, Edit, FileText } from "lucide-react"

const RightSideBar = () => {
  return (
    <div>
       {/* Right Sidebar */}
    <div className=" cols-span-1 w-full  pb-[60px]   bg-[#f5f5f5] p-4 ">
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="avatar-user.svg" alt="Profile" className="rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#3855b3] rounded-full flex items-center justify-center font-bold text-white text-xs">
            5
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-800">Harrison Phillips</h2>
        <p className="text-sm text-gray-500">Business analyst</p>
      </div>

      <div className="bg-white rounded-lg p-4 mb-8 border">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base font-medium text-gray-800">Get - 10% sell price</h3>
            <p className="text-sm text-gray-500">for "Spanish A2" course</p>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-800" />
        </div>
      </div>

      <h3 className="text-lg font-medium text-gray-800 mb-6">Course Progress</h3>

      <div className="space-y-6 ">
        <div className="flex items-center border p-4 rounded-lg">
          <div className="w-12 text-right text-sm font-medium text-blue-600 mr-2">63%</div>
          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-600 mr-3">
            <Edit className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-800">Grammar</h4>
            <p className="text-sm text-gray-500">Learn new rules</p>
          </div>
        </div>

        <div className="flex items-center border p-4 rounded-lg">
          <div className="w-12 text-right text-sm font-medium text-amber-500 mr-2">78%</div>
          <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center text-amber-500 mr-3">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-800">Dictionary</h4>
            <p className="text-sm text-gray-500">Learn 4 new words</p>
          </div>
        </div>

        <div className="flex items-center border p-4 rounded-lg">
          <div className="w-12 text-right text-sm font-medium text-rose-500 mr-2">34%</div>
          <div className="w-10 h-10 bg-rose-100 rounded flex items-center justify-center text-rose-500 mr-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-800">Reading</h4>
            <p className="text-sm text-gray-500">Train your skill</p>
          </div>
        </div>
      </div>
    </div>

   
    </div>
  )
}

export default RightSideBar
