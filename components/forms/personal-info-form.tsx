'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PersonalInfo } from '@/lib/types';
import { useAIAssistant } from '@/hooks/use-ai-assistant';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  summary: z.string().min(100, 'Summary should be at least 100 characters'),
});

interface PersonalInfoFormProps {
  data: PersonalInfo;
  updateData: (data: PersonalInfo) => void;
}

export default function PersonalInfoForm({ data, updateData }: PersonalInfoFormProps) {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: data,
  });

  const { improveSummary, loading } = useAIAssistant();

  const onSubmit = (formData: PersonalInfo) => {
    updateData(formData);
  };

  const handleImproveSummary = async () => {
    const currentSummary = form.getValues('summary');
    const improvedSummary = await improveSummary(currentSummary);
    if (improvedSummary) {
      form.setValue('summary', improvedSummary);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="john@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} placeholder="+1 (555) 000-0000" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} placeholder="City, State" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Summary</FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    {...field}
                    placeholder="Write a brief professional summary..."
                    className="min-h-[150px]"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="absolute right-2 bottom-2"
                    onClick={handleImproveSummary}
                    disabled={loading}
                  >
                    Improve with AI
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Save Personal Information
        </Button>
      </form>
    </Form>
  );
}