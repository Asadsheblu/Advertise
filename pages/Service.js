import React, { useEffect } from 'react';
import { FaAd, FaChartLine, FaCode, FaLongArrowAltRight, FaMarsStroke, FaParagraph, FaPencilAlt, FaSpeakerDeck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-4'>
                <div data-aos="fade-right" className='service-card'>
                    <div className='text-center p-3'>
                        <FaCode className='fs-1 text-muted'/>
                        <h6 className='pt-3 fw-bold'>Web Design</h6>
                        <small className="text-muted">I ought to just try that with my boss;
                             I'd get kicked out on the spot. But who knows, 
                             maybe that would be the best</small>
                    </div>

                </div>
                </div>
                <div className='col-md-4'>
                <div data-aos="fade-up"  className='service-card'>
                    <div className='text-center p-3'>
                    <FaAd className='fs-1 text-muted'/>
                        <h6 className='pt-3 fw-bold'>Graphics Design</h6>
                        <small className="text-muted">I ought to just try that with my boss;
                             I'd get kicked out on the spot. But who knows, 
                             maybe that would be the best</small>
                    </div>

                </div>
                </div>
                <div className='col-md-4'>
                <div  data-aos="fade-left" className='service-card'>
                    <div  className='text-center p-3'>
                        <FaChartLine className='fs-1 text-muted'/>
                        <h6 className='pt-3 fw-bold'>Digital Marketing</h6>
                        <small className="text-muted">I ought to just try that with my boss;
                             I'd get kicked out on the spot. But who knows, 
                             maybe that would be the best</small>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;