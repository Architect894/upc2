import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import styles from '../styles/styles.module.css';

export default function ContactUs() {
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
        padding: '15px', // Padding for paragraphs
        borderRadius: '5px', // For rounded corners
        textAlign: 'justify', // Justify text for better readability
        fontFamily: 'Quicksand'
    };

    return (
        <section id="contactUs" className={`py-5 text-center ${styles['logo-container']}`}>
            <div className="container">
                <h2 style={headerStyle} className="mb-1 display-3">Contact Us</h2>
                <p style={paragraphStyle} className="mb-3 lead text-white">
                    Our number is 1-800-FUK-USLF
                </p>
                <p style={paragraphStyle} className="mb-3 lead text-white">
                    Tell you hwhat and I aint gonna tell you again, talk shit to fuck@shitdammit.com
                </p>
            </div>
        </section>
    );
}