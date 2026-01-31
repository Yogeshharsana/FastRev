import { getChapters } from "@/lib/firestore";
import Link from "next/link";

type Props = {
  params: Promise<{ subjectId: string }>;
};

export default async function ChaptersPage({ params }: Props) {
  const { subjectId } = await params;
  const chapters = await getChapters(subjectId);

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Chapters
          </h1>
          <p className="text-muted-foreground">
            Choose a chapter to start fast, focused revision
          </p>
        </div>

        {/* Empty state */}
        {chapters.length === 0 && (
          <p className="text-muted-foreground text-sm">
            No chapters found.
          </p>
        )}

        {/* Chapter Cards */}
        <div className="space-y-4">
          {chapters.map((c) => (
            <Link
              key={c.id}
              href={`/subjects/${subjectId}/chapters/${c.id}`}
              className="
                group relative block
                p-5 rounded-2xl
                bg-background
                border border-border
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-emerald-400
                hover:shadow-xl
              "
            >
              {/* Soft teal glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  ring-1 ring-emerald-400/30
                "
              />

              <div className="flex items-center justify-between">
                {/* Left */}
                <div>
                  <h3
                    className="
                      text-base md:text-lg font-semibold
                      transition-colors duration-300
                      group-hover:text-emerald-600
                    "
                  >
                    {c.name}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-1">
                    Tap to start revision
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="
                    text-sm font-medium
                    text-muted-foreground
                    transition-all duration-300
                    group-hover:text-emerald-600
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}