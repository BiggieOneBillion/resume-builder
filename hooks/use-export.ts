import { ExportPdfContext } from "@/context/export-as-pdf-context";
import { useContext } from "react";

export default function useExport() {
  return useContext(ExportPdfContext);
}
