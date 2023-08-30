import Link from "next/link"
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: string;

}

export const NavLink = ({ href, children }: Props) => {

  const { pathname } = useRouter();

  return (
    <li className={`nav__item`} >
      {
        pathname === href
          ? <span
            className={`nav__link ${pathname === href ? 'active' : 'inactive'}`}
          >
            {children}
          </span>

          : <Link
            className={`nav__link ${pathname === href ? 'active' : 'inactive'}`}
            href={href}
          >
            {children}
          </Link>
      }
    </li>
  )
}