"use client";

import { useEffect } from "react";

export default function CursorDot() {
  useEffect(() => {
    // Create custom cursor dot
    const dot = document.createElement("div");
    dot.id = "custom-cursor-dot";
    dot.style.position = "fixed";
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "#6366f1";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "99999";
    dot.style.boxShadow = "0 0 15px rgba(99, 102, 241, 0.8)";
    dot.style.top = "-10px";
    dot.style.left = "-10px";
    dot.style.display = "block";
    document.body.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let animationFrameId: number | null = null;

    // Smoothing factor (lower = slower, higher = faster) - adjust between 0.05 to 0.3
    const smoothing = 0.1;

    const updateDotPosition = () => {
      // Interpolate between current dot position and mouse position
      dotX += (mouseX - dotX) * smoothing;
      dotY += (mouseY - dotY) * smoothing;
      
      dot.style.left = (dotX - 6) + "px";
      dot.style.top = (dotY - 6) + "px";
      
      animationFrameId = requestAnimationFrame(updateDotPosition);
    };

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      dot.style.transform = "scale(0.6)";
    };

    const handleMouseUp = () => {
      dot.style.transform = "scale(1)";
    };

    // Start animation loop
    animationFrameId = requestAnimationFrame(updateDotPosition);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (dot && dot.parentNode) {
        dot.parentNode.removeChild(dot);
      }
    };
  }, []);

  return null;
}