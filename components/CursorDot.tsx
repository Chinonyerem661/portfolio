"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorDot() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [cursorText, setCursorText] = useState("");
  const [variant, setVariant] = useState<"default" | "hover" | "text" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches));

    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      const el = e.target as HTMLElement | null;
      if (!el) return;

      const interactive = el.closest(
        "a, button, [data-cursor], [data-cursor-text]"
      ) as HTMLElement | null;

      if (interactive) {
        const text = interactive.getAttribute("data-cursor-text");
        if (text) {
          setCursorText(text);
          setVariant("text");
        } else {
          setCursorText("");
          setVariant("hover");
        }
      } else {
        setCursorText("");
        setVariant("default");
      }
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isVisible) return null;

  const classNames = [
    "cb-cursor",
    variant === "hover" && "is-hover",
    variant === "text" && "is-text",
    variant === "hidden" && "is-hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={cursorRef} className={classNames}>
      <div className="cb-cursor-inner" />
      <div ref={textRef} className="cb-cursor-text">
        {cursorText}
      </div>
    </div>
  );
}