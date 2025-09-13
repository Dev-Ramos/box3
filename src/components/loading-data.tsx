import { SpinnerCircular } from 'spinners-react'

const LoadingData = () => {
  return (
    <div className="h-[85vh] flex justify-center">
      <SpinnerCircular
        size={60}
        thickness={97}
        speed={115}
        color="rgba(62, 172, 57, 0.75)"
        secondaryColor="rgba(172, 172, 57, 0.26)"
        className="mx-auto"
      />
    </div>
  )
}

export default LoadingData
