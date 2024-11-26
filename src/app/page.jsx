import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import styles from '../styles/styles.module.css';

export default function Home() {
    return (
        <section id= "home">
            <header className="position-relative">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-12 position-relative" style={{ height: '300px' /* Adjust this value for your header height */ }}>
                            <div className="bg-img" style={{ 
                                backgroundImage: `url('/pestguy.svg')`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'repeat', 
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}>
                            {/* This div serves as the background image */}
                        </div>
                        <div className={`position-absolute top-0 start-0 mt-3 ms-3 ${styles['logo-container']}`} style={{ zIndex: 1 }}>
                            <Image 
                                src="/unitedgif.svg" 
                                alt="United Pest Control Logo" 
                                width={280}  // Adjust width for size
                                height={60}  // Adjust height for size
                                className="img-fluid"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </section>
    );
}