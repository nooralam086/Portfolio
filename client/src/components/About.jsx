import "./About.css";
function About({about}){
    return(
        <section className="section about" id="about">
            <div className="container about-inner">
                <div className="about-main">
                <h2 className="section-title">About me</h2>
                <p className="about-text">
                "I'm a final-year BCA student at SHEAT College of Engineering, Varanasi, 
                with a strong interest in web development. I enjoy turning ideas into functional and user-friendly websites. 
                Over the past year, I've been learning and working with the MERN Stack and building various projects to strengthen 
                my development skills. I'm always curious to learn new technologies, solve problems, and turn creative ideas into 
                real-world digital experiences."
                </p>
                <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">Download resume</a>
                </div>
                
                <ul className="about-facts">
                <li>
                    <span className="fact-label">Location</span>
                    <span>Varanasi, India</span>
                </li>
                 <li>
                    <span className="fact-label">Email</span>
                    <a href="mailto:nooralamv814@gmail.com">nooralamv@gmail.com</a>
                </li>
                <li>
                    <span className="fact-label">GitHub</span>
                    <a href="https://github.com" target="_blank" rel="noreferrer">github.com/nooralam086</a>
                </li>
                <li>
                    <span className="fact-label">linkedIn</span>
                    <a href="https://linkedin.com/in/noor-alam-304359430" target="_blank" rel="noreferrer">
                    linkedin.com/in/noor-alam-304359430</a>
                </li>
                </ul>
            </div>
        </section>
    );
}
export default About;