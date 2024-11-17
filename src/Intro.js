// import React, { useEffect, useState } from 'react';
// import './Intro.css';  // Make sure the updated CSS is imported

// import logo from "./logo.webp";

// import UserContext from './utils/UserContext';
// import FormComponent from './FormComponent';
// import { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';

// const Intro = () => {

//     const { loggedInUser, setLoggedInUser } = useContext(UserContext);
//     const [btnNameReact, setBtnNameReact] = useState(loggedInUser === 'Default User' ? 'Login' : 'Logout');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleLoginLogout = () => {
//         if (btnNameReact === 'Login') {
//             const fetchedUserName = 'Fetched User';
//             setLoggedInUser(fetchedUserName);
//             setBtnNameReact('Logout');
//             setIsModalOpen(true);
//         } else {
//             setLoggedInUser('');
//             setBtnNameReact('Login');
//         }
//     };

//     return (
//         <div className="intro">
//             <div className="flex h-24 justify-between bg-neutral-950 shadow-lg shadow-slate-800 w-full z-10">
//                 <div>

//                     <img className="w-36 h-24 
//                     cursor-pointer"  src={logo} alt="Logo" />

//                 </div>
//                 <div className="header nav-items flex items-center h-full">
//                     <ul className="text-white flex -mb-[8px]">
//                         <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 '>
//                             How It Works
//                         </li>
//                         <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 '>
//                             Resources
//                         </li>
//                         <li className='py-7 px-2 mx-2  cursor-pointer text-xl hover:text-purple-600'>
//                             Use Cases Study
//                         </li>
//                         <li className="py-7 px-2 mx-2  cursor-pointer text-xl hover:text-purple-600 ">
//                             About
//                         </li>

//                         <button className='mx-4 mt-4 w-24 h-12 cursor-pointer text-xl border-2 rounded-xl scale-105 bg-purple-500 border-transparent text-white hover:scale-110 hover:bg-purple-600 duration-[.3s]'
//                             onClick={handleLoginLogout}
//                         >
//                             {btnNameReact}
//                         </button>

//                     </ul>
//                 </div>

//                 {isModalOpen && <FormComponent closeModal={() => setIsModalOpen(false)} />}


//             </div>


//             <div className="banner pt-20 h-[450px] w-full text-8xl/[118px] font-semibold">
//                 <h1 className='textShadow mx-auto w-3/4 text-gray-950 '>"Crafting code,</h1>
//                 <h1 className='textShadow mx-auto w-3/4 text-gray-950 '>Redefining ease"</h1>

//             </div>

//             <div className='h-[500px] flex flex-col justify-center align-center gap-8 w-full bg-black'>
//                 <h1 className='textShadow2 text-purple-400 text-8xl/[110px] font-serif '>
//                     Launch seamlessly, anywhere with CodeNova.
//                 </h1>

//                 <div className='iconsTab mx-auto mt-4 '>
//                     <ul className='flex gap-8'>
//                         <li>
//                             <img src="https://imgs.search.brave.com/9csQs7n45LOxCX5IKDCmwlJH7UaNxfcbjhQ8eru1tE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc" />
//                         </li>
//                         <li>
//                             <img src="https://imgs.search.brave.com/BLp5uFQdfXSqmpA6T4d6gQp2CLZC5UYpMHLepquR97Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw" />
//                         </li>
//                         <li>
//                             <img className='w-12' src="https://imgs.search.brave.com/sylAVDc_dG2HQuMI27__BwhZNXMsX-VWfL2VMMZiMZs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgzMTMucG5n" />
//                         </li>
//                         <li>
//                             <img src="https://imgs.search.brave.com/kAcremprlo0NO6wVhwvhjs5mImr4vXp_7l3FFR5dsFI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn" />
//                         </li>
//                         <li>
//                             <img src="https://imgs.search.brave.com/0Mo_DOBbVNgowwQTBB7WgM4m1VmXpuOb6ELgKyt0FZ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9ub2RlanMtaWNv/bi5zdmc" />
//                         </li>
//                         <li>
//                             <img src="https://imgs.search.brave.com/Z5KzvnbDLcIM0PWp7CcoTA7Rp3go5U8SMilVC0FGycQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1RhaWx3aW5k/X0NTU19Mb2dvLnN2/Zw" />
//                         </li>
//                         {/* <li></li>
//                         <li></li> */}
//                     </ul>
//                 </div>
//             </div>

//             <div className='footer h-[300px] mt-2 bg-purple-200 w-full'>

//             </div>
//         </div>


//     );
// };

// export default Intro;

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

          <div className='footer h-[300px] mt-2 bg-purple-200 w-full'>

            </div>

            
        </div>
    );
};

export default Intro;

