"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavigationParams {
  isLoading: boolean;
  onSubmit: (params: { body: any }) => void;
}
const Navigation: React.FC<NavigationParams> = ({ isLoading, onSubmit }) => {
  const [partiesInvolved, setPartiesInvolved] = useState('');
  const [purposeOfContract, setPurposeOfContract] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      body: { partiesInvolved, purposeOfContract }
    })
    setPartiesInvolved('');
    setPurposeOfContract('');
  }
  return (
    <form onSubmit={isLoading ? undefined : handleSubmit}>
      <div className="space-y-12 ml-8">
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Contract Input Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Parties Involved *
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={partiesInvolved}
                    onChange={(e) => setPartiesInvolved(e.target.value)}
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Purpose of Contract *
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={purposeOfContract}
                    onChange={(e) => setPurposeOfContract(e.target.value)}
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-8">
        <button
          type="submit"
          className={cn(
            "inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150",
            `${isLoading ? 'cursor-not-allowed': ''}`
          )}
          disabled={isLoading}
        >
          {isLoading && <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>}
          {!isLoading && 'Generate contract'}
        </button>
      </div>
    </form>
  )
}

export default Navigation;