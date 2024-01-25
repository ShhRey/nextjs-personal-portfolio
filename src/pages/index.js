import Head from 'next/head';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import Footer from '@/components/Footer';

export default function Home() {
	const router = useRouter();
	
	const heroMainHeading = "Bringing Code To Life"
	
	const onElementClick = (elementID) => {
		switch(elementID) {
			case 'home':
				router.push('/');
				break;
			case 'about':
				router.push('/about');
				break;
			case 'journey':
				router.push('/journey');
				break;
			case 'contact':
				router.push('/contact');
		}
	}
	return (
    	<>
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
      		<div id='main-page' className='px-8 overflow-x-hidden'>
				<NavBar onMenuClick={onElementClick} />
				
				<div id='heroSectionContainer' className='flex flex-column align-items-center justify-content-center'>
					<div id='heroSectionImage' className=''>
						<Image src='/hero-background.png' alt='landing-background-img' width={400} height={300} />
					</div>
					<div id='heroSectionContent' className=''>
						<h1 id='heroMainHeadingText' style={{ 'color': 'var(--primary-text-color)', 'font-family': 'var(--default-heading-family)', 'text-shadow': 'var(--hero-text-shadow)' }} className='text-center text-7xl capitalize mb-0'>{heroMainHeading}</h1>
						<p id='heroSubHeadingText' style={{'font-family': 'var(--default-sub-heading-family)'}} className='text-center text-2xl font-semibold'>A tech enthusiast, who thrives on turning ingenious ideas into enchanting digital innovations with a penchant for:</p>
						<ul id='heroBulletPoints' className=''>
							<li>Full Stack Development</li>
							<li>Data Analysis & Visualization</li>
							<li>Blockchain Technology</li>
							<li>Quantitative Analysis</li>
						</ul>
					</div>
					<div id='heroButtonContainer' className='flex flex-wrap gap-5'>
						<a href='https://drive.google.com/file/d/10JUvRHN2hTEOaWjouiRqkVD4ScpgrGHx/view?usp=sharing' target="_blank" rel="noopener noreferrer"> <Button id='downResumeBtn' label='Resume' icon='pi pi-file-pdf' severity='resume' iconPos="right" size='large' style={{'font-size': '1.5rem', 'background-color': 'var(--primary-btn-color)', 'border-radius': '20%'}}/> </a>
						<a href='' target="_blank" rel="noopener noreferrer"> <Button id='collBtn' label='Collaborate?' icon='' severity='collaborate' iconPos="right" size='large' style={{'font-size': '1.5rem', 'background-color': 'var(--primary-btn-color)', 'border-radius': '20%'}}/> </a>
					</div>
				</div>
				
				<Footer />	
      		</div>
    	</>
  	)
}