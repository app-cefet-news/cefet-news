// FRAMEWORK
import Link from 'next/link'
import Image from 'next/image'

// COMPONENTS
import Logo from '../../assets/img/dce_logo_branca.png'

// MAIN COMPONENT
export default function Navbar({ clean }) {
  return (
    <div
      className="w-full grid grid-cols-2 p-4 text-center"
    >
      <div className='relative w-24 my-auto'>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            quality={100}
          />
        </Link>
      </div>

      {
        !clean && (
          <div className='flex gap-2 ml-auto w-fit'>
            <Link href="/login">
              <div className='border rounded-md border-white p-2 hover:bg-white hover:text-black'>
                Log In
              </div>
            </Link>
            <Link href="/signup">
              <div className='border rounded-md border-white p-2 bg-white text-black hover:bg-black hover:text-white'>
                Sign Up
              </div>
            </Link>
          </div>
        )
      }
    </div>
  )
}