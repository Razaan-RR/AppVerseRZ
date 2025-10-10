import { useEffect, useState } from 'react'
import AppCards from '../Components/AppCards'
import useApps from '../Hooks/useApps'
import appError from '../assets/App-Error.png'
import LoadingSpinner from '../Components/LoadingSpinner'

function Apps() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const { apps } = useApps()
  const word = search.trim().toLocaleLowerCase()
  const searchedApps = word
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(word))
    : apps
  useEffect(() => {
    if (!search) return
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [search])
  return (
    <div className="bg-[#f5f5f5] py-10 overflow-x-hidden">
      <div className="px-14 max-sm:px-5">
        <h1 className="text-center text-3xl font-bold max-sm:text-2xl">Our All Applications</h1>
        <p className="text-[#627382] text-center pt-4 pb-8 max-sm:text-sm max-sm:pt-3 max-sm:pb-6">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="px-14 pb-2 flex justify-between items-center max-sm:px-5 max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <h1 className="font-bold text-lg">
          ({searchedApps.length}) Apps Found
        </h1>
        <label className="input right-3 max-sm:w-full max-sm:flex max-sm:items-center max-sm:border max-sm:border-gray-300 max-sm:rounded-full max-sm:px-3 max-sm:py-1 max-sm:bg-white">
          <svg
            className="h-[1.5em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="search Apps"
            className='max-sm:w-full max-sm:outline-none max-sm:bg-transparent'
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-14 bg-[#f5f5f5]">
        {loading ? (
          <div className="col-span-full">
            <LoadingSpinner />
          </div>
        ) : searchedApps.length > 0 ? (
          searchedApps.map((app) => <AppCards key={app.id} app={app} />)
        ) : (
          <div className="bg-[#f5f5f5]">
            <div className="h-screen flex flex-col items-center justify-center translate-x-110">
              <img src={appError} alt="appError" className="mb-6" />

              <h1 className="text-center text-3xl font-bold">
                OPPS!! APP NOT FOUND
              </h1>

              <p className="text-[#627382] text-center pt-4 pb-6">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Apps
