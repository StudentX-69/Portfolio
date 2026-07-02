import { useEffect, useRef } from 'react';

export function useCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Wait until the canvas is actually rendered
    
    const ctx = canvas.getContext('2d');

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const CURVE_CONFIG = {
        numLines: 6,
        spreadPercent: 0.2,  
        reducedMotionSpreadPercent: 0.3,
        maxSpread: 1000,     
        flareHeight: 0.35,   
        bottomOffset: 80     
    };

    function draw() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        ctx.clearRect(0, 0, width, height);

        const numLines = CURVE_CONFIG.numLines;
        const originX = width / 2;
        const originY = height + CURVE_CONFIG.bottomOffset;

        const spreadPercent = reducedMotionQuery.matches
            ? CURVE_CONFIG.reducedMotionSpreadPercent
            : CURVE_CONFIG.spreadPercent;
        const spread = Math.min(width * spreadPercent, CURVE_CONFIG.maxSpread); 
        const step = spread / (numLines - 1);
        const startTargetX = (width - spread) / 2;

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#5a2592'; 

        for (let i = 0; i < numLines; i++) {
            const targetX = startTargetX + (i * step);

            ctx.beginPath();
            ctx.moveTo(originX, originY);
            
            const cpX = originX;
            const cpY = height * CURVE_CONFIG.flareHeight; 
            
            ctx.quadraticCurveTo(cpX, cpY, targetX, 0);
            ctx.stroke();
        }
    }

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        draw();
    }

    window.addEventListener('resize', resize);
    reducedMotionQuery.addEventListener('change', resize);
    resize(); 

    // Cleanup the event listener when the component unmounts
    return () => {
        window.removeEventListener('resize', resize);
        reducedMotionQuery.removeEventListener('change', resize);
    };
  }, []);

  return canvasRef;
}
