import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { UseReactToPrintFn } from "react-to-print";

const ExportBtn = ({
  handleDownloadPDF,
}: {
  handleDownloadPDF: UseReactToPrintFn;
}) => {
  return (
    <Button
      onClick={() => handleDownloadPDF()}
      className="flex items-center gap-2"
    >
      <Download className="w-4 h-4" />
      Export PDF
    </Button>
  );
};
export default ExportBtn;
