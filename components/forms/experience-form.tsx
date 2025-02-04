"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Experience } from "@/lib/types";
import { useAIAssistant } from "@/hooks/use-ai-assistant";
import Description from "./description";
import { Trash } from "lucide-react";

interface ExperienceFormProps {
  data: Experience[];
  updateData: (data: Experience[]) => void;
}

export default function ExperienceForm({
  data,
  updateData,
}: ExperienceFormProps) {
  const [experiences, setExperiences] = useState<Experience[]>(data);
  const { optimizeContent, loading } = useAIAssistant();

  const addExperience = () => {
    const newExperience: Experience = {
      id: crypto.randomUUID(),
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: [],
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (id: string) => {
    const result = experiences.filter((exp) => id !== exp.id);
    setExperiences(result);
    updateData(result);
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any
  ) => {
    // if (field === "description") {

    // } else {
    const updated = experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updated);
    updateData(updated);
    // }
  };

  const handleOptimize = async (id: string) => {
    const experience = experiences.find((exp) => exp.id === id);
    if (!experience) return;

    const optimized = await optimizeContent(experience.description.toString());
    if (optimized) {
      updateExperience(id, "description", optimized);
    }
  };

  return (
    <div className="space-y-6">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="space-y-4 p-4 border relative rounded-lg"
        >
          <button
            onClick={() => removeExperience(experience.id)}
            className="absolute -top-4 -right-2 px-2 py-1 rounded-md border bg-red-800 text-white text-xs flex gap-1"
          >
            <Trash size={14} />
            Remove
          </button>
          <Input
            placeholder="Job Title"
            value={experience.title}
            onChange={(e) =>
              updateExperience(experience.id, "title", e.target.value)
            }
          />
          <Input
            placeholder="Company"
            value={experience.company}
            onChange={(e) =>
              updateExperience(experience.id, "company", e.target.value)
            }
          />
          <Input
            placeholder="Location"
            value={experience.location}
            onChange={(e) =>
              updateExperience(experience.id, "location", e.target.value)
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="date"
              value={experience.startDate}
              onChange={(e) =>
                updateExperience(experience.id, "startDate", e.target.value)
              }
            />
            <Input
              type="date"
              value={experience.endDate}
              onChange={(e) =>
                updateExperience(experience.id, "endDate", e.target.value)
              }
              disabled={experience.current}
            />
          </div>
          <div className="relative">
            <Description
              updateExperience={updateExperience}
              id={experience.id}
              description={experience.description}
            />
            {/* <Textarea
              placeholder="Job Description"
              value={experience.description}
              onChange={(e) =>
                updateExperience(experience.id, "description", e.target.value)
              }
              className="min-h-[100px]"
            /> */}
            {/* <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute right-2 bottom-2"
              onClick={() => handleOptimize(experience.id)}
              disabled={loading}
            >
              Optimize with AI
            </Button> */}
          </div>
        </div>
      ))}
      <Button onClick={addExperience} className="w-full">
        Add Experience
      </Button>
    </div>
  );
}
