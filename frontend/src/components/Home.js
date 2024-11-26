import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className="homeContainer">
            {/* Hero Section */}
            <div className="heroSection">
                <h1>Welcome to JobHunter</h1>
                <p>Your one-stop destination for job opportunities.</p>
                
                <Link to="/login"><button className="ctaButton">Get Started</button></Link>
            </div>

            {/* Features Section */}
            <div className="featuresSection">
                <h2>Why Choose Us?</h2>
                <div className="featuresList">
                    <div className="feature">
                        <h3>Find Your Dream Job</h3>
                        <p>Search for thousands of jobs tailored to your skills and interests.</p>
                    </div>
                    <div className="feature">
                        <h3>Easy Applications</h3>
                        <p>Apply to jobs with just a few clicks.</p>
                    </div>
                    <div className="feature">
                        <h3>Trusted by Employers</h3>
                        <p>We connect you with top companies looking for talent.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonialsSection">
                <h2>What Our Users Say</h2>
                <div className="testimonialsList">
                    <div className="testimonial">
                        <p>"JobHunter helped me land my dream job in just a week!"</p>
                        <span>- A Happy Job Seeker</span>
                    </div>
                    <div className="testimonial">
                        <p>"The platform is user-friendly and efficient."</p>
                        <span>- An Employer</span>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footerSection">
                <p>&copy; 2024 JobHunter. All rights reserved.</p>
            </div>
        </div>
    );
}
