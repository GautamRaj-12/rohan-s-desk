import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className="container contact-container">
            <div className="socialMedia">
                <h2> Contact Me </h2>
                <div className="socialMediaIcon">
                    <a href="https://twitter.com/abdsa017" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-twitter contact-icon"></i></a>
                    <a href="https://www.instagram.com/abd_sa_017/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram contact-icon"></i></a>
                    <a href="https://www.linkedin.com/in/rohan-raj-604342213/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in contact-icon"></i></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rohanraj161@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope contact-icon"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
