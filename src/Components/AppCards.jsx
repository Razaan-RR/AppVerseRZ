import downloads_icon from '../assets/icon-downloads.png'
import rating_icon from '../assets/icon-ratings.png'

function AppCards({ app }) {
  const { title, image, downloads, ratingAvg } = app
  return (
    <div>
      <div className="cards pt-2">
        <div className="card bg-base-100 w-[270px] shadow-sm pb-4">
          <figure className="px-4 pt-4">
            <img
              className="rounded-lg h-70 w-full object-cover"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[15px]">{title}</h2>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex items-center gap-2 bg-[#F1F5E8] p-2">
              <img
                className="w-4 h-4"
                src={downloads_icon}
                alt="downloads_icon"
              />
              <p className="text-xs font-semibold text-[#00D390]">
                {downloads}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#FFF0E1] p-2">
              <img className="w-4 h-4" src={rating_icon} alt="downloads_icon" />
              <p className="text-xs font-semibold text-[#FF8811]">
                {ratingAvg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCards
