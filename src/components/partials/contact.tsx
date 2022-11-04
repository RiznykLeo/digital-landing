import React from 'react';
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";

function Contact() {
    return (
        <div className='relative h-[400px]'>
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
             z-20 text-white flex flex-col items-center gap-8'>
                <ul className=' flex gap-4 text-2xl'>
                    <li className='p-2 rounded-full border-2 border-cyan-300'>
                        <BsFacebook/>
                    </li>
                    <li className='p-2 rounded-full border-2 border-cyan-300'>
                        <BsInstagram/>
                    </li>
                    <li className='p-2 rounded-full border-2 border-cyan-300'>
                        <AiFillTwitterCircle/>
                    </li>
                    <li className='p-2 rounded-full border-2 border-cyan-300'>
                        <AiFillYoutube/>
                    </li>
                </ul>
                <h2 className='text-4xl font-bold'>
                    Have any project in mind?
                </h2>
                <button className='border-2 py-2 px-4 border-cyan-300 font-bold'>
                    Make inquiry
                </button>
            </div>

            <div className='w-full h-full top-0 left-0 absolute z-10 bg-black opacity-70'/>
            <img
                className='h-full w-full absolute top-0 left-0 object-cover z-0'
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="bg"/>
        </div>
    );
}

export default Contact;
