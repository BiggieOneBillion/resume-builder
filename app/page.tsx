import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 space-y-20 flex flex-col items-center justify-between">
        <section>
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Resume Builder
          </h1>
          <p className="text-sm text-gray-400 text-center underline">
            This is a simple resume builder. <br />
            To Help you build your perfect resume and land that dream job <br />
            You can choose to build yourself or select from our collection of
            templates
          </p>
        </section>
        <section className="grid md:grid-cols-2 gap-10">
          <Link
            href={"/builder"}
            className="h-[200px] w-[300px] bg-gray-200 font-semibold rounded-sm grid place-content-center hover:scale-[.98] transition-transform duration-300 active:scale-95"
          >
            <span>Build By Yourself</span>
          </Link>
          <Link
            href={"/templates"}
            className="h-[200px] bg-white w-[300px] border rounded-sm grid place-content-center hover:scale-[.98] transition-transform duration-300 active:scale-95"
          >
            <span>Choose From Our Template</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
