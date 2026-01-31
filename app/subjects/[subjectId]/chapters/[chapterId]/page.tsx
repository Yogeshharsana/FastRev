import { getTopics } from "@/lib/firestore";

type Props = {
  params: Promise<{
    subjectId: string;
    chapterId: string;
  }>;
};

export default async function TopicsPage({ params }: Props) {
  const { chapterId } = await params;
  const topics = await getTopics(chapterId);

  return (
    <main
      className="
        min-h-screen px-4 sm:px-6 lg:px-8 py-12
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Topics
          </h1>
          <p className="text-slate-400">
            Select a topic to start focused revision
          </p>
        </div>

        {/* Empty State */}
        {topics.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-10 text-center">
            <p className="text-slate-400">No topics found</p>
          </div>
        )}

        {/* Topics List */}
        <div className="space-y-4">
          {topics.map((t) => (
            <div
              key={t.id}
              className="
                group relative
                rounded-2xl
                border border-slate-800
                bg-slate-900/40
                px-6 py-4
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
                <h3
                  className="
                    text-lg font-semibold
                    text-white
                    transition-colors duration-300
                    group-hover:text-emerald-700
                  "
                >
                  {t.title}
                </h3>

                <p
                  className="
                    mt-1 text-sm
                    text-slate-400
                    transition-colors duration-300
                    group-hover:text-slate-600
                  "
                >
                  {t.duration} min • {t.type}
                </p>
              </div>

              {/* Right indicator */}
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
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}