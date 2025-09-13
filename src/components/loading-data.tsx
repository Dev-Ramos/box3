import { SpinnerCircular } from 'spinners-react'
import { twMerge } from 'tailwind-merge'

type LoadingProp = {
  high?: string
}
const LoadingData = ({high= 'h-[85vh]'}: LoadingProp) => {
  return (
    <div className={twMerge('flex justify-center', high)}>
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
