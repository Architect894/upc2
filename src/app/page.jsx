"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import styles from '../styles/styles.module.css';
import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
    const [opacity, setOpacity] = useState(1); // Start with full opacity
    const [scrollY, setScrollY] = useState(1); // Track the scroll position

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Attach the event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Calculate the opacity based on scroll position
        const opacityValue = Math.max(1 - scrollY / 300, 0); // Fade out as the user scrolls
        setOpacity(opacityValue);
    }, [scrollY]);

    return (
        <section id="home">
            <header
                className="position-relative"
                style={{
                    opacity: opacity,
                    transition: 'opacity 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)', // Optional semi-transparent background
                    backdropFilter: 'blur(5px)', // Optional blur effect for the header
                    zIndex: 10, // Ensure the header stays above other elements
                }}
            >
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div
                            className="col-12 position-relative"
                            style={{ height: '300px' }} // Adjust height for header
                        >
                            {/* Background Video */}
                            <video
                                className="bg-video"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '180%',
                                    objectFit: 'cover',
                                    zIndex: -1, // Ensure it stays behind the content
                                }}
                                src="/Nologo.mp4" // Path to your video file
                                autoPlay
                                loop
                                muted
                                playsInline // Ensures compatibility with mobile browsers
                            ></video>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}
