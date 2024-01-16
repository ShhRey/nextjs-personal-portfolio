import NavBar from "@/components/NavBar";
import { useRouter } from 'next/router';
import { Image } from "primereact/image";
import MyAvatar from "@/components/MyAvatar";

export default function About() {
    const router = useRouter();
    const aboutHeading = "Hey There! I Am"
    const aboutName = "Shrey Trivedi"

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
            <div className='px-8 overflow-x-hidden'>
                <NavBar onMenuClick={onElementClick} />
                <div id="aboutContentContainer" className="flex">
                    <div id="aboutContent" className="">
                        <h1 id="aboutMainHeadingText" className="">{aboutHeading} <strong id="aboutHeadingName" style={{ 'font-family': 'var(--default-heading-family)' }} className="">{aboutName}</strong></h1>
                        <div>
                            <p>🚀 My development journey started at Mumbai University(India), from where I completed my Bachelor’s Degree in Information Technology. 🎓</p>
                            <p>‍💻 Soon, I started working as a Back-end Developer and found myself orchestrating the fusion of decentralized apps with blockchain networks, venturing into the fascinating realm of smart contracts. I'm also a visualization virtuoso, breathing life into data with dynamic charts, all while delving into the exciting prospects of Algo-Trading in the FinTech Market. 📊</p>
                            <p>🌟 With a Master's Degree in Computer Science from the New Jersey Institute of Technology on the horizon, I'm excited to embark on the next chapter of my tech adventure. So, if you're seeking a dynamic collaborator, a coding addict, or just someone to geek out with about the latest tech trends, Let's connect.</p>
                        </div>
                    </div>
                    <div id="aboutAvatarContainer" className="">
                        <MyAvatar />
                    </div>
                </div>

                <div id="skillsImgContainer" className="">
                    <Image />
                </div>
            </div>
        </>
    )
}