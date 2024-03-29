import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import Footer from '@/components/Footer';
import styles from '@/styles/home.module.css';

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
      		<div id='main-page' className='px-8 overflow-x-hidden'>
				<NavBar onMenuClick={onElementClick} />
				
				<div id='heroSectionContainer' className='flex flex-wrap mt-6 px-8'>
					<div id='heroSectionImage' className='m-0 w-5'>
						<Image src='/hero-background.png' alt='landing-background-img' className={`${styles.heroImg}`} />
					</div>
					<div id='heroSectionContent' className='flex flex-wrap flex-column justify-content-center m-0 w-7'>
						<h1 id='heroMainHeadingText' className={`${'text-center text-8xl font-medium capitalize m-0'} ${styles.heroMainHeadingText}`}>{heroMainHeading}</h1>
						<p id='heroSubHeadingText' className={`${'text-center text-2xl font-normal m-5'} ${styles.heroSubHeadingText}`}>A tech enthusiast, who thrives on turning ingenious ideas into enchanting digital innovations with a penchant for:</p>
						<ul id='heroBulletPoints' className={`${'mt-0 px-8'} ${styles.heroBulletPoints}`}>
							<li className={`text-xl`}>Full Stack Development</li>
							<li className={`text-xl`}>Data Analysis & Visualization</li>
							<li className={`text-xl`}>Blockchain Technology</li>
							<li className={`text-xl`}>Quantitative Analysis</li>
						</ul>
						<div id='heroButtonContainer' className='flex flex-wrap justify-content-center mt-4 gap-7'>
							<a href='https://drive.google.com/file/d/10JUvRHN2hTEOaWjouiRqkVD4ScpgrGHx/view?usp=sharing' target="_blank" rel="noopener noreferrer"> <Button className={`${'text-2xl uppercase border-round-2xl p-2'} ${styles.heroButton}`} id='downResumeBtn' label='Resume' icon='pi pi-file-pdf' severity='resume' iconPos="right"/> </a>
							<a href='' target="_blank" rel="noopener noreferrer"> <Button className={`${'text-2xl uppercase border-round-2xl p-2'} ${styles.heroButton}`} id='collBtn' label='Collaborate' icon='' severity='collaborate' iconPos="right"/> </a>
						</div>
					</div>
				</div>
				
				<Footer />	
      		</div>
    	</>
  	)
}