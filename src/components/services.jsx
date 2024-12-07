"use client";
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.css'; // Adjust the path as necessary
import '../styles/global.css';

export default function WorkWithUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['visible']);
                } else {
                    entry.target.classList.remove(styles['visible']);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const stats = [
        { label: "Office", value: "1" },
        { label: "Agents", value: "6" },
        { label: "Days a Week", value: "5" },
        { label: "Customer Service", value: "Local" },
    ];

    const links = [
        { label: "Termite Control", href: "#" },
        { label: "Pest Control", href: "#" },
        { label: "Rodent Control", href: "#" },
        { label: "Wildlife Management", href: "#" },
    ];

    return (
        <section
            id="work-with-us"
            className="position-relative text-white py-5 text-center"
            ref={sectionRef}
            style={{
                height: '70vh', // Limit the height to crop the video
                overflow: 'hidden', // Hide any part of the video that overflows
                position: 'relative',
                marginTop: "23%"
            }}
        >
            {/* Background Video */}
            <video
                className="position-absolute top-0 start-0 w-100"
                style={{
                    height: '100%', // Make the video fill the section height
                    objectFit: 'cover', // Ensures the video scales properly
                    objectPosition: 'center ', // Crop the video to focus on the top part
                    zIndex: -1, // Ensure the video stays behind content
                }}
                src="/services.mp4" // Path to your video file
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Overlay for readability */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                    zIndex: 0, // Ensure the overlay stays above the video
                }}
            ></div>

            {/* Content */}
            <div
                className="container position-relative d-flex flex-column justify-content-center align-items-center"
                style={{
                    zIndex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
                    backdropFilter: 'blur(10px)', // Apply blur to the background
                    borderRadius: '10px', // Rounded corners for aesthetic
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)', // Subtle shadow for separation
                    padding: '0px', // Padding inside the text box
                    maxWidth: '90%', // Limit the width
                }}
            >
                <h2 className="display-3 mb-3">Services</h2>
                <p className="lead">
                    United Pest Control can help with any service and provide information to whatever question you may have!
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 my-4">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="btn btn-outline-light">
                            {link.label} &rarr;
                        </a>
                    ))}
                </div>
                <div className="row text-start text-light my-5">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-6 col-md-3 mb-3">
                            <h3 className="h1">{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
