"use client";

import { LayoutGroup } from "framer-motion";

export default function MorphLayoutGroup({ children }: { children: React.ReactNode }) {
  return <LayoutGroup id="name-morph-flow">{children}</LayoutGroup>;
}