
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer" >

      <nav className="footer__navigation">
        <u className="footer__navigation--list">
          <li className="footer__navigation--item">
            <Link href="/company" className="footer__navigation--link">Compañía</Link>
          </li>
          <li className="footer__navigation--item">
            <Link href="/contact" className="footer__navigation--link">Contacto</Link>
          </li>
          <li className="footer__navigation--item">
            <Link href="/policy" className="footer__navigation--link">Política</Link>
          </li>
          <li className="footer__navigation--item">
            <Link href="/terms" className="footer__navigation--link">Términos</Link>
          </li>
        </u>
      </nav>

      <article className="footer__contacto">
        <p>Teléfono: +57-3</p> {/*  // TODO PHONE */}
        <p>Ciudad: Villavicencio - Meta</p>
        <p>Colombia</p>
      </article>

      <article className="footer__redes" >
        <Link
          href='https://www.instagram.com/' /* // TODO REDES */
          target="_blank" >
          <Image
            width={50}
            height={50}
            src='/icons/instagram.svg'
            alt="instagram" />
        </Link>
        <Link
          href='https://www.facebook.com/'/* // TODO REDES */
          target="_blank" >
          <Image
            style={{ margin: 'auto auto', display: 'block' }}
            width={50}
            height={50}
            src='/icons/facebook.svg'
            alt="facebook" />
        </Link>
        <Link
          href='https://twitter.com/'/* // TODO REDES */
          target="_blank" >
          <Image
            width={42}
            height={42}
            src='/icons/x-twitter.svg'
            alt="github" />
        </Link>

      </article>
      <p className="footer__redes--copyright">&#169; Todas las imágenes de este sitio web son gratuitas y de dominio público según: https://creativecommons.org/</p>
    </footer>
  )
}
