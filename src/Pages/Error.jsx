import error from '../assets/error-404.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Error() {
  return (
    <div>
      <Navbar />

      <div className="bg-[#f5f5f5]">
        <div className="h-screen flex flex-col items-center justify-center">
          <img src={error} alt="error" className="mb-6" />

          <h1 className="text-center text-3xl font-bold">
            Oops, page not found!
          </h1>

          <p className="text-[#627382] text-center pt-4 pb-6">
            The page you're looking for doesn't exist or was moved.
          </p>

          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none px-8 py-2 rounded-lg">
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Error
