import Image from 'next/image';
import React from 'react';
import web1 from "../public/box.jpg"
// import web2 from "../images/web (2).jpg"
// import web3 from "../images/web (3).jpg"
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
const Project = () => {
    return (
        <div className='container'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Web Designer</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Graphics Designer</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Digital Marketing</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className='row p-3'>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
      <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
     
    
      </div>
    <div className='row p-3'>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
      <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
     
    
      </div>

  
 
  
  
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className='row p-3'>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
      <img className='img-fluid' src='https://cdn.dribbble.com/userupload/9016550/file/original-8ad0c6b1cf181d8939e1270664f18990.png?resize=752x564' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://cdn.dribbble.com/userupload/9010136/file/original-25987fa61f60d8ee39d4faab1d1c4c00.png?resize=752x564' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://cdn.dribbble.com/userupload/9004620/file/original-b8fc5172fd0d05bcd638b3f3c257ac3f.png?resize=752x564' />
       
       
   
        </SlideshowLightbox> 
      </div>
     
    
      </div>
    <div className='row p-3'>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
      <img className='img-fluid' src='https://cdn.dribbble.com/userupload/9010285/file/original-05920906d14ce7cb55e36d48205857d8.png?resize=320x240&vertical=center' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://cdn.dribbble.com/userupload/9020743/file/original-6584eea9a9e0e0148eba2994fbbe47d7.png?resize=320x240&vertical=center' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://cdn.dribbble.com/userupload/8998794/file/original-521ee4f1ce953e8d64a078b867a4248f.jpg?resize=320x240&vertical=center' />
       
       
   
        </SlideshowLightbox> 
      </div>
     
    
      </div>

  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className='row p-3'>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
      <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
     
    
      </div>
    <div className='row p-3'>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
      <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
       
       
   
        </SlideshowLightbox> 
      </div>
      <div className='col-md-4 p-2'>
      <SlideshowLightbox className='col-md-12'>
          <img className='img-fluid' src='https://cdn.dribbble.com/userupload/8996728/file/original-1e3b4e8a0983dd7a0b90d80ed195da43.jpg?resize=320x240&vertical=center' />
       
       
   
        </SlideshowLightbox> 
      </div>
     
    
      </div>

  </div>
</div>
        </div>
    );
};

export default Project;