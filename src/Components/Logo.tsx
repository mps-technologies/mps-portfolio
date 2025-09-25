type LogoProps = {
  color?: 'white' | 'black'
}

export default function Logo({ color = 'white' }: LogoProps) {
  return (
    color === 'white'
      ? <img src="/Assets/Logo/mps_white.svg" alt="MPS Logo" className="h-10 w-auto" />
      : <img src="/Assets/Logo/mps_black.svg" alt="MPS Logo" className="h-10 w-auto" />
  )

}