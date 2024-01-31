import NavBar from "@/components/NavBar";
import { useRouter } from 'next/router';
import { Image } from "primereact/image";
import Footer from '@/components/Footer';
import styles from '@/styles/about.module.css';

export default function About() {
    const router = useRouter();
    const aboutHeading = "Hey There!"
    const aboutName = "I Am Shrey Trivedi"

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
            <div className='flex flex-column px-8 overflow-x-hidden'>
                <NavBar onMenuClick={onElementClick} />
                
                <div id="aboutContentContainer" className={`${'flex flex-wrap justify-content-center bg-cover bg-center opacity-90 mt-5 gap-8'} ${styles.aboutContentContainer}`}>
                    <div id="aboutContent" className="w-7">
                        <h1 id="aboutMainHeadingText" className={`${styles.aboutMainHeadingText}`}>{aboutHeading} <strong id="aboutHeadingName" className={`${'text-6xl px-3 font-medium'} ${styles.aboutHeadingName}`}>{aboutName}</strong> </h1>
                        <div>
                            <p className={`${styles.aboutContent}`}>🚀 My development journey started at Mumbai University(India), from where I completed my Bachelor’s Degree in Information Technology. 🎓</p>
                            <p className={`${styles.aboutContent}`}>‍💻 Soon, I started working as a Back-end Developer and found myself orchestrating the fusion of decentralized apps with blockchain networks, venturing into the fascinating realm of smart contracts. I'm also a visualization virtuoso, breathing life into data with dynamic charts, all while delving into the exciting prospects of Algo-Trading in the FinTech Market. 📊</p>
                            <p className={`${styles.aboutContent}`}>🌟 With a Master's Degree in Computer Science from the New Jersey Institute of Technology on the horizon, I'm excited to embark on the next chapter of my tech adventure. So, if you're seeking a dynamic collaborator, a coding addict, or just someone to geek out with about the latest tech trends, Let's connect.</p>
                        </div>
                    </div>
                    <div id="aboutAvatarContainer" className="flex flex-wrap align-items-center border-circle">
                        <Image src='/my-avatar.png' alt="my-avatar-image"/>
                    </div>
                </div>

                <div id="skillsImgContainer" className="flex flex-wrap justify-content-center pt-8">
                    <h3 className={`${'text-center capitalize'}`}>I'm currently looking to join a cross-functional team that values improving people's lives through accessible design</h3>
                    <Image src='/skills-background.png' alt="all-skills-img" />
                </div>

                <Footer />
            </div>
        </>
    )
}