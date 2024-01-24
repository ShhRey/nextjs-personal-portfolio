import NavBar from "@/components/NavBar";
import { useRouter } from 'next/router';
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import Footer from '@/components/Footer';

export default function Contact() {
    const connectHeader = "Want To Connect?"
    const router = useRouter();
    const [value, setValue] = useState('');

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
                
                <div id="connContainer" className="flex flex-column justify-content-center flex-wrap">
                    <h1 className="flex justify-content-center flex-wrap">{connectHeader}</h1>
                    <div id="connContent" className="flex justify-content-center flex-wrap gap-4 pt-3">
                        <div id="connLeftSide" className="flex flex-column ">
                            <p>Need Help?</p>
                            <p>Email me at: shreytrivedi577@gmail.com</p>
                            <div id="connForm" className="flex flex-column justify-content-center">
                                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            </div>
                            <Button id="subitQuery" className="mt-4" label="Submit" />
                        </div>
                        <Divider layout="vertical" />
                        <div id="connRightSide" className="">
                            <Image src="path" alt="google-maps" />
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        </>
    )
}