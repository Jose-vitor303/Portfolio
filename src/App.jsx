import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaJava, FaHtml5 } from 'react-icons/fa'
import { SiSpring, SiJunit5, SiJest } from 'react-icons/si'
import Header from "./components/header/Header.jsx";
import books from "./assets/susan-q-yin-2JIvboGLeho-unsplash.jpg"
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
                        <Link to="https://github.com/Jose-vitor303">
                            <AiFillGithub className="experience-logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/jose-vitor-facanha/">
                            <AiFillLinkedin className="experience-logo"/>
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
            <div className="content-portfolio-projects">
                <div className="content-project">
                    <h3>PROJECT LIBRARY</h3>
                    <p>The purpose of this project was to simulate the operation of a library. Through this project, it was made possible to insert data into the database, such as information about authors, books, and readers. The development of this application involved the use of various technologies, including JavaFX, PostgreSQL, Hibernate, JUnit, and Maven.</p>
                    <span><Link to="https://github.com/Jose-vitor303/bibliotecas">See the Code</Link></span>
                </div>
                <div className="container-image">
                    <Link to="https://github.com/Jose-vitor303/bibliotecas">
                        <img className="image" src={books} alt="foto"/>
                    </Link>
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
                    <SiJest className="experience-logo"/>
                    <span>Jest</span>
                </div>
                <div className="experience">
                    <FaJava className="experience-logo"/>
                    <span>Java</span>
                </div>
                <div className="experience">
                    <SiSpring className="experience-logo"/>
                    <span>Spring</span>
                </div>
                <div className="experience">
                    <SiJunit5 className="experience-logo"/>
                    <span>Junit</span>
                </div>
            </section>
          
        </section>
        <footer className="footer">
            <section className="footer-information">
                <h3>Drop Me a Message</h3>
                <p>Hi, If you are a recruiter or potential collaborator interested in discussing opportunities, I would love to hear from you!</p>
                <ul>
                    <li>jvitorfacanha@Outlook.com</li>
                    <li>Macaé, Rio de Janeiro, Brazil</li>
                </ul>

            </section>
            <section className="footer-form" id="contact">
                <form className="footer-contact">

                    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Your email" required/>
                    <input onChange={(e)=> setSubject(e.target.value)} type="text" id="subject" name="subject" placeholder="Subject" required/>
                    <textarea onChange={(e)=> setMessage(e.target.value)} id="message" name="message" placeholder="Message" required></textarea>

                    <button onClick={(event)=>sendEmail(event)} type="submit">Send</button>
                </form>
            </section>
        </footer>
    </>
  )
}

export default App
