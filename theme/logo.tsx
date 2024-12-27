import PersonaLogo from '../public/logo/logo-ngang.png'
import Image from 'next/image'

export const Logo = ({ height }: { height: number }) => {
  return (
    <Image
      src={PersonaLogo}
      height={height}
      alt="Logo"
      style={{ width: 'auto' }}
    />
  );
}
