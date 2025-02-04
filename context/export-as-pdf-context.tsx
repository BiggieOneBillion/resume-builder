import { createContext, useRef } from "react";
import { useReactToPrint, UseReactToPrintFn } from "react-to-print";

type exportContext = {
  exportRef: React.Ref<HTMLDivElement>;
  handleDownloadPDF: UseReactToPrintFn;
};

export const ExportPdfContext = createContext<exportContext | undefined>(
  undefined
);

export const ExportPdfProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const exportRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useReactToPrint({
    contentRef: exportRef,
    documentTitle: "cv resume",
    onAfterPrint: () => alert("PDF has been downloaded successfully!"),
  });
  return (
    <ExportPdfContext.Provider value={{ exportRef, handleDownloadPDF }}>
      {children}
    </ExportPdfContext.Provider>
  );
};
