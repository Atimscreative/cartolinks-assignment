"use client";
import Header from "./Header";
import Sliders from "./Sliders";
import Generate from "./Generate";

export default function LandingPage() {
  return (
    <section className="overflow-x-hidden">
      <Header />
      <Sliders />

      <Generate />
    </section>
  );
}
