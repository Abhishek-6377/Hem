export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Why We Are Different
          </h2>
          <p className="mt-4 text-slate-600">
            Simple comparison to help you make the right decision.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4">Us</th>
                <th className="p-4">Others</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["Custom Design", "✔", "✖"],
                ["SEO-Friendly Structure", "✔", "✖"],
                ["Clear CTAs", "✔", "✖"],
                ["Fast Performance", "✔", "✖"],
                ["Post-Launch Support", "✔", "Limited"],
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 text-slate-700">{row[0]}</td>
                  <td className="p-4 text-center text-green-600 font-bold">{row[1]}</td>
                  <td className="p-4 text-center text-slate-500">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
