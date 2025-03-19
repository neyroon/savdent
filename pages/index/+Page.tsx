import React from "react";
import "./tailwind.css";
import "./style.css";
import { Header } from "../../components/header";
import { Section } from "../../components/section/section";
import { MainBlock } from "../../components/main-block/main-block";
import { ServicesBlock } from "../../components/services-block/services-block";
import { WorkersBlock } from "../../components/workers-block/workers-block";
import { VideoReview } from "../../components/video-review/video-review";
import { FormBlock } from "../../components/form-block/form-block";
import { Footer } from "../../components/footer/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <MainBlock />
        <ServicesBlock />
        <WorkersBlock />
        <VideoReview />
        <FormBlock />
      </main>
      <Footer />
    </>
  );
}
