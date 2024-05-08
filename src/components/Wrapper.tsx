"use client";
import UseScrollToTop from "@/hooks/useScrollToTop";
import { AnimatePresence } from "framer-motion";
import React from "react";
import DefaultLayout from "./layout/DefaultLayout";

export default function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <DefaultLayout>{children}</DefaultLayout>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}
