import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export const useResumeStore = create<
  ResumeData & {
    updatePersonalInfo: (updatedInfo: Partial<PersonalInfo>) => void;
    addExperience: (newExperience: Experience) => void;
    updateExperience: (
      id: string,
      updatedExperience: Partial<Experience>
    ) => void;
    deleteExperience: (id: string) => void;
    addEducation: (newEducation: Education) => void;
    updateEducation: (id: string, updatedEducation: Partial<Education>) => void;
    deleteEducation: (id: string) => void;
    addSkill: (newSkill: Skill) => void;
    updateSkill: (id: string, updatedSkill: Partial<Skill>) => void;
    deleteSkill: (id: string) => void;
    hasHydrated: boolean;
    setHydrated: (hydrated: boolean) => void;
  }
>()(
  persist(
    (set) => ({
      // Initial State
      personalInfo: {
        fullName: "CHINWENDU CHUKWU",
        email: "rchukwu94@gmail.com",
        phone: "0904567821",
        location: "Port Harcourt",
        summary: "An iOS developer with 3+ years of experience...",
      },
      experience: [],
      education: [],
      skills: [],
      hasHydrated: false,

      // Actions
      updatePersonalInfo: (updatedInfo) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...updatedInfo },
        })),

      addExperience: (newExperience) =>
        set((state) => ({
          experience: [...state.experience, newExperience],
        })),

      updateExperience: (id, updatedExperience) =>
        set((state) => ({
          experience: state.experience.map((exp) =>
            exp.id === id ? { ...exp, ...updatedExperience } : exp
          ),
        })),

      deleteExperience: (id) =>
        set((state) => ({
          experience: state.experience.filter((exp) => exp.id !== id),
        })),

      addEducation: (newEducation) =>
        set((state) => ({
          education: [...state.education, newEducation],
        })),

      updateEducation: (id, updatedEducation) =>
        set((state) => ({
          education: state.education.map((edu) =>
            edu.id === id ? { ...edu, ...updatedEducation } : edu
          ),
        })),

      deleteEducation: (id) =>
        set((state) => ({
          education: state.education.filter((edu) => edu.id !== id),
        })),

      addSkill: (newSkill) =>
        set((state) => ({
          skills: [...state.skills, newSkill],
        })),

      updateSkill: (id, updatedSkill) =>
        set((state) => ({
          skills: state.skills.map((skill) =>
            skill.id === id ? { ...skill, ...updatedSkill } : skill
          ),
        })),

      deleteSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((skill) => skill.id !== id),
        })),
      setHydrated: (hydrated) => set({ hasHydrated: hydrated }),
    }),
    {
      name: "cv-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
