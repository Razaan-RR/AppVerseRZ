import loadingImg from '../assets/logo.png' 

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
      <img
        src={loadingImg}
        alt="Loading"
        className="w-10 h-10 animate-spin mr-3"
      />
      <p className="text-2xl font-semibold text-[#627382]">Loading...</p>
    </div>
  )
}

export default LoadingSpinner
