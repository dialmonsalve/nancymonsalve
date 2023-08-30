import Image from "next/image"
import { NavLink } from "../UI"
import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {


  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(curr => !curr)
  }

  return (
    <nav className="nav" >

      <div>

        <Link className="nav__container-img--link" href="/" >
          
        <Image
          src='/logo.svg'
          alt="logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        </Link>
      </div>


      <ul
        onClick={handleToggleNavbar}
        className={`nav__list ${toggleNavbar ? 'openNavbar' : 'closeNavbar'}`} >

        <NavLink href="/" >
          HOME
        </NavLink>
        <NavLink href="/about"  >
          NOSOTROS
        </NavLink>
        <NavLink href="/services"  >
          SERVICIOS
        </NavLink>
        <NavLink href="/contact" >
          CONTACTO
        </NavLink>

      </ul>
      
      <button className={`nav__list--menu  ${toggleNavbar ? 'menuOpen' : 'menuClose'}`} onClick={handleToggleNavbar}  >

        <Image
          width={30}
          height={30}
          src='/icons/menu.svg'
          alt='menu'
        />
        </button>

    </nav>
  )
}
