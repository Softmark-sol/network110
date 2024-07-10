import React, { useEffect, useRef } from "react";
import logo from "../assets/images/Network0.png";
import "../css/particleLogo.css";

const LogoParticles = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const nextParticleRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nextparticle.nextco.de/nextparticle.min.js";
    script.onload = () => {
      const container = containerRef.current;
      nextParticleRef.current = new window.NextParticle({
        image: logoRef.current,
        width: container.clientWidth,
        height: container.clientHeight,
        particleGap: 1,
      });

      window.addEventListener("resize", debounce(handleResize, 300));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", debounce(handleResize, 300));
    };
  }, []);

  const handleResize = () => {
    if (nextParticleRef.current) {
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      nextParticleRef.current.width = width;
      nextParticleRef.current.height = height;
      nextParticleRef.current.start();
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <div
      className="particle-container"
      ref={containerRef}
      style={styles.container}
    >
      <img
        src={logo}
        ref={logoRef}
        alt="Logo"
        style={styles.logo}
        onLoad={() => {
          if (logoRef.current) {
            logoRef.current.style.display = "block";
          }
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
  },
  logo: {
    display: "none",
  },
};

export default LogoParticles;
