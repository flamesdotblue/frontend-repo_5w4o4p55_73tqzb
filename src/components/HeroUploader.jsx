import { useState, useRef } from "react";
import { Upload, Languages, FileSpreadsheet, FileType2, ShieldCheck, Sparkles } from "lucide-react";

const languageOptions = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" },
  { code: "gu", name: "Gujarati" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "pa", name: "Punjabi" },
  { code: "ur", name: "Urdu" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese (Simplified)" },
  { code: "ja", name: "Japanese" },
];

export default function HeroUploader() {
  const [file, setFile] = useState(null);
  const [targetLang, setTargetLang] = useState("hi");
  const [action, setAction] = useState("translate");
  const [format, setFormat] = useState("docx");
  const [pages, setPages] = useState(0);
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type === "application/pdf") {
      setFile(f);
      estimatePages(f);
    } else {
      setMessage("Please drop a valid PDF file.");
    }
  };

  const estimatePages = async (f) => {
    // Lightweight guess by size; exact count will happen on the server in production
    const approx = Math.ceil((f.size || 0) / (120 * 1024));
    setPages(approx || 1);
  };

  const handleSelect = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.type !== "application/pdf") {
      setMessage("Only PDF files are supported.");
      return;
    }
    setFile(f);
    estimatePages(f);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a PDF first.");
      return;
    }
    // This UI is wired and ready. Connect to your backend endpoint later.
    // Free tier limits enforced in the backend; here we only inform the user.
    const limit = action === "translate" ? 15 : 10;
    if (pages > limit) {
      setMessage(
        `This file looks like it has more than ${limit} pages. Please subscribe to process larger documents.`
      );
      return;
    }
    setMessage(
      action === "translate"
        ? `Ready to translate to ${languageOptions.find((l) => l.code === targetLang)?.name}.`
        : `Ready to convert to ${format.toUpperCase()}.`
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs mb-4">
            <Sparkles size={14} />
            <span>Free for up to 15 pages • Privacy-first</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Translate and convert PDFs in seconds
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Upload a PDF, choose a language or format, and get a polished result. Free plan supports up to 15 pages for translation and 10 pages for conversion.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-3 gap-4">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="md:col-span-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 flex flex-col items-center justify-center text-center hover:border-violet-400 transition"
          >
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleSelect}
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              <Upload size={18} />
              <span>Select PDF</span>
            </button>
            <p className="mt-2 text-slate-600 text-sm">or drag & drop here</p>
            {file && (
              <div className="mt-4 text-sm text-slate-700">
                Selected: <span className="font-medium">{file.name}</span>
                {pages ? <span className="text-slate-500"> • ~{pages} pages</span> : null}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAction("translate")}
                className={`flex-1 px-3 py-2 rounded-lg border text-sm ${
                  action === "translate"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 justify-center">
                  <Languages size={16} /> Translate
                </div>
              </button>
              <button
                type="button"
                onClick={() => setAction("convert")}
                className={`flex-1 px-3 py-2 rounded-lg border text-sm ${
                  action === "convert"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 justify-center">
                  <FileSpreadsheet size={16} /> Convert
                </div>
              </button>
            </div>

            {action === "translate" ? (
              <div>
                <label className="text-xs text-slate-500">Target language</label>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                >
                  {languageOptions.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.name}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-slate-500">
                  Supports Indian languages like Hindi, Bengali, Tamil, Telugu, and more.
                </p>
              </div>
            ) : (
              <div>
                <label className="text-xs text-slate-500">Convert to</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  {[
                    { key: "docx", label: "Word (.docx)", icon: FileType2 },
                    { key: "pptx", label: "PowerPoint (.pptx)", icon: FileType2 },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.key}
                      onClick={() => setFormat(opt.key)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-left text-sm ${
                        format === opt.key
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <opt.icon size={16} /> {opt.label}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Free plan converts up to 10 pages. Premium unlocks larger files.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-medium shadow hover:opacity-95"
            >
              {action === "translate" ? "Translate PDF" : `Convert to ${format.toUpperCase()}`}
            </button>

            <div id="privacy" className="flex items-start gap-2 text-xs text-slate-600">
              <ShieldCheck size={16} className="mt-0.5 text-emerald-600" />
              <p>Files are processed securely and automatically deleted after conversion.</p>
            </div>

            {message && (
              <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-3">
                {message}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
