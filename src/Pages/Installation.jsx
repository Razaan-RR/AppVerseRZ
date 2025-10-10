import { useEffect, useState } from 'react'
import downloads_icon from '../assets/icon-downloads.png'
import rating_icon from '../assets/icon-ratings.png'
import { toast, ToastContainer } from 'react-toastify'

function Installation() {
  const [installedApps, setinstalledApps] = useState([])
  const [sortSize, setsortSize] = useState('none')

  const loadInstalledApps = () => {
    const savedApps = JSON.parse(localStorage.getItem('installed')) || []
    setinstalledApps(savedApps)
  }

  useEffect(() => {
    loadInstalledApps()

    const handleStorageChange = () => loadInstalledApps()
    window.addEventListener('storage', handleStorageChange)

    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const sortedApps = () => {
    if (sortSize === 'asc') {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads)
    } else if (sortSize === 'desc') {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads)
    } else {
      return installedApps
    }
  }

  const handleUnInstall = (id, title) => {
    const existingApps = JSON.parse(localStorage.getItem('installed')) || []
    const updatedApps = existingApps.filter((app) => app.id !== id)

    localStorage.setItem('installed', JSON.stringify(updatedApps))
    setinstalledApps(updatedApps)

    toast.success(`${title} uninstalled successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    window.dispatchEvent(new Event('storage'))
  }

  return (
    <div className="bg-[#f5f5f5] py-10 px-14 min-h-screen overflow-x-hidden max-sm:px-5">
      <div className="">
        <h1 className="text-center text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382] text-center pt-4 pb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="pb-2 flex justify-between items-center">
        <h1 className="font-bold text-lg">{installedApps.length} Apps Found</h1>
        <div className="dropdown dropdown-start">
          <select
            value={sortSize}
            onChange={(e) => setsortSize(e.target.value)}
            className="w-45 btn m-1 text-[#627382] appearance-none pr-6 bg-white border border-gray-300 rounded-md"
            defaultValue=""
          >
            <option value="none">
              Sort By Downloads ▼
            </option>
            <option value="asc">Low-High</option>
            <option value="desc">High-Low</option>
          </select>
        </div>
      </div>
      <div>
        {sortedApps().map((p) => (
          <div className="card card-side bg-base-100 shadow-sm mb-4">
            <figure>
              <img
                className="rounded w-16 h-16 pl-4"
                src={p.image}
                alt={p.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.title}</h2>
              <div className="flex">
                <div className="flex items-center gap-2 p-2">
                  <img
                    className="w-4 h-4"
                    src={downloads_icon}
                    alt="downloads_icon"
                  />
                  <p className="text-xs font-semibold text-[#00D390]">
                    {p.downloads}
                  </p>
                </div>
                <div className="flex items-center gap-2 p-2 ml-2">
                  <img
                    className="w-4 h-4"
                    src={rating_icon}
                    alt="downloads_icon"
                  />
                  <p className="text-xs font-semibold text-[#FF8811]">
                    {p.ratingAvg}
                  </p>
                </div>
                <div className="flex items-center gap-2 p-2 ml-2">
                  <p className="text-xs font-semibold text-[#627382]">
                    {p.size}MB
                  </p>
                </div>
              </div>
            </div>
            <div className="my-10 mr-4">
              <button
                onClick={() => handleUnInstall(p.id, p.title)}
                className="btn bg-[#00D390] text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Installation
