"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfoForm from "@/components/forms/personal-info-form";
import ExperienceForm from "@/components/forms/experience-form";
import EducationForm from "@/components/forms/education-form";
import SkillsForm from "@/components/forms/skills-form";
import ResumePreview from "@/components/resume-preview";
import { ResumeData } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
};

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("resumeData");
      return saved ? JSON.parse(saved) : initialResumeData;
    }
    return initialResumeData;
  });
  const [activeTab, setActiveTab] = useState("personal");
  const [layout, setLayout] = useState<"modern" | "classic" | "minimal">(
    "modern"
  );
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    const savedLayout = localStorage.getItem("resumeLayout");
    if (savedLayout) {
      setLayout(savedLayout as "modern" | "classic" | "minimal");
    }
  }, [resumeData]);

  useEffect(() => {
    localStorage.setItem("resumeLayout", layout);
  }, [layout]);

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData((prev) => {
      const updated = {
        ...prev,
        [section]: data,
      };
      toast({
        title: "Changes saved",
        description: `Your ${section} information has been updated.`,
      });
      return updated;
    });
  };

  const handleLayoutChange = (newLayout: string) => {
    setLayout(newLayout as "modern" | "classic" | "minimal");
    toast({
      title: "Layout updated",
      description: `Resume layout changed to ${newLayout}.`,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 gap-4 mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <PersonalInfoForm
              data={resumeData.personalInfo}
              updateData={(data) => updateResumeData("personalInfo", data)}
            />
          </TabsContent>

          <TabsContent value="experience">
            <ExperienceForm
              data={resumeData.experience}
              updateData={(data) => updateResumeData("experience", data)}
            />
          </TabsContent>

          <TabsContent value="education">
            <EducationForm
              data={resumeData.education}
              updateData={(data) => updateResumeData("education", data)}
            />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsForm
              data={resumeData.skills}
              updateData={(data) => updateResumeData("skills", data)}
            />
          </TabsContent>
        </Tabs>
      </div>
      {/* context to share the data */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <ResumePreview
          data={resumeData}
          layout={layout}
          onLayoutChange={handleLayoutChange}
        />
      </div>
    </div>
  );
}
