import { Globe2, Sparkles, Shield, Zap, FileBox, BadgeCheck, ImagePlus } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Globe2,
      title: "Any language",
      desc: "Translate into 100+ languages including Hindi, Bengali, Tamil, Telugu, Marathi, and more.",
    },
    {
      icon: Shield,
      title: "Privacy-first",
      desc: "Temporary processing with automatic deletion after completion.",
    },
    {
      icon: Zap,
      title: "Fast & reliable",
      desc: "Optimized pipeline for quick processing on free hosting platforms.",
    },
    {
      icon: FileBox,
      title: "PDF to Word / PPT",
      desc: "Free conversion up to 10 pages. Premium unlocks larger files.",
    },
    {
      icon: ImagePlus,
      title: "Editing & OCR (Premium)",
      desc: "Unlock OCR, content editing, and image insertion with Premium.",
    },
    {
      icon: BadgeCheck,
      title: "Student-friendly",
      desc: "Clear pricing and fair limits designed for students.",
    },
  ];

  return (
    <section id="features" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">
            <Sparkles size={14} /> Key features
          </div>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Everything you need to work with PDFs
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            A streamlined experience that feels premium without the price tag.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white flex items-center justify-center">
                <it.icon size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{it.title}</h3>
              <p className="text-sm text-slate-600 mt-1.5">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
