import Head from 'next/head'
import { useEffect } from 'react';
import Main from '../components/main'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Main />
    </div>
  )
}