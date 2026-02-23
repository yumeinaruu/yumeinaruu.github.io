"use client";

import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

export function useSectionReveal(once = true, margin: UseInViewOptions["margin"] = "-100px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  return { ref, isInView };
}
