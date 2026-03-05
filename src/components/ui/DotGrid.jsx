"use client";

import React, { useRef, useEffect, useCallback } from 'react';

export default function DotGrid({
    gap = 24,
    size = 1.5,
    color = "rgba(5, 250, 140, 0.55)",
    glowColor = "rgba(0, 229, 255, 0.8)", // Accent cyan
    mouseRadius = 150,
    distortionStrength = 3.5,
    returnSpeed = 0.08,
    friction = 0.85,
    className = ""
}) {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false });
    const dotsRef = useRef([]);

    const initDots = useCallback((width, height) => {
        const dots = [];
        const cols = Math.floor(width / gap);
        const rows = Math.floor(height / gap);

        const offsetX = (width - cols * gap) / 2;
        const offsetY = (height - rows * gap) / 2;

        for (let i = 0; i <= cols; i++) {
            for (let j = 0; j <= rows; j++) {
                dots.push({
                    baseX: i * gap + offsetX,
                    baseY: j * gap + offsetY,
                    x: i * gap + offsetX,
                    y: j * gap + offsetY,
                    vx: 0,
                    vy: 0,
                    pulseSeed: Math.random() * Math.PI * 2,
                    pulseSpeed: 0.01 + Math.random() * 0.02,
                    baseOpacity: 0.2 + Math.random() * 0.8 // Add some base variance
                });
            }
        }
        dotsRef.current = dots;
    }, [gap]);

    // Handle Resize
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            // Use parent element dimensions
            const parent = canvas.parentElement;
            if (!parent) return;

            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            initDots(canvas.width, canvas.height);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [initDots]);

    // Handle Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        let animationFrameId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const dots = dotsRef.current;

            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];

                // Physics calculation
                if (mouse.isHovering) {
                    const dx = mouse.x - dot.x;
                    const dy = mouse.y - dot.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        const angle = Math.atan2(dy, dx);

                        // Push away from mouse
                        dot.vx -= Math.cos(angle) * force * distortionStrength;
                        dot.vy -= Math.sin(angle) * force * distortionStrength;
                    }
                }

                // Spring back to base position
                dot.vx += (dot.baseX - dot.x) * returnSpeed;
                dot.vy += (dot.baseY - dot.y) * returnSpeed;

                // Apply friction
                dot.vx *= friction;
                dot.vy *= friction;

                // Update position
                dot.x += dot.vx;
                dot.y += dot.vy;

                // Static dot rendering
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);

                // Split the rgba to inject opacity
                const colorParts = color.replace('rgba(', '').replace(')', '').split(',');
                if (colorParts.length === 4) {
                    ctx.fillStyle = `rgba(${colorParts[0]}, ${colorParts[1]}, ${colorParts[2]}, ${parseFloat(colorParts[3]) * dot.baseOpacity})`;
                } else {
                    ctx.fillStyle = color;
                }
                ctx.shadowBlur = 0;
                ctx.shadowColor = "transparent";

                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationFrameId);
    }, [color, glowColor, size, mouseRadius, distortionStrength, returnSpeed, friction]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();

            // Check if mouse is within the viewport bounds of the canvas
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    isHovering: true
                };
            } else {
                mouseRef.current.isHovering = false;
                mouseRef.current.x = -1000;
                mouseRef.current.y = -1000;
            }
        };

        const handleMouseLeave = () => {
            mouseRef.current.isHovering = false;
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`block ${className}`}
            style={{ width: '100%', height: '100%' }}
        />
    );
}
