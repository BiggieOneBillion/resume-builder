"use client";
import ResumeBuilder from "@/components/resume-builder-main";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BuilderPage = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 space-y-20 flex flex-col items-center justify-between">
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <button onClick={() => router.back()} className="border rounded-sm">
              <ChevronLeft />
            </button>
            <h2 className="text-xl font-semibold">Resume Builder</h2>
          </div>

          <ResumeBuilder />
        </section>
      </div>
    </main>
  );
};
export default BuilderPage;
