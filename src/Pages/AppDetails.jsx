import { useParams } from 'react-router'
import useApps from '../Hooks/useApps'
import downloads_icon from '../assets/icon-downloads.png'
import rating_icon from '../assets/icon-ratings.png'
import review_icon from '../assets/icon-review.png'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

function AppDetails() {
  const { id } = useParams()
  const { apps, loading, error } = useApps()
  const [installed, setInstalled] = useState(false)

  const app = apps.find((p) => String(p.id) === id)

  useEffect(() => {
    if (app) {
      const existingApps = JSON.parse(localStorage.getItem('installed')) || []
      const isAlreadyInstalled = existingApps.some((p) => p.id === app.id)
      if (isAlreadyInstalled) {
        setInstalled(true)
      }
    }
  }, [app])

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Loading app details...</p>
    )
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load app details.
      </p>
    )
  }

  const {
    title,
    image,
    downloads,
    ratingAvg,
    companyName,
    description,
    size,
    reviews,
  } = app

  const handleInstall = () => {
    const existingApps = JSON.parse(localStorage.getItem('installed')) || []

    const isDuplicate = existingApps.some((p) => p.id === app.id)
    if (isDuplicate) {
      toast.info(`${title} is already installed`, { position: 'top-right' })
      return
    }

    const updatedApps = [...existingApps, app]
    localStorage.setItem('installed', JSON.stringify(updatedApps))

    setInstalled(true)
    toast.success(`${title} installed successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return (
    <div className="bg-[#f5f5f5] px-14 pt-14 pb-6">
      <div className="flex">
        <div>
          <img className="w-[230px] h-[230px]" src={image} alt="image" />
        </div>
        <div>
          <div className="ml-10 flex-1">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-[#627382] text-xs pt-2 pb-6">
              Developed by{' '}
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </p>
            <hr class="border-gray-300 w-full" />
          </div>
          <div className="ml-10 my-4 flex justify-between gap-10">
            <div>
              <img className="w-6" src={downloads_icon} alt="" />
              <p className="text-xs">Downloads</p>
              <h1 className="text-2xl font-bold">{downloads}</h1>
            </div>
            <div>
              <img className="w-6" src={rating_icon} alt="" />
              <p className="text-xs">Average Ratings</p>
              <h1 className="text-2xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-6" src={review_icon} alt="" />
              <p className="text-xs">Total Reviews</p>
              <h1 className="text-2xl font-bold">{reviews}</h1>
            </div>
          </div>
          <button
            className={`btn ml-10 mt-2 ${
              installed
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-[#00D390] text-white'
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr class="border-gray-300 w-full my-8" />
      <div className="my-6">
        <h1 className="font-bold mb-6">Ratings</h1>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            layout="vertical"
            data={app.ratings}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={20}>
              {app.ratings.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#FF8811" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr class="border-gray-300 w-full my-8" />
      <div>
        <h1 className="font-bold">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AppDetails
