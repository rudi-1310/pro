import React, { useRef, useEffect, useState } from 'react';
import './FadeInSection.css'; // Import your CSS file for styling

function ScrollFade({ children }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // If the section is in the viewport, set isVisible to true
                if (entry.intersectionRatio > 0) {
                    setVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className={`fade-section ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
}

export default ScrollFade;
