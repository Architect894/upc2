import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import styles from '../styles/styles.module.css';

export default function Ourstory() {
    // Styles for the header
    const headerStyle = {
        backgroundColor: 'var(--bs-dark)', // Using Bootstrap's secondary color variable for consistency
        color: 'white',
        padding: '10px', // Adjust padding as needed
        border: 'solid black 2px',
        borderRadius: '25px', // For rounded corners
        display: 'inline-block', // To center the background with the text
        textAlign: 'center', // Center text within the header
        width: '100%', // Ensure full width
        fontFamily: 'Quicksand'
    };

    // Styles for paragraphs
    const paragraphStyle = {
        color: 'var(--bs-secondary)', // Text color to match header background for contrast
        backgroundColor: 'var(--bs-dark)', // Light background for readability
        padding: '5px', // Padding for paragraphs
        borderRadius: '5px', // For rounded corners
        textAlign: 'justify', // Justify text for better readability
        fontFamily: 'Quicksand'
    };

    return (
        <section id="our-story" className={`py-5 text-center ${styles['our-story-container']}`}>
            <div className="container">
                <h2 style={headerStyle} className="mb-1 display-3">Why Us?</h2>
                <p style={paragraphStyle} className="mb-3 lead text-white">
                    At United Pest Control, we pride 
                    ourselves on offering top-tier pest management solutions. 
                    Our team of experts is equipped with the latest technology 
                    in pest control to ensure your environment remains pest-free,
                    providing peace of mind and health for all.
                </p>
                <p style={paragraphStyle} className="mb-3 lead text-white">
                    We understand the importance of maintaining a pest-free 
                    environment, not just for comfort, but for health and safety.
                    With years of experience, we approach every pest with a kiggity bip.
                </p>
            </div>
        </section>
    );
}