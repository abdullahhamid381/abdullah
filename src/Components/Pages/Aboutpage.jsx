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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, non id explicabo, quasi eveniet, temporibus sed dolorum dicta cupiditate nobis cumque suscipit. Omnis delectus reprehenderit quasi quisquam, dolorem, corporis amet atque libero minus nisi aliquid asperiores? Dolorem suscipit eum officia praesentium sunt eaque voluptatem error hic? Obcaecati officiis reiciendis quibusdam totam illum? Repudiandae rem sapiente error sed quis. Dicta aspernatur repellat aliquid vitae corporis eum repudiandae quis dignissimos cumque quas. Maxime, esse soluta! Accusamus aspernatur perspiciatis repellat cum tenetur, dolores consequuntur nihil a rem in officia aut? Dolorum fugit nemo at deleniti, sed illo possimus maxime dolore vero odio.</p>
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