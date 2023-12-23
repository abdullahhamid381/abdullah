import React from 'react'
import '../Home/Scss/About.scss'
import { FiDownload } from "react-icons/fi";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
const AboutPage = () => {
    return (
        <div className='about-parent' style={{padding:"160px 0 0 0"}}>
            <Navbar/>
            <div className="about-grid">
                <div className='about-text'>
                    <div>
                        <h3>About Me</h3>
                        <h1>Transforming visions into
                            exceptional portfolios</h1>
                    </div>
                    <div className='about-info'>
                        <div>
                            <button></button>
                        </div>
                        <div className='about-detail-text'>
                            <p>Hello, I'm a dynamic Full Stack Developer with a passion for crafting seamless digital experiences. With a robust background in React.js and Node.js, I bring two years of hands-on expertise to the table. My journey in the world of web development has equipped me with a deep understanding of front-end intricacies and back-end functionalities.
                                <br /><br />
                                In the realm of React.js, I excel in building interactive and responsive user interfaces that captivate users from the first click. Leveraging the power of Node.js on the server side, I thrive in architecting scalable and efficient back-end solutions, ensuring a robust foundation for web applications.
                            </p>
                            <a href="Abdullah Hamid Cv.pdf" download='Abdullah Hamid Cv.pdf'>  <button className='download'>Download Cv <FiDownload /></button></a>
                        </div>
                    </div>
                </div>
                <div className='about-img'>
                    <img src="./images/myimg.png" alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage