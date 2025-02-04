"use client";
import { useState } from "react";
import DownLoadCvPDF from "./component/download-cv-pdf";
import Beam from "./component/cv-templates/beam-template-cv";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ModernTemplateCV from "./component/cv-templates/modern-template-cv";
import StandOut from "./component/cv-templates/stand-out-template-cv";

const templateName = ["modern", "standout", "beam"];

export default function TemplatePage() {
  const [selectedTemplate, setSelectedTemplate] = useState(templateName[0]);
  const router = useRouter();
  return (
    <section className="py-5 md:py-10 space-y-10 w-full flex flex-col items-center relative max-w-5xl mx-auto">
      <button
        onClick={() => router.back()}
        className="border rounded-sm absolute top-5 lg:top-20 left-5 lg:left-20 bg-black text-white"
      >
        <ChevronLeft />
      </button>
      <section className="space-y-3">
        <h1 className="text-xl font-semibold text-center">Templates</h1>
        <p className="text-gray-500 text-sm underline text-center">
          Choose and edit and download using any of our templates
        </p>
        {/* cv to select from */}
        <section className="flex items-center justify-center gap-3">
          {templateName.map((el) => (
            <button
              onClick={() => setSelectedTemplate(el)}
              key={el}
              className={` ${
                selectedTemplate === el
                  ? "text-white bg-black"
                  : "text-black border bg-transparent"
              } px-2 py-1 rounded-lg text-sm active:scale-95 hover:scale-[.98] transition-transform duration-200`}
            >
              {el}
            </button>
          ))}
        </section>
      </section>
      <article className="w-full lg:w-fit overflow-x-scroll ">
        {selectedTemplate === templateName[0] && (
          <DownLoadCvPDF children={<ModernTemplateCV />} />
        )}
        {selectedTemplate === templateName[1] && (
          <DownLoadCvPDF children={<StandOut />} />
        )}
        {selectedTemplate === templateName[2] && (
          <DownLoadCvPDF children={<Beam />} />
        )}
      </article>
    </section>
  );
}
