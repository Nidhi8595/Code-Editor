
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'; // Updated CSS file
import logo from "./logo.webp";
import UserContext from './utils/UserContext';
import FormComponent from './FormComponent';

const Intro = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [btnNameReact, setBtnNameReact] = useState(loggedInUser === 'Default User' ? 'Login' : 'Logout');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginLogout = () => {
        if (btnNameReact === 'Login') {
            const fetchedUserName = 'Fetched User';
            setLoggedInUser(fetchedUserName);
            setBtnNameReact('Logout');
            setIsModalOpen(true);
        } else {
            setLoggedInUser('');
            setBtnNameReact('Login');
        }
    };

    return (
        <div className="intro">
            <div className="flex h-24 justify-between bg-neutral-950 shadow-lg shadow-slate-800 w-full z-10">
                <div>
                    <img className="w-36 h-24 cursor-pointer" src={logo} alt="Logo" />
                </div>
                <div className="header nav-items flex items-center h-full">
                    <ul className="text-white flex -mb-[8px]">
                        <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 '>How It Works</li>
                        <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 '>Resources</li>
                        <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600'>Use Cases Study</li>
                        <li className="py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 ">About</li>
                        <button className='mx-4 mt-4 w-24 h-12 cursor-pointer text-xl border-2 rounded-xl scale-105 bg-purple-500 border-transparent text-white hover:scale-110 hover:bg-purple-600 duration-[.3s]'
                            onClick={handleLoginLogout}>
                            {btnNameReact}
                        </button>
                    </ul>
                </div>
                {isModalOpen && <FormComponent closeModal={() => setIsModalOpen(false)} />}
            </div>

            <div className="banner pt-16 h-[350px] w-full text-8xl/[118px] font-semibold">
                <h1 className='textShadow mx-auto w-3/4 text-gray-950'>"Crafting code,</h1>
                <h1 className='textShadow mx-auto w-3/4 text-gray-950 '>Redefining ease"</h1>

            </div>
            <div className="start-coding-container w-full h-[70px] mb-5">
                <Link to="/workspace">
                    <button className="start-coding-btn ">Start Coding</button>
                </Link>
            </div>

            <div className='h-[500px] flex flex-col justify-center align-center gap-8 w-full bg-black'>
                <h1 className='textShadow2 text-purple-400 text-8xl/[110px] font-serif '>
                    Launch seamlessly, anywhere with CodeNova.
                </h1>

                <div className='iconsTab mx-auto mt-4 '>
                    <ul className='flex gap-8'>
                        <li>
                            <img src="https://imgs.search.brave.com/9csQs7n45LOxCX5IKDCmwlJH7UaNxfcbjhQ8eru1tE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc" />
                        </li>
                        <li>
                            <img src="https://imgs.search.brave.com/BLp5uFQdfXSqmpA6T4d6gQp2CLZC5UYpMHLepquR97Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw" />
                        </li>
                        <li>
                            <img className='w-12' src="https://imgs.search.brave.com/sylAVDc_dG2HQuMI27__BwhZNXMsX-VWfL2VMMZiMZs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgzMTMucG5n" />
                        </li>
                        <li>
                            <img src="https://imgs.search.brave.com/kAcremprlo0NO6wVhwvhjs5mImr4vXp_7l3FFR5dsFI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn" />
                        </li>
                        <li>
                            <img src="https://imgs.search.brave.com/0Mo_DOBbVNgowwQTBB7WgM4m1VmXpuOb6ELgKyt0FZ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9ub2RlanMtaWNv/bi5zdmc" />
                        </li>
                        <li>
                            <img src="https://imgs.search.brave.com/Z5KzvnbDLcIM0PWp7CcoTA7Rp3go5U8SMilVC0FGycQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1RhaWx3aW5k/X0NTU19Mb2dvLnN2/Zw" />
                        </li>                         {/* <li></li>
                         <li></li> */}
                    </ul>
                </div>
            </div>



            <div className="footer h-auto py-8 text-white flex flex-col items-center">
                {/* Footer Top Section */}
                <div className="footer-top flex flex-wrap items-center justify-between w-full px-8 lg:px-16">
                    {/* Circular Logo */}
                    <div className="footer-logo flex-shrink-0 mb-4 lg:mb-0">
                        <div className="logo-circle w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                            <img src={logo} alt="CodeNova Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Footer Content */}
                    <div className="footer-content  flex flex-col lg:flex-row justify-between flex-grow w-full lg:pl-8 gap-8">
                        <div className="footer-section ml-10 text-center">
                            <h3 className="text-xl font-semibold mb-4">About CodeNova</h3>
                            <p className="text-sm max-w-[250px]">
                                CodeNova empowers developers to craft and execute code effortlessly, offering an intuitive coding experience.
                            </p>
                        </div>
                        <div className="footer-section text-center">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/workspace" className="hover:underline">Start Coding</Link></li>
                                <li><a href="#resources" className="hover:underline">Resources</a></li>
                                <li><a href="#about" className="hover:underline">About</a></li>
                                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="footer-bottom text-center border-t border-gray-500 pt-4 w-full">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} CodeNova. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Designed with ❤️ for developers by developers.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Intro;

