import '@/styles/globals.css'
import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <NavBar />
    <Component {...pageProps} />
    <h1 className="HelloComponent text-lg text-green-100">Hello</h1>
  </>
  );
}
