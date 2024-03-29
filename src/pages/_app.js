import Head from 'next/head';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
            <Head>
        		<title>Shrey Trivedi's Portfolio</title>
				<meta charset="UTF-8"></meta>
        		<meta name="description" content="Shrey Trivedi's Portfolio Website Created using Nextjs! This website showcases my skills, experiences, and projects in a clean and interactive manner." />
				<meta name="keywords" content="Software Developer, Python, Django, Flask, JavaScript, Nodejs, Express, React, Nextjs, MongoDB, MySQL, RestAPI, Postman, Swagger, FastAPI, Web Scraping, Selenium, Quantitative Analysis, Algo Trading, BackTesting, TradingView, Web3, Solidity, Smart Contracts, Visualization, Chartjs, Apex Charts, High Charts, Lightweight Charts"></meta>
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Outfit&family=Roboto&display=swap" rel="stylesheet" />
      		</Head>
        </PrimeReactProvider>
    )
}
