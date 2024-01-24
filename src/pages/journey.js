import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

export default function Journey() {
    const educationCardHeader = "Education"
    const MSdegUnivName = "New Jersey Institute of Technology"
    const BEdegUnivName = "University of Mumbai (SAKEC)"

    const workexCardHeader = "Work Experience"
    const workexpCompanyName = "Earnestroi Technology"
    
    const projectSectionHeader = "Projects"

    const router = useRouter();

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
            <div className="px-8 overflow-x-hidden">
                <NavBar onMenuClick={onElementClick} />
                <div id="journeyContentContainer" className="flex flex-column pt-5">
                    <div id="journeyCardsSection" className="flex justify-content-between flex-wrap">
                        <div id="educationCardContainer" className="flex flex-column">
                            <h2 id="" className="flex justify-content-center flex-wrap">{educationCardHeader}</h2>
                            <div id="MSdegCard" className="flex flex-column">
                                <h3 id="MSdegUniversity" className="">Master's Degree - <span>{MSdegUnivName}</span> </h3>
                                <div id="" className="flex justify-content-between flex-wrap">
                                    <p id="MSdegYear" className="">Sept 2023 - May 2025</p>
                                    <p id="MSdegGrade" className="">CGPA: N/A</p>
                                </div>
                                <div id="MSdegInfo" className="">
                                    <p>add text here</p>
                                </div>
                            </div>
                            <div id="BEdegCard" className="flex flex-column">
                                <h3 id="BEdegUniversity" className="">Bachelor's Degree - <span>{BEdegUnivName}</span> </h3>
                                <div id="" className="flex justify-content-between flex-wrap">
                                    <p id="BEdegYear" className="">Aug 2016 - Nov 2020</p>
                                    <p id="BEdegGrade" className="">CGPA: 6.88/10</p>
                                </div>
                                <div id="BEdegInfo" className="">
                                    <p>add text here</p>
                                </div>
                            </div>
                        </div>

                        <div id="workexpCardContainer" className="flex flex-column">
                            <h2 id="" className="flex justify-content-center flex-wrap">{workexCardHeader}</h2>
                            <div id="workexpCard" className="flex flex-column">
                                <h3 id="companyName" className="flex justify-content-center flex-wrap">{workexpCompanyName}</h3>
                                <div id="FTrole" className="">
                                    <div id="" className="flex justify-content-between flex-wrap gap-8">
                                        <p id="" className="">Back-End Developer</p>
                                        <p id="" className="">Feb 2022 - Aug 2023</p>
                                    </div>
                                    <ul id="FTroleDesc" className="flex flex-column">
                                        <li id="" className="">task1</li>
                                        <li id="" className="">task2</li>
                                        <li id="" className="">task3</li>
                                        <li id="" className="">task4</li>
                                    </ul>
                                </div>
                                
                                <div id="PTrole" className="">
                                    <div id="" className="flex justify-content-between flex-wrap gap-8">
                                        <p id="" className="">Back-End Developer</p>
                                        <p id="" className="">Feb 2022 - Aug 2023</p>
                                    </div>
                                    <ul id="PTroleDesc" className="flex flex-column">
                                        <li id="" className="">task1</li>
                                        <li id="" className="">task2</li>
                                        <li id="" className="">task3</li>
                                        <li id="" className="">task4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="projectCardsSection" className="flex flex-column pt-5">
                        <h2 id="projectSectionHeading" className="flex justify-content-center">{projectSectionHeader}</h2>
                        <div id="wsdProjectContainer" className="flex justify-content-around flex-wrap pt-5">
                            <div id="wsdProjectContent" className="flex flex-column">
                                <h3 id="wsdProjectHeading" className="">NextJS Branding Website</h3>
                                <ul id="wsdProjectHighlights" className="">
                                    <li id="wsdHigh1" className="">some text</li>
                                    <li id="wsdHigh2" className="">some text</li>
                                    <li id="wsdHigh3" className="">some text</li>
                                    <li id="wsdHigh4" className="">some text</li>
                                </ul>
                                <Button id="wsdProjectCode" className="" label="View SourceCode" />
                            </div>
                            <div id="WSDprojImage" className="">
                                <Image src={"path"} alt="wsd-website-thumbnail" />
                            </div>
                        </div>

                        <div id="etProjectContainer" className="flex flex-row-reverse justify-content-around flex-wrap pt-5">
                            <div id="etProjectContent" className="flex flex-column">
                                <h3 id="etProjectHeading" className="">Custom Trading Platform</h3>
                                <ul id="etProjectHighlights" className="">
                                    <li id="etHigh1" className="">some text</li>
                                    <li id="etHigh2" className="">some text</li>
                                    <li id="etHigh3" className="">some text</li>
                                    <li id="etHigh4" className="">some text</li>
                                </ul>
                                <Button id="etProjectCode" className="" label="View SourceCode" />
                            </div>
                            <div id="ETprojImage" className="">
                                <Image src={"path"} alt="et-project-thumbnail" />
                            </div>
                        </div>

                        <div id="beProjectContainer" className="flex justify-content-around flex-wrap pt-5">
                            <div id="beProjectContent" className="flex flex-column">
                                <h3 id="beProjectHeading" className="">Facial Recognition based Attendance Management System</h3>
                                <ul id="beProjectHighlights" className="">
                                    <li id="beHigh1" className="">some text</li>
                                    <li id="beHigh2" className="">some text</li>
                                    <li id="beHigh3" className="">some text</li>
                                    <li id="beHigh4" className="">some text</li>
                                </ul>
                                <Button id="beProjectCode" className="" label="View SourceCode" />
                            </div>
                            <div id="WSDprojImage" className="">
                                <Image src={"path"} alt="be-project-thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}