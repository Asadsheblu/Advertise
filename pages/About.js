import React, { useEffect } from 'react';
import men from "../public/images/men.jpg"
import Image from 'next/image';
import { FaBeer, FaDribbble, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='container'>
            <div className='row p-5'>
            <div className='col-md-5 p-3'>
                <div data-aos="fade-right" className='abt-left-thumb'>
                <Image src={men}  className='img-fluid' alt='about-img'/>
                </div>

            </div>
            <div data-aos="fade-up"   className='col-md-7 p-3'>
                <span className='about-headline'>About Us</span>
                <br/>
              <p className='pt-4'>
              <small className='text-muted'>My development philosophy revolves around putting the user first.
                     I believe in creating user-centric designs that not only look visually appealing
                      but also provide seamless navigation and intuitive functionality. Additionally, 
                      I am committed to ensuring that all my websites are responsive, fast-loading,
                       and accessible to all users.</small>
              </p>
              <p className='pt-3'>
              <small className='text-muted'>I am truly passionate about web development;
               it's not just a job, but a calling. The ever-evolving nature of technology and the endless
                possibilities it offers excite me to push my boundaries and learn something new every day. 
                Solving complex problems and turning ideas into reality
                 is what fuels my enthusiasm for this field.</small>
              </p>
              <div>
                <h6 className='fw-bold'>Share :
                <Link href="/"  className='ps-3 fs-6'> <FaFacebook className='social-icon'/></Link>
                <Link href="/" className='ps-3 fs-6'> <FaLinkedin className='social-icon'/></Link>
                <Link href="/" className='ps-3 fs-6'> <FaInstagram className='social-icon'/></Link>
                <Link href='/' className='ps-3 fs-6'> <FaDribbble className='social-icon'/></Link>
                </h6>
              </div>
            </div>

            </div>
            
        </div>
    );
};

export default About;