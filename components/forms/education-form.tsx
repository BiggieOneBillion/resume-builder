'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Education } from '@/lib/types';

interface EducationFormProps {
  data: Education[];
  updateData: (data: Education[]) => void;
}

export default function EducationForm({ data, updateData }: EducationFormProps) {
  const [education, setEducation] = useState<Education[]>(data);

  const addEducation = () => {
    const newEducation: Education = {
      id: crypto.randomUUID(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setEducation([...education, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    const updated = education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setEducation(updated);
    updateData(updated);
  };

  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div key={edu.id} className="space-y-4 p-4 border rounded-lg">
          <Input
            placeholder="School/University"
            value={edu.school}
            onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
          />
          <Input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
          />
          <Input
            placeholder="Field of Study"
            value={edu.field}
            onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="date"
              value={edu.startDate}
              onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
            />
            <Input
              type="date"
              value={edu.endDate}
              onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Description"
            value={edu.description}
            onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      ))}
      <Button onClick={addEducation} className="w-full">
        Add Education
      </Button>
    </div>
  );
}