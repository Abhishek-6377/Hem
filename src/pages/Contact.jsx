export default function Contact() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-slate-900">
          Get In Touch
        </h1>

        <form className="mt-12 bg-white p-10 rounded-3xl shadow space-y-6">
          <input className="w-full border p-4 rounded-xl" placeholder="Your Name" />
          <input className="w-full border p-4 rounded-xl" placeholder="Email Address" />
          <input className="w-full border p-4 rounded-xl" placeholder="Phone Number" />
          <textarea className="w-full border p-4 rounded-xl" placeholder="Tell us about your project"></textarea>

          <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:scale-105 transition">
            Submit Request
          </button>
        </form>

      </div>
    </section>
  );
}
