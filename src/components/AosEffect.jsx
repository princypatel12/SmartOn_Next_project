// this component is used to initialize AOS (Animate On Scroll) library for all the page where this animation is needed.
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosEffect() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return null;
}
