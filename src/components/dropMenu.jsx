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
            className={`${isSticky ? "fixed top-0 left-0 w-100" : "absolute left-0 w-100"}`}
            style={{
                zIndex: 9999,
                backgroundColor: "rgba(0, 125, 2500, 0.5)",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(2, 15, 82, 0.8)",
                paddingTop: "5%",
                top: isSticky ? "0" : `${originalOffsetTop.current}px`, // Reset to original position
                transition: "top 0.3s ease",
            }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Solutions Dropdown */}
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-1 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                        style={{
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(520, 10, 0, 0.8)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                        onClick={toggleFlyout}
                        aria-expanded={flyoutOpen}
                    >
                        <span>Solutions</span>
                        <svg
                            className="w-5 h-5"
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
                                width: "200px",
                                backgroundColor: "rgba(0, 150, 250, 0.4)",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
                                padding: "1rem",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                        >
                            <Link href="#" className="block p-2 hover:text-red-300">
                                Analytics
                            </Link>
                            <Link href="#" className="block p-2 hover:text-red-300">
                                Engagement
                            </Link>
                            <Link href="#" className="block p-2 hover:text-red-300">
                                Security
                            </Link>
                            <Link href="#" className="block p-2 hover:text-red-300">
                                Integrations
                            </Link>
                            <Link href="#" className="block p-2 hover:text-red-300">
                                Automations
                            </Link>
                            <Link href="#" className="block p-2 hover:text-red-300">
                                Reports
                            </Link>
                        </div>
                    )}
                </div>

                {/* Login Options Dropdown */}
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-1 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                        style={{
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(520, 10, 0, 0.8)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                        onClick={toggleLoginFlyout}
                        aria-expanded={loginFlyoutOpen}
                    >
                        <span>Login</span>
                        <svg
                            className="w-5 h-5"
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
                                backgroundColor: "rgba(0, 150, 250, 0.4)",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
                                padding: "1rem",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                right: 0, // Align the dropdown to the left of the button
                            }}
                        >
                            <Link href="/commercial" className="block p-2 hover:text--red-300">
                                Commercial Login
                            </Link>
                            <Link href="/residential" className="block p-2 hover:text--red-300">
                                Residential Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
