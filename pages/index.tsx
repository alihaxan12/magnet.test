import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {HomePage} from './Component/HomePage'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Magnet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  )
}
