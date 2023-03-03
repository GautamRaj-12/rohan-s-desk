import "./about.css"
import React from 'react'
import dp from '../../assets/profile-pic.png'
import Footer from "../../components/footer/Footer"

function About() {
  return (
    <>
    <div className="aboutWrapperContainer">
      <div className="aboutWrapper">
        <div className="leftAboutWrapper">
          <div className="dpWrapper"><img src={dp} alt="" className="dp" /></div>
          <div className="profileInfo">
            <div className="profileIntro">
              <h2>Hi, I am Rohan Raj.</h2>
            </div>
            <div className="profileSubIntro">
              <p><sup><i class="fa-solid fa-quote-left"></i></sup> I am an advocate at the Calcutta High Court and occassionally write down my views on topics of my interest here at this place. <sup><i class="fa-solid fa-quote-right"></i></sup></p>
            </div>
            <div className="iconText">Follow/Contact Me<i class="fa-solid fa-circle-arrow-down rightArrowIcon"></i></div>
            <span className="profileIcons">
              <a href="https://twitter.com/abdsa017" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter profile-icon"></i></a>
              <a href="https://www.instagram.com/abd_sa_017/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram profile-icon"></i></a>
              <a href="https://www.linkedin.com/in/rohan-raj-604342213/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in profile-icon"></i></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rohanraj161@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope profile-icon"></i></a>
            </span>
          </div>
        </div>
        <div className="rightAboutWrapper container">
          <h2 className="text-center">About Me</h2>
          <div className="profileDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eius aut non officiis rem voluptas quis, perferendis perspiciatis. Numquam suscipit explicabo quasi accusamus unde nemo? Deleniti amet dignissimos aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, corrupti provident. Minima est eum distinctio autem modi placeat quis enim laudantium eos, ad accusantium, quos voluptates sapiente. Fugit non esse ratione voluptate aliquam, accusamus tempore id! Obcaecati ipsa doloribus cupiditate unde corrupti alias voluptates reiciendis sit ab veniam! Dolor consequatur, veritatis fugit totam, cum quibusdam maiores laborum itaque culpa, animi reprehenderit doloremque doloribus. Suscipit fugiat dolorem rerum, adipisci nostrum ratione, voluptate optio ullam impedit excepturi, incidunt at velit quidem eius ad? Consectetur omnis repellendus maxime impedit similique. Enim dignissimos maxime aperiam libero mollitia, quaerat facere necessitatibus provident consectetur ut facilis!</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
