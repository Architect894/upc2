import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import styles from '../styles/styles.module.css';

export default function Reviews() {
    // Styles for the header
    const headerStyle = {
        color: 'white',
        padding: '10%', // Adjust padding as needed
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
        <section id="our-reviews" className={`py-5 text-center ${styles['our-story-container']}`}>
            <div className="container">
                <h2 style={headerStyle} className="mb-1 display-3">Reviews</h2>
                <p style={paragraphStyle} className="mb-3 lead text-white">
                    Hate the bugs, love the company
                </p>
                <p style={paragraphStyle} className="mb-3 lead text-white">
                    I almost died until they did the bugs died.
                </p>
            </div>
        </section>
    );
}