export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            About Our Team
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            We help businesses build modern, fast and user-friendly websites
            that look professional and convert visitors into customers.
            Our focus is simple — clean design, clear content and real results.
          </p>

          <p className="mt-4 text-slate-600">
            No confusion, no unnecessary complexity — just a website that works
            for your business.
          </p>

          <button className="mt-8 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow hover:scale-105 transition">
            Learn More About Us
          </button>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl p-10 shadow">
          <p className="text-lg text-slate-700">
            ✔ Trusted by startups & businesses  
            <br />✔ SEO-friendly structure  
            <br />✔ Clear communication  
            <br />✔ Long-term support
          </p>
        </div>

      </div>
    </section>
  );
}
