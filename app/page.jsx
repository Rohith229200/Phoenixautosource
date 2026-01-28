import React, { useState } from 'react'; import { motion } from 'framer-motion';

export default function PhoenixAutoSource() { const [formData, setFormData] = useState({ name: '', email: '', vehicle: '', part: '' }); const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const handleSubmit = async (e) => { e.preventDefault();

await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

setSubmitted(true);
setFormData({ name: '', email: '', vehicle: '', part: '' });

};

return ( <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">

{/* HEADER */}
  <header className="flex justify-between items-center px-6 py-4 bg-slate-950 shadow-lg">
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="PhoenixAutoSource" className="h-10" />
      <span className="text-xl font-bold text-orange-500">PhoenixAutoSource</span>
    </div>
    <nav className="space-x-6 text-sm">
      <a href="#services" className="hover:text-orange-400">Services</a>
      <a href="#how" className="hover:text-orange-400">How It Works</a>
      <a href="#quote" className="hover:text-orange-400">Get a Quote</a>
    </nav>
  </header>

  {/* HERO */}
  <section className="text-center py-24 bg-gradient-to-br from-slate-950 to-slate-800">
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-extrabold mb-4">
      Reliable OEM & Used Auto Parts – USA
    </motion.h1>
    <p className="max-w-2xl mx-auto text-slate-300 mb-8">
      We source quality OEM and used auto parts directly from verified US junkyards and suppliers. Fast quotes. Fair pricing. Nationwide shipping.
    </p>
    <a href="#quote" className="inline-block bg-orange-500 text-slate-950 font-bold px-8 py-3 rounded-xl hover:bg-orange-400">
      Request a Quote
    </a>
  </section>

  {/* TRUST BADGES */}
  <section className="py-8 bg-slate-950 text-center text-sm text-slate-300">
    <div className="flex flex-wrap justify-center gap-6">
      <span>✔ Verified US Junkyards</span>
      <span>✔ Quality-Checked Parts</span>
      <span>✔ Nationwide Shipping</span>
      <span>✔ Fast Response</span>
    </div>
  </section>

  {/* SERVICES */}
  <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">What We Offer</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: 'OEM Used Parts', desc: 'Engines, transmissions, body parts, electronics, and more.' },
        { title: 'Nationwide Shipping', desc: 'Secure and fast delivery anywhere in the United States.' },
        { title: 'B2C & B2B Support', desc: 'Serving individuals, repair shops, and auto dealers.' }
      ].map((s, i) => (
        <div key={i} className="bg-slate-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">{s.title}</h3>
          <p className="text-slate-300">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* HOW IT WORKS */}
  <section id="how" className="py-20 bg-slate-950 px-6">
    <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { step: '1. Send Your Requirement', desc: 'Share vehicle details and part needed.' },
        { step: '2. We Source the Part', desc: 'We check multiple yards for the best match.' },
        { step: '3. Approve & Delivery', desc: 'You approve the quote, we ship directly.' }
      ].map((h, i) => (
        <div key={i} className="bg-slate-800 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">{h.step}</h3>
          <p className="text-slate-300">{h.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* QUOTE FORM */}
  <section id="quote" className="py-20 px-6 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Request a Quote</h2>
    {!submitted ? (
      <form onSubmit={handleSubmit} className="space-y-5">
        <input name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded bg-slate-800 border border-slate-700" />
        <input name="email" required type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-3 rounded bg-slate-800 border border-slate-700" />
        <input name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="Vehicle (Year / Make / Model)" className="w-full p-3 rounded bg-slate-800 border border-slate-700" />
        <textarea name="part" rows="4" value={formData.part} onChange={handleChange} placeholder="Part Required" className="w-full p-3 rounded bg-slate-800 border border-slate-700"></textarea>
        <button type="submit" className="w-full bg-orange-500 text-slate-950 font-bold py-3 rounded-xl hover:bg-orange-400">
          Submit Quote
        </button>
      </form>
    ) : (
      <div className="text-center text-green-400">
        <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
        <p>We received your request and will contact you shortly.</p>
      </div>
    )}
  </section>

  {/* FOOTER */}
  <footer className="bg-slate-950 py-8 text-center text-sm text-slate-400">
    <p>© 2026 PhoenixAutoSource | OEM & Used Auto Parts USA</p>
    <p>Email: sales@phoenixautosource.com</p>
  </footer>
</div>

); }
