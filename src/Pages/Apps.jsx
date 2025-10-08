import AppCards from '../Components/AppCards'
import useApps from '../Hooks/useApps'

function Apps() {
  const { apps } = useApps()
  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="px-14">
        <h1 className="text-center text-3xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-center pt-4 pb-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className='px-14 pb-2 flex justify-between items-center'>
        <h1 className="font-bold text-lg">
          ({apps.length}) Apps Found
        </h1>
        <label className="input right-3">
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
          <input type="search" required placeholder="search Apps" />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-14 bg-[#f5f5f5]">
        {apps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
    </div>
  )
}

export default Apps
