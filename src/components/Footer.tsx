import {  ChevronRight } from "lucide-react"


const Footer = () => {
  return (
    <div className="md:grid md:grid-cols-2 space-y-4 md:gap-8 mt-6">
      <div className="border w-full rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white shadow p-2 rounded-full flex items-center justify-center">
              <img src="/pencil.svg" alt="pencil" className="bg-white" />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-800">Grammer</h3>
              <p className="text-sm text-gray-500">+20 grammar rules</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-800" />
        </div>
      </div>

      <div className="border w-full rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className=" bg-white shadow p-2 rounded-full flex items-center justify-center mr-3">
              <img src="/support.svg" alt="support" className="bg-white" />
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-800">
                Dictionary
              </h3>
              <p className="text-sm text-gray-500">+10 new words</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-800" />
        </div>
      </div>
    </div>
  );
}

export default Footer
