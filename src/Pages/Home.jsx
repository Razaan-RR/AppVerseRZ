// import { useLoaderData } from 'react-router'
import Banner from '../Components/Banner'
import Stats from '../Components/Stats'
import TopApps from '../Components/TopApps'
import AppCards from '../Components/AppCards'

function Home() {
//   const apps = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TopApps></TopApps>
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-14 bg-[#f5f5f5]'>
        {apps.map((app) => (
            <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div> */}
    </div>
  )
}

export default Home
