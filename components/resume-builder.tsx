// "use client";

// import { useState, useEffect } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import PersonalInfoForm from "@/components/forms/personal-info-form";
// import ExperienceForm from "@/components/forms/experience-form";
// import EducationForm from "@/components/forms/education-form";
// import SkillsForm from "@/components/forms/skills-form";
// import ResumePreview from "@/components/resume-preview";
// import { ResumeData } from "@/lib/types";
// import { useToast } from "@/hooks/use-toast";
// import { useResumeStore } from "@/store/resume-store";
// import { useLayoutStore } from "@/store/layout-store";

// const initialResumeData: ResumeData = {
//   personalInfo: {
//     fullName: "",
//     email: "",
//     phone: "",
//     location: "",
//     summary: "",
//   },
//   experience: [],
//   education: [],
//   skills: [],
// };

// export default function ResumeBuilder() {
//   // const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
//   const { personalInfo, experience, education, skills, hasHydrated } =
//     useResumeStore();
//   const {
//     layout: layoutType,
//     hasHydrate: islayoutHydrated,
//     setLayout: setLayoutType,
//   } = useLayoutStore();
//   const [activeTab, setActiveTab] = useState("personal");
//   const [layout, setLayout] = useState<"modern" | "classic" | "minimal">(
//     "modern"
//   );
//   const { toast } = useToast();

//   // useEffect(() => {
//   //   if (hasHydrated) {
//   //     setResumeData({
//   //       personalInfo,
//   //       experience,
//   //       education,
//   //       skills,
//   //     });
//   //   }
//   // }, [hasHydrated]);

//   // useEffect(() => {
//   //   // localStorage.setItem("resumeData", JSON.stringify(resumeData));

//   //   const savedLayout = localStorage.getItem("resumeLayout");
//   //   if (savedLayout) {
//   //     setLayout(savedLayout as "modern" | "classic" | "minimal");
//   //   }
//   // }, [resumeData]);

//   useEffect(() => {
//     // localStorage.setItem("resumeLayout", layout);
//     setLayoutType(layout)
//   }, [layout]);

//   // const updateResumeData = (section: keyof ResumeData, data: any) => {
//   //   setResumeData((prev) => {
//   //     const updated = {
//   //       ...prev,
//   //       [section]: data,
//   //     };
//   //     toast({
//   //       title: "Changes saved",
//   //       description: `Your ${section} information has been updated.`,
//   //     });
//   //     return updated;
//   //   });
//   // };

//   const handleLayoutChange = (newLayout: string) => {
//     setLayout(newLayout as "modern" | "classic" | "minimal");
//     toast({
//       title: "Layout updated",
//       description: `Resume layout changed to ${newLayout}.`,
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
//         <Tabs value={activeTab} onValueChange={setActiveTab}>
//           <TabsList className="grid grid-cols-4 gap-4 mb-6">
//             <TabsTrigger value="personal">Personal</TabsTrigger>
//             <TabsTrigger value="experience">Experience</TabsTrigger>
//             <TabsTrigger value="education">Education</TabsTrigger>
//             <TabsTrigger value="skills">Skills</TabsTrigger>
//           </TabsList>

//           <TabsContent value="personal">
//             <PersonalInfoForm
//               data={personalInfo}
//               updateData={null}
//             />
//           </TabsContent>

//           <TabsContent value="experience">
//             <ExperienceForm
//               data={experience}
//               updateData={null}
//             />
//           </TabsContent>

//           <TabsContent value="education">
//             <EducationForm
//               data={education}
//               updateData={null}
//             />
//           </TabsContent>

//           <TabsContent value="skills">
//             <SkillsForm
//               data={skills}
//               updateData={null}
//             />
//           </TabsContent>
//         </Tabs>
//       </div>
//       {/* context to share the data */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
//         <ResumePreview
//           data={resumeData}
//           layout={layout}
//           onLayoutChange={handleLayoutChange}
//         />
//       </div>
//     </div>
//   );
// }
