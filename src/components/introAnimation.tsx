'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const LETTERS = ['Z', 'E', 'N', 'T', 'R', 'O'];

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    // Step 1: Animate logo in
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.7, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        onComplete: () => {
          // Step 2: Animate letters in after a short delay
          setTimeout(() => {
            gsap.fromTo(
              lettersRef.current,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.12,
                duration: 0.7,
                ease: 'power3.out',
                onComplete: () => {
                  // Step 3: Hold, then slide up
                  setTimeout(() => {
                    gsap.to(containerRef.current, {
                      y: '-100%',
                      duration: 1.1,
                      ease: 'power4.inOut',
                      onComplete: () => {
                        setShow(false);
                        onComplete();
                      },
                    });
                  }, 900);
                },
              }
            );
          }, 400);
        },
      }
    );
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{ willChange: 'transform' }}
    >
      <div ref={logoRef} className="mb-8 opacity-0">
        <Image src="/images/Thender-primary.svg" alt="Logo" width={92} height={173} priority />
      </div>
      <h1 className="text-white text-6xl md:text-8xl font-bold tracking-widest flex space-x-2 select-none">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            ref={el => {
              lettersRef.current[i] = el;
            }}
            className="inline-block opacity-0"
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default IntroAnimation; 