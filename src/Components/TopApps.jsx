import { Link } from 'react-router'
import AppCards from './AppCards'
import useApps from '../Hooks/useApps'

function TopApps() {
  const { apps } = useApps()

  const topRatedApps = [...apps]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8)

  return (
    <div className="py-10 bg-[#f5f5f5]">
      <div className="px-14">
        <h1 className="text-center text-3xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] text-center pt-4 pb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-14 bg-[#f5f5f5]">
        {topRatedApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>

      <div className="pt-8 flex justify-center">
        <Link
          className="btn w-[130px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  )
}

export default TopApps
