"use client";

import * as React from "react";
import ScrollIndicator from "@/components/scroll-indicator/ScrollIndicator";
export default function PortfolioLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section >
       <ScrollIndicator/>
        {children}
      </section>
    )
  }