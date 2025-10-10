import bannerImage from '../assets/hero.png';
import appStore from '../assets/appStore.png';
import googlePlay from '../assets/googlePlay.png';

function Banner() {
  return (
    <div className="bg-[#f5f5f5] pt-10 text-center px-4 sm:px-0">
      <h1 className="text-3xl sm:text-5xl font-bold">
        We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-[#627382] py-4 text-sm sm:text-base">
        At AppVerseRZ, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="pb-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 btn btn-outline border-[#D2D2D2] text-sm sm:text-base flex items-center justify-center gap-2">
            <img className="w-4 h-4" src={googlePlay} alt="googlePlay" />
            Google Play
          </button>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 btn btn-outline border-[#D2D2D2] text-sm sm:text-base flex items-center justify-center gap-2">
            <img className="w-4 h-4" src={appStore} alt="appStore" />
            App Store
          </button>
        </a>
      </div>
      <div>
        <img
          src={bannerImage}
          alt="Banner illustration"
          className="mx-auto w-full sm:w-[80%] max-w-[600px]"
        />
      </div>
    </div>
  );
}

export default Banner;
