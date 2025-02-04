"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Experience } from "@/lib/types";

const formSchema = z.object({
  desc1: z.string().min(30),
  desc2: z.string().min(30),
  desc3: z.string().min(30),
  desc4: z.string().min(30),
});

type DescriptionProp = {
  updateExperience: (id: string, field: keyof Experience, value: any) => void;
  id: string;
  description: string[];
};

export default function Description({
  updateExperience,
  id,
  description,
}: DescriptionProp) {
  // console.log("EXPERIENCE DESCRIPTION-----", description);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desc1: description[0],
      desc2: description[1],
      desc3: description[2],
      desc4: description[3],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = Object.values(values);
      updateExperience(id, "description", result);
    } catch (error) {
      console.error("Form submission error", error);
      //   toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <section className="space-y-1">
      <header className="space-y-1">
        <h3 className="text-sm font-semibold text-black">Description</h3>
        <p className="text-xs text-gray-600 p-2 bg-slate-100 rounded-md">
          It is recommended that the amount of bullet points under a particular
          work experience on a CV is typically 4 points per job
        </p>
      </header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-3xl mx-auto "
        >
          <FormField
            control={form.control}
            name="desc1"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input placeholder="bullet point 1" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desc2"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input placeholder="bullet point 2" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desc3"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input placeholder="bullet point 3" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desc4"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input placeholder="bullet point 4" type="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" className="text-sm" variant={"outline"}>
              Add Description
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
