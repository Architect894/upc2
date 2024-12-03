"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function DropMenu() {
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (menuRef.current) {
                const menuOffsetTop = menuRef.current.offsetTop;
                setIsSticky(window.scrollY > menuOffsetTop);
            }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [flyoutOpen, setFlyoutOpen] = useState(false);

    const toggleFlyout = () => {
        setFlyoutOpen(!flyoutOpen);
    };

    return (
        <div
            ref={menuRef}
            className={isSticky ? "position-fixed" : "position-absolute"}
            style={{
                top: isSticky ? "0%" : "0%", // Adjust position based on scroll
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                backgroundColor: "rgba(0, 15, 180, 0.3)",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(2, 15, 82, 0.5)",
            }}
        >
            <button
                type="button"
                className="inline-flex items-center gap-x-1 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                style={{
                    backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
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
                    className="absolute top left-1/2 z-10 mt-2"
                    style={{
                        transform: "translateX(-50%)",
                    }}
                >
                    <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                        <Link href="#" className="block p-2 hover:text-indigo-600">
                            Analytics
                        </Link>
                        <Link href="#" className="block p-2 hover:text-indigo-600">
                            Engagement
                        </Link>
                        <Link href="#" className="block p-2 hover:text-indigo-600">
                            Security
                        </Link>
                        <Link href="#" className="block p-2 hover:text-indigo-600">
                            Integrations
                        </Link>
                        <Link href="#" className="block p-2 hover:text-indigo-600">
                            Automations
                        </Link>
                        <Link href="#" className="block p-2 hover:text-indigo-600">
                            Reports
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
