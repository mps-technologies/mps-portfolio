import Image from "next/image";

type LogoProps = {
  color?: 'white' | 'black',
  size?: number
}

type LogoImageProps = {
  src: string
}

export default function Logo({ color = 'white', size = 80 }: LogoProps) {
  const LogoImage = ({src}: LogoImageProps) => {
    return <div className="h-10 w-auto">
      <Image 
      src={src} 
      alt="MPS Logo"
      width={size}
      height={size}
      priority 
    />
    </div>
  }
  return (
    color === 'white'
      ? <LogoImage src="/Assets/Logo/mps_white.svg" />
      : <LogoImage src="/Assets/Logo/mps_black.svg" />
  )

}
