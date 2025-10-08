import bannerImage from '../assets/hero.png'
import appStore from '../assets/appStore.png'
import googlePlay from '../assets/googlePlay.png'

function Banner() {
  return (
    <div className="bg-[#f5f5f5] pt-10 text-center">
      <h1 className="text-5xl font-bold">
        We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-[#627382] py-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="pb-10">
        <button className="p-4 btn btn-outline border-[#D2D2D2]">
          <img className="w-4 h-4" src={googlePlay} alt="googlePlay" />
          Google Play
        </button>
        <button className="p-4 btn btn-outline border-[#D2D2D2] ml-4">
          <img className="w-4 h-4" src={appStore} alt="appStore" />
          App Store
        </button>
      </div>
      <div className="">
        <img
          src={bannerImage}
          alt="Banner illustration"
          className="mx-auto w-[80%] max-w-[600px]"
        />
      </div>
    </div>
  )
}

export default Banner
