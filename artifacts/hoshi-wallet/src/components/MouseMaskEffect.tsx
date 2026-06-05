import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseMaskEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const proxy = { x: -300, y: -300, size: 6 };

    function apply() {
      const half = proxy.size / 2;
      cursor!.style.transform = `translate(${proxy.x - half}px, ${proxy.y - half}px)`;
      cursor!.style.width = `${proxy.size}px`;
      cursor!.style.height = `${proxy.size}px`;
    }

    /* Smooth x/y tracking */
    const xTo = gsap.quickTo(proxy, "x", {
      duration: 0.45,
      ease: "power4.out",
      onUpdate: apply,
    });
    const yTo = gsap.quickTo(proxy, "y", {
      duration: 0.45,
      ease: "power4.out",
      onUpdate: apply,
    });

    /* Expand / collapse size timelines */
    const expandTl = gsap.timeline({ paused: true });
    expandTl.to(proxy, {
      size: 100,
      duration: 0.55,
      ease: "back.out(1.7)",
      onUpdate: apply,
    });

    const collapseTl = gsap.timeline({ paused: true });
    collapseTl.to(proxy, {
      size: 6,
      duration: 0.35,
      ease: "power3.in",
      onUpdate: apply,
    });

    let expanded = false;
    let initialized = false;

    /* First move: show cursor */
    function onFirstMove(e: MouseEvent) {
      if (!initialized) {
        initialized = true;
        proxy.x = e.clientX;
        proxy.y = e.clientY;
        apply();
        gsap.set(cursor, { autoAlpha: 1 });
      }
      window.removeEventListener("mousemove", onFirstMove);
      window.addEventListener("mousemove", onMove);
    }

    function onMove(e: MouseEvent) {
      xTo(e.clientX);
      yTo(e.clientY);
    }

    /* Attach hover listeners to all headings after DOM settles */
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll<HTMLElement>("h1, h2, h3, p, .mask-expand");

      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (!expanded) {
            expanded = true;
            collapseTl.pause();
            expandTl.restart();
          }
        });
        el.addEventListener("mouseleave", () => {
          if (expanded) {
            expanded = false;
            expandTl.pause();
            collapseTl.restart();
          }
        });
      });
    }, 600);

    window.addEventListener("mousemove", onFirstMove);

    return () => {
      window.removeEventListener("mousemove", onFirstMove);
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "50%",
        background: "#DC2626",
        /* difference blend: black→red, red→black */
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 9999,
        visibility: "hidden",
        willChange: "transform, width, height",
        transition: "opacity 0.3s",
      }}
    />
  );
}
