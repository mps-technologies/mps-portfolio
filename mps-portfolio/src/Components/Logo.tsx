type LogoProps = {
  color?: 'white' | 'black'
}

// TODO: Optimize image?
export default function Logo({color = 'white'}: LogoProps) {
  return (
    color == 'white' 
      ? <img src="/Assests/Logo/mps_white.svg" alt="Logo"/> 
      : <img src="/Assests/Logo/mps_black.svg" alt="Logo"/> 
  )
}

