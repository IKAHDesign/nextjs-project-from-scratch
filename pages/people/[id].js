import Link from 'next/link';

export default function People(people) {
  return (
    <div>
      <p>Uno mundu zina lyage : $people </p>
      <div>
        <h2>
          <Link href="/about">About Us</Link>
        </h2>
      </div>
    </div>
  );
}
