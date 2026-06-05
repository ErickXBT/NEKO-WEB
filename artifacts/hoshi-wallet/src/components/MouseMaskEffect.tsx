import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseMaskEffect() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const proxy = { x: 0, y: 0, size: 0 };

    function applyMask() {
      const mask = `radial-gradient(circle at ${proxy.x}px ${proxy.y}px, black ${proxy.size}px, transparent 0px)`;
      overlay!.style.webkitMaskImage = mask;
      (overlay!.style as any).maskImage = mask;
    }

    const xTo = gsap.quickTo(proxy, "x", {
      duration: 0.45,
      ease: "power4.out",
      onUpdate: applyMask,
    });

    const yTo = gsap.quickTo(proxy, "y", {
      duration: 0.45,
      ease: "power4.out",
      onUpdate: applyMask,
    });

    /* Expand on heading hover */
    const expandTl = gsap.timeline({ paused: true });
    expandTl.to(proxy, {
      size: 260,
      duration: 0.75,
      ease: "back.out(1.7)",
      onUpdate: applyMask,
    });

    /* Small "cursor dot" timeline — always active while mouse is on page */
    const dotTl = gsap.timeline({ paused: true });
    dotTl.to(proxy, {
      size: 18,
      duration: 0.4,
      ease: "power3.out",
      onUpdate: applyMask,
    });

    let expanded = false;

    function onFirstMove(e: MouseEvent) {
      window.removeEventListener("mousemove", onFirstMove);

      proxy.x = e.clientX;
      proxy.y = e.clientY;
      applyMask();

      gsap.set(overlay, { autoAlpha: 1 });
      dotTl.restart();

      window.addEventListener("mousemove", onMove);
    }

    function onMove(e: MouseEvent) {
      xTo(e.clientX);
      yTo(e.clientY);
    }

    /* Add hover listeners to headings and cards — after short delay so DOM is ready */
    const setupTimer = setTimeout(() => {
      const targets = document.querySelectorAll("h1, h2, h3, .mask-expand");

      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (!expanded) {
            expanded = true;
            dotTl.pause();
            expandTl.restart();
          }
        });
        el.addEventListener("mouseleave", () => {
          if (expanded) {
            expanded = false;
            expandTl.reverse().then(() => {
              dotTl.restart();
            });
          }
        });
      });
    }, 800);

    window.addEventListener("mousemove", onFirstMove);

    return () => {
      window.removeEventListener("mousemove", onFirstMove);
      window.removeEventListener("mousemove", onMove);
      clearTimeout(setupTimer);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        visibility: "hidden",
        background:
          "linear-gradient(135deg, #1a0000 0%, #0d0d0d 60%, #1a0505 100%)",
        willChange: "mask-image, -webkit-mask-image",
      }}
    />
  );
}
