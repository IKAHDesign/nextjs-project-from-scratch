//import './styles/globals.css';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <div>
        <h2>
          <Link href="/">Namuyehuulo wani mu Next.js</Link>
        </h2>
      </div>
      <div>
        <p>
          <Link href="/">
            <a>Ndondeezo</a>
          </Link>
          <Link href="/about">
            <a>Nyehe</a>
          </Link>
          <Link href="/people/Ayivugwe">
            <a>Abandu</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
