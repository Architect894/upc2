"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";


export default function UnitedLogo() {
    return (
        <div
            className="position-absolute top-40"
            style={{
                display: "flex",
                alignItems: "center",
                width: "55%",
                zIndex: 1000,
                height: "100px",
                marginTop: "219px",
            }}
        >
            {/* Logo Background */}
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.0)", // Semi-transparent background for the logo
                    backdropFilter: "blur(5px)", // Apply blur to the background
                    borderRadius: "10%", // Rounded corners
                    width: "55%",
                    height: "85%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <div className={`d-flex align-items-center ${styles["logo-container"]}`}>
                    <Image
                        src="/unitedgif.svg"
                        alt="United Pest Control Logo"
                        width={550}
                        height={50}
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}
