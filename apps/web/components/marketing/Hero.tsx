export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        🇵🇭 Built for Filipino Teachers
      </span>

      <h1 className="mt-6 text-6xl font-bold tracking-tight text-slate-900 md:text-7xl">
        GuroFlow
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Curriculum-aligned instructional materials with DLLs,
        worksheets, quizzes, rubrics, lesson packs,
        and editable teaching resources.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Start Free
        </button>

        <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
          Browse Library
        </button>
      </div>
    </section>
  );
}