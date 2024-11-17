import React, { useEffect, useState } from 'react';
import './LandingPage.css';  // Import separate CSS for LandingPage component

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [loading, setLoading] = useState(0);
    const navigate = useNavigate();

    // Simulate loading progress from 0 to 100
    useEffect(() => {
        const interval = setInterval(() => {
            setLoading((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 50);  // Update every 50ms

        // Redirect to Intro after loading is 100%
        if (loading === 100) {
            setTimeout(() => {
                navigate('/intro');
            }, 500); // Add a small delay before redirecting
        }

        return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [loading, navigate]);

    return (
        <div className="landing-page">
            <div className="loading-container">
                <h1 className=' Loading textShadow text-6xl/[65px] font-semibold'>Coding Awaits...</h1>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${loading}%` }}></div>
                </div>
                <p>{loading}%</p>
            </div>

            {/* 3D Cube Animation */}
            <div className="cube-container">
                <div className="cube">
                    <div className="cube-face front">
                        <img src="https://imgs.search.brave.com/GVXf-tF19mUaFP5C99klxZKPU21GL6llDaPk-qAvFbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91c2Vy/LWltYWdlcy5naXRo/dWJ1c2VyY29udGVu/dC5jb20vNDI3NDcy/MDAvNDYxNDAxMjUt/ZGEwODQ5MDAtYzI2/ZC0xMWU4LThlYTct/YzQ1YWU2MzA2MzA5/LnBuZw" alt="C++" className="cube-icon" />
                    </div>
                    <div className="cube-face back">
                        <img src="https://imgs.search.brave.com/fE12vliGzAiFLrHB1pwquiwPoKIlh2UsfW4-5n2Lqf8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhc2Ny/aXB0LWpzLWljb24t/NTEyeDUxMi1xM2ln/d2xuNi5wbmc" alt="JavaScript" className="cube-icon" />
                    </div>
                    <div className="cube-face left">
                        <img src="https://imgs.search.brave.com/PvcF6Jy70SOl3wS7rkNalTXg9cpqSa8WRCQuMWppkyI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni85MTkvOTE5ODU0/LnBuZz9zZW10PWFp/c19oeWJyaWQ" alt="Java" className="cube-icon" />
                    </div>
                    <div className="cube-face right">
                        <img src="https://imgs.search.brave.com/sK-4LfLaVeaNW4gdZvKN4MkOrHpsg1kKsh0RAPcy-5U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xODIyLzE4MjI4/OTkucG5nP3NlbXQ9/YWlzX2h5YnJpZA" alt="Python" className="cube-icon" />
                    </div>
                    <div className="cube-face top">
                        <img src="https://imgs.search.brave.com/mNL2DKbmXSDJQOVArevCR_whrtCd_ItGKiWmR9AeihU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/OTI0MDc2L3Bob3Rv/L2xhcHRvcC1rZXli/b2FyZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bnZnc2R4/ZEVvd0hsNlhmdnlr/WDM0RkdvX1V4eVY4/Sy0tbWZqM3BJblh0/cz0" className="cube-icon" />
                    </div>
                    <div className="cube-face bottom">
                        <img src="https://imgs.search.brave.com/Hcit600OKnO0FeK7EFdtxTLDWtEOerX4WjyHtEmHRdQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMDUxLzEwNTEy/NzcucG5nP3NlbXQ9/YWlzX2h5YnJpZA" className="cube-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
