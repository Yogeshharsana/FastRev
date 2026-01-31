import Link from "next/link";
import { getSubjects } from "@/lib/firestore";
import { Subject } from "@/types/firestore";

export default async function SubjectsPage() {
  const subjects: Subject[] = await getSubjects();

  return (
    <main
      className="
        min-h-screen px-4 sm:px-6 lg:px-8 py-12
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2">
            All Subjects
          </h1>
          <p className="text-slate-400">
            Choose a subject to start fast, focused revision
          </p>
        </div>

        {/* Empty State */}
        {subjects.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-10 text-center">
            <p className="text-slate-400">No subjects found</p>
          </div>
        )}

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subjects.map((s) => (
            <Link
              key={s.id}
              href={`/subjects/${s.id}`}
              className="
                group relative block
                rounded-2xl
                border border-slate-800
                bg-slate-900/40
                px-6 py-5
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:bg-white
                hover:border-emerald-400
                hover:shadow-2xl
              "
            >
              {/* Emerald glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  ring-2 ring-emerald-400/30
                "
              />

              {/* Content */}
              <div className="relative z-10">
                <h2
                  className="
                    text-lg font-semibold
                    text-white
                    transition-colors duration-300
                    group-hover:text-emerald-700
                  "
                >
                  {s.name}
                </h2>

                <p
                  className="
                    mt-1 text-sm
                    text-slate-400
                    transition-colors duration-300
                    group-hover:text-slate-600
                  "
                >
                  Tap to view chapters & topics
                </p>
              </div>

              {/* Arrow */}
              <span
                className="
                  absolute right-6 top-1/2 -translate-y-1/2
                  text-slate-400
                  transition-all duration-300
                  group-hover:text-emerald-600
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}