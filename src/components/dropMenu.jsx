"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function DropMenu() {
    const [flyoutOpen, setFlyoutOpen] = useState(false);
    const [loginFlyoutOpen, setLoginFlyoutOpen] = useState(false); // For the login dropdown
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef(null);
    const originalOffsetTop = useRef(0);

    const toggleFlyout = () => {
        setFlyoutOpen(!flyoutOpen);
    };

    const toggleLoginFlyout = () => {
        setLoginFlyoutOpen(!loginFlyoutOpen);
    };

    useEffect(() => {
        if (menuRef.current) {
            // Store the original offsetTop of the element
            originalOffsetTop.current =
                menuRef.current.getBoundingClientRect().top + window.scrollY;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition >= originalOffsetTop.current);
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={menuRef}
            className={`${isSticky ? "fixed top-0 left-1/2 transform -translate-x-1/2 w-50" : "absolute left-1/2 transform -translate-x-1/2 top-0 w-50"}`}

            style={{
                zIndex: 9999,
                backgroundColor: "rgba(850, 850, 2500, 0.8)",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
                top: isSticky ? "0" : `${originalOffsetTop.current}px`, // Reset to original position
                transition: "top 0.3s ease",
                fontFamily: "Quicksand",
                marginTop: "10px"
            }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Solutions Dropdown */}
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-3 text-lg font-bold text-black px-2 py-2 rounded-lg shadow-lg transition-all duration-100"
                        style={{
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(520, 10, 0, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                        onClick={toggleFlyout}
                        aria-expanded={flyoutOpen}
                    >
                        <span>Menu</span>
                        <svg
                            className="w-10 h-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {flyoutOpen && (
                        <div
                            className="absolute"
                            style={{
                                marginTop: "1px",
                                width: "140px",
                                backgroundColor: "rgba(500, 500, 250, 0.4)",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
                                padding: "1rem",
                                backdropFilter: "blur(5px)",
                                WebkitBackdropFilter: "blur(10px)",
                                color: "black",
                            }}
                        >
                            <Link href="#" className="block p-2 font-bold hover:text-red-300">
                                Analytics
                            </Link>
                            <Link href="#" className="block p-2 font-bold hover:text-red-300">
                                Engagement
                            </Link>
                            <Link href="#" className="block p-2 font-bold hover:text-red-300">
                                Security
                            </Link>
                            <Link href="#" className="block p-2 font-bold hover:text-red-300">
                                Integrations
                            </Link>
                            <Link href="#" className="block p-2 font-bold hover:text-red-300">
                                Automations
                            </Link>
                            <Link href="#" className="block p-2 font-bold hover:text-red-300">
                                Reports
                            </Link>
                        </div>
                    )}
                </div>

                {/* Login Options Dropdown */}
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-3 text-lg font-semibold text-black px-2 py-2 rounded-lg shadow-md transition-all duration-300"
                        style={{
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(520, 10, 0, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                        onClick={toggleLoginFlyout}
                        aria-expanded={loginFlyoutOpen}
                    >
                        <span>Login</span>
                        <svg
                            className="w-10 h-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {loginFlyoutOpen && (
                        <div
                            className="absolute"
                            style={{
                                marginTop: "1px",
                                width: "200px",
                                backgroundColor: "rgba(500, 500, 250, 0.4",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
                                padding: "1rem",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                color: "black",
                                right: 0, // Align the dropdown to the left of the button
                            }}
                        >
                            <Link href="/commercial" className="block p-2 font-bold hover:text-red-300">
                                Commercial Login
                            </Link>
                            <Link href="/residential" className="block p-2 font-bold hover:text-red-300">
                                Residential Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
