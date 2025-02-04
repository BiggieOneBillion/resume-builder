"use client";

import { ResumeData } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { layouts } from "@/utils/cv-layouts";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ExportBtn from "./export-btn";

interface ResumePreviewProps {
  data: ResumeData;
  layout?: "modern" | "classic" | "minimal";
  onLayoutChange?: (layout: string) => void;
  // ref: React.Ref<HTMLDivElement> | undefined;
}

// const ResumePreview = React.forwardRef<HTMLDivElement, ResumePreviewProps>(
//   ({ data, layout, onLayoutChange }, ref) => {
const ResumePreview = ({
  data,
  layout,
  onLayoutChange,
}: ResumePreviewProps) => {
  const currentStyle = layouts[layout || "modern"];

  const exportRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useReactToPrint({
    contentRef: exportRef,
    documentTitle: "cv resume",
    onAfterPrint: () => alert("PDF has been downloaded successfully!"),
  });

  return (
    <div>
      <div className="mb-4 flex justify-end items-center gap-5">
        <Select
          value={layout}
          onValueChange={(
            value:
              | "modern"
              | "classic"
              | "minimal"
              | "elegant"
              | "creative"
              | "contemporary"
              | "twoColumnModern"
              | "twoColumnProfessional"
          ) => {
            onLayoutChange?.(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose layout" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="modern">Modern</SelectItem>
            <SelectItem value="classic">Classic</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
            <SelectItem value="elegant">Elegant</SelectItem>
            <SelectItem value="creative">Creative</SelectItem>
            <SelectItem value="contemporary">Contemporary</SelectItem>
            <SelectItem value="twoColumnModern">Two Column Modern</SelectItem>
            <SelectItem value="twoColumnProfessional">
              Two Column Professional
            </SelectItem>
          </SelectContent>
        </Select>
        <ExportBtn handleDownloadPDF={handleDownloadPDF} />
      </div>

      <div className={currentStyle.container} ref={exportRef}>
        {/* Header */}
        <div className={currentStyle.header}>
          <div className={currentStyle.headerContent}>
            <h1 className={currentStyle.name}>{data.personalInfo.fullName}</h1>
            <div className={currentStyle.contact}>
              <p>
                {data.personalInfo.email} • {data.personalInfo.phone}
              </p>
              <p>{data.personalInfo.location}</p>
            </div>
            <p className="mt-4 text-sm">{data.personalInfo.summary}</p>
          </div>
        </div>

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className={currentStyle.section}>
            <h2 className={currentStyle.sectionTitle}>
              Professional Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <h3 className={`${currentStyle.itemTitle}`}>{exp.title}</h3>
                <p className={`${currentStyle.itemSubtitle} mb-2`}>
                  {exp.company} • {exp.location}
                </p>
                <p className={currentStyle.itemDate}>
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                <ul className={currentStyle.bulletPointContainer}>
                  {exp.description.map((desc) => (
                    <li key={desc} className={currentStyle.bulletPoint}>
                      {desc}
                    </li>
                  ))}
                </ul>
                {/* <p className={currentStyle.description}>{exp.description}</p> */}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className={currentStyle.section}>
            <h2 className={currentStyle.sectionTitle}>Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className={currentStyle.itemTitle}>{edu.degree}</h3>
                <p className={currentStyle.itemSubtitle}>
                  {edu.school} • {edu.field}
                </p>
                <p className={currentStyle.itemDate}>
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className={currentStyle.description}>{edu.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className={currentStyle.section}>
            <h2 className={currentStyle.sectionTitle}>Skills</h2>
            <div className={currentStyle.skills}>
              {data.skills.map((skill) => (
                <span key={skill.id} className={currentStyle.skill}>
                  {skill.name} • {skill.level}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
