import { ArrowDownRight } from "lucide-react";
import profileImage from "../../assets/profile.jpg";
import "./About.css";

function About() {
    return (
        <section id="about" className="about">

            <div className="about-top">
                <div className="about-heading">
                    <p className="section-label">ABOUT</p>

                    <h2>
                        A developer who
                        <span> likes to build.</span>
                    </h2>
                </div>

                <div className="about-photo">
                    <img
                        src={profileImage}
                        alt="Kantima - Web Developer"
                    />
                </div>
            </div>

            <div className="about-content">
                <div className="about-intro">
                    <p className="about-name">
                        Hi, I am <strong>Kantima.</strong>
                    </p>

                    <p>
                        A full-stack developer who enjoys creating modern,
                        interactive, and user-friendly web experiences.
                    </p>

                    <p>
                        I love turning ideas into functional web
                        experiences and exploring different technologies
                        across frontend and backend development.
                    </p>
                </div>

                <div className="about-info">

                    <div className="about-info-item">
                        <span>ROLE</span>
                        <strong>Web Developer</strong>
                    </div>

                    <div className="about-info-item">
                        <span>FOCUS</span>
                        <strong>Web Development</strong>
                    </div>

                    <div className="about-info-item">
                        <span>APPROACH</span>
                        <strong>Creative · Practical · Curious</strong>
                    </div>

                    <a href="#skills" className="about-link">
                        Explore my skills
                        <ArrowDownRight size={18} />
                    </a>

                </div>
            </div>

        </section>
    );
}

export default About;