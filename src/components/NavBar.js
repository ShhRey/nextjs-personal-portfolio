import React from "react";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";

export default function NavBar({ onMenuClick }) {
    const avatar = <Avatar id="nav-avatar" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="xlarge" shape="circle" />   
    const headings = [
        { 
            id: 'home',
            label: 'HOME', 
            icon: 'pi pi-home',
            command: () => onMenuClick('home') 
        },
        {
            id: 'about',
            label: 'ABOUT', 
            icon: 'pi pi-globe',
            command: () => onMenuClick('about') 
        },
        {
            id: 'journey',
            label: 'JOURNEY', 
            icon: 'pi pi-history',
            command: () => onMenuClick('journey') 
        },
        {
            id: 'contact',
            label: 'CONNECT', 
            icon: 'pi pi-link' ,
            command: () => onMenuClick('contact')
        },
    ];

    return (
        <div id='navContainer' className=''>
            <Menubar className='flex justify-content-between flex-wrap' model={headings} start={avatar} />
        </div>
    )
}