'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skill } from '@/lib/types';
import { useAIAssistant } from '@/hooks/use-ai-assistant';

interface SkillsFormProps {
  data: Skill[];
  updateData: (data: Skill[]) => void;
}

export default function SkillsForm({ data, updateData }: SkillsFormProps) {
  const [skills, setSkills] = useState<Skill[]>(data);
  const { suggestSkills, loading } = useAIAssistant();

  const addSkill = () => {
    const newSkill: Skill = {
      id: crypto.randomUUID(),
      name: '',
      level: 'Beginner',
    };
    setSkills([...skills, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    const updated = skills.map((skill) =>
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    setSkills(updated);
    updateData(updated);
  };

  const removeSkill = (id: string) => {
    const updated = skills.filter((skill) => skill.id !== id);
    setSkills(updated);
    updateData(updated);
  };

  return (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.id} className="flex gap-4 items-center">
          <Input
            placeholder="Skill name"
            value={skill.name}
            onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
            className="flex-1"
          />
          <Select
            value={skill.level}
            onValueChange={(value) => updateSkill(skill.id, 'level', value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeSkill(skill.id)}
          >
            ×
          </Button>
        </div>
      ))}
      <Button onClick={addSkill} className="w-full">
        Add Skill
      </Button>
    </div>
  );
}