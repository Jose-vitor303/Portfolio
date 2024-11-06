import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { SiMongodb} from 'react-icons/si'
import { FaYoutube } from "react-icons/fa6";


import Header from "./components/header/Header.jsx";
import Api from "./assets/a-photo-of-a-whiteboard-with-the-text-api-applicat-FPkUTH6-TOmhjQB7qqMoAQ-LYhlHTPmT6K9Aux5Li3P2A.jpeg"
import Database from "./assets/a-photo-of-a-server-room-with-multiple-racks-of-se--qs-hiBrQT2brdmbc4gA6w-GDcbuwINQ_udsUzxbco_sA.jpeg"
import "./App.css"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import photo from "./assets/photo.jpg";



function App() {
 
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState(null)

    useEffect(() => {
        if (response === true) {
            const timer = setTimeout(() => {
                setResponse(null);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [response]);

    const baseUrl = "https://api-sender-email.onrender.com";

    const sendEmail = async(event)=>{

        event.preventDefault();

        let dataSend = {
            email : email,
            subject : subject,
            message : message,
        }
     
        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          console.log(res);
        if (res.status > 199 && res.status < 300) {
            setResponse(true)
            setEmail("")
            setSubject("")
            setMessage("")
        }
    }


  return (
    <>
        <Header />
        <section className="content-professional">
            <p>I am</p>
            <h3>FULL STACK SOFTWARE DEVELOPER</h3>
            <section>
                {response && (
                   <div className="content-fixed">
                        <span>Send Successfully!</span>     
                   </div>
                )}
            
            
                <ul className="content-social-media">
                    <li>
                        <Link to="https://github.com/Jose-silvaa">
                            <AiFillGithub className="experience-logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/jose-vitor-facanha/">
                            <AiFillLinkedin className="experience-logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/@ssilvadev">
                            <FaYoutube className="experience-logo"/>
                        </Link>
                    </li>
                </ul>

            </section>
        </section>
        <section className="content-about">
            <h4>ABOUT ME</h4>
            <section className="content-profile">
                <div className="container-image">
                    <img className="image" src={photo} alt="eu"/>
                </div>
                <div className="content-about-text">
                    <span>Hello, my name is José Vitor, and I am currently pursuing a degree in Information Systems. I am a full-stack software developer with experience in various programming languages and a strong problem-solving background.
                    </span>
                </div>
            </section>
        </section>
        <section className="content-portfolio">
            <h4>PORTFOLIO</h4>
            <div className="flex">
                <div className="content-portfolio-projects">
                    <div className="content-project">
                        <h3>NODE API</h3>
                        <p>This project is an API built using NodeJS, MongoDB as the database, and JWT for authentication control.</p>
                        <span><Link to="https://github.com/Jose-silvaa/node-api">See the Code</Link></span>
                    </div>
                    <div className="container-image">
                        <Link to="https://github.com/Jose-silvaa/node-api">
                            <img className="image" src={Api} alt="foto"/>
                        </Link>
                    </div>
                </div>
                <div className="content-portfolio-projects">
                    <div className="content-project">
                        <h3>DATABASE CLI TOOL</h3>
                        <p>This project involves creating a command-line interface (CLI) tool to perform a full backup of a database.</p>
                        <span><Link to="https://github.com/Jose-silvaa/database-cli-tool">See the Code</Link></span>
                    </div>
                    <div className="container-image">
                        <Link to="https://github.com/Jose-silvaa/database-cli-tool">
                            <img className="image" src={Database} alt="database"/>
                        </Link>
                    </div>
                </div>
            </div>
         
        </section>
        <section className="content-experience-title">
            <h4>EXPERIENCE</h4>
            <section className="content-experience">
                <div className="experience">
                    <FaHtml5 className="experience-logo experience-html"/>
                    <span>HTML5</span>
                </div>
                <div className="experience">
                    <IoLogoCss3 className="experience-logo"/>
                    <span>CSS</span>
                </div>
                <div className="experience">
                    <IoLogoJavascript className="experience-javascript experience-logo"/>
                    <span>JavaScript</span>
                </div>
                <div className="experience">
                    <FaReact className="experience-logo"/>
                    <span>React.JS</span>
                </div>
                <div className="experience">
                    <FaNodeJs className="experience-logo"/>
                    <span>NodeJS</span>
                </div>
                <div className="experience">
                    <SiMongodb className="experience-logo"/>
                    <span>MongoDB</span>
                </div>
                <div className="experience">
                    <BiLogoPostgresql className="experience-logo"/>
                    <span>PostgreSQL</span>
                </div>
            </section>
          
        </section>
        <footer className="footer">
            <section className="footer-information">
                <h3>Drop Me a Message</h3>
                <p>Hi, If you are a recruiter or potential collaborator interested in discussing opportunities, I would love to hear from you!</p>
                <ul>
                    <li>jvitorfacanha@gmail.com</li>
                    <li>Macaé, Rio de Janeiro, Brazil</li>
                </ul>

            </section>
            {/* <section className="footer-form" id="contact">
                <form className="footer-contact">

                    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Your email" required/>
                    <input onChange={(e)=> setSubject(e.target.value)} type="text" id="subject" name="subject" placeholder="Subject" required/>
                    <textarea onChange={(e)=> setMessage(e.target.value)} id="message" name="message" placeholder="Message" required></textarea>

                    <button onClick={(event)=>sendEmail(event)} type="submit">Send</button>
                </form>
            </section> */}
        </footer>
    </>
  )
}

export default App
