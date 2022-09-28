import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <div>
        <h2>
          <Link href="/"> Namuyehuulo wani mu Next.js</Link>
        </h2>
      </div>
      <div>
        <p>
          <Link href="/">
            <a>Ndondeezo</a>
          </Link>
          <Link href="/about">Nyehe</Link>
          <Link href="/people/Ayivugwe">Abandu</Link>
        </p>
      </div>
    </div>
  );
}
