"use client";
import React, { ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";

const DownLoadCvPDF = ({ children }: { children: ReactNode }) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "cv resume",
    // onAfterPrint: () => alert("PDF has been downloaded successfully!"),
  });

  return (
    <div className="flex flex-col items-center space-y-6 py-10 overflow-x-scroll w-full px-3">
      {/* Button to Download */}
      <div className="flex justify-end w-full">
        <Button variant={"outline"} onClick={() => handleDownloadPDF()}>
          Download CV as PDF
        </Button>
      </div>
      <div ref={cvRef} className="overflow-x-scroll w-full">{children}</div>
    </div>
  );
};

export default DownLoadCvPDF;
