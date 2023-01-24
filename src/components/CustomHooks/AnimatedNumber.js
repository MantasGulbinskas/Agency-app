import React from 'react';
import {useState, useEffect} from 'react';

function AnimatedNumber({end, duration = 1000, delay = 0}) {
    const [display, setDisplay] = useState(0);
    const [formattedNumber, setFormattedNumber] = useState(
        new Intl.NumberFormat().format(display)
    );
    useEffect(() => {
        let start = null;
        const step = timestamp => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            setFormattedNumber(new Intl.NumberFormat('de-De').format(display))
            setDisplay(
                Math.round(
                    progress / duration * (end - display) + display,
                )
            )
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        const timeoutId = setTimeout(() => {
            window.requestAnimationFrame(step);
        }, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [display, end, duration, delay]);

    return <span>{formattedNumber || 0}</span>;
}

export default AnimatedNumber;