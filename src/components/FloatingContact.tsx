"use client";

import { useEffect, useState } from "react";
import { SiGmail } from "react-icons/si";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="mailto:juliocesar45941285@gmail.com"
      className={`floating-contact${visible ? " floating-contact--visible" : ""}`}
    >
      <SiGmail size={16} />
      Hablemos
    </a>
  );
}
