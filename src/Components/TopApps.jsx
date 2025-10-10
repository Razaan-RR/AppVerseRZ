import { Link } from 'react-router';
import AppCards from './AppCards';
import useApps from '../Hooks/useApps';

function TopApps() {
  const { apps } = useApps();

  const topRatedApps = [...apps]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

  return (
    <div className="py-10 bg-[#f5f5f5] px-4 sm:px-14">
      <div>
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] text-center pt-4 pb-8 text-sm sm:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {topRatedApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>

      <div className="pt-8 flex justify-center">
        <Link
          className="btn w-[130px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-sm sm:text-base"
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  );
}

export default TopApps;
