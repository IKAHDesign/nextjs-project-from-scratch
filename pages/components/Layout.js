import Navbar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
