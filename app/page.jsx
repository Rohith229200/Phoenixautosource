"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#0f172a", color: "#fff" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Phoenix Auto Source
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 20px" }}>
          OEM & quality-tested used auto parts supplied directly from our inventory.
          Fast quotes. Reliable fulfillment. Nationwide US delivery.
        </p>
        <a href="#quote" style={{ padding: "12px 24px", background: "#f97316", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>
          Request a Quote
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "50px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2>How It Works</h2>
        <ol>
          <li>Submit your auto part requirement</li>
          <li>Our team checks availability from our inventory</li>
          <li>We confirm pricing and delivery details</li>
          <li>Your part is dispatched quickly and securely</li>
        </ol>
      </section>

      {/* WHY US */}
      <section style={{ padding: "50px 20px", background: "#f8fafc" }}>
        <h2>Why Phoenix Auto Source</h2>
        <ul>
          <li>OEM & quality-tested used auto parts</li>
          <li>Competitive pricing</li>
          <li>Fast response time</li>
          <li>Trusted US fulfillment process</li>
        </ul>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" style={{ padding: "60px 20px", maxWidth: "600px", margin: "auto" }}>
        <h2>Request a Part Quote</h2>

        {submitted ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Thank you. Your request has been received. Our team will contact you shortly.
          </p>
        ) : (
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
            <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
            <input type="text" name="vehicle" placeholder="Vehicle (Year / Make / Model)" required style={inputStyle} />
            <input type="text" name="part" placeholder="Part Required" required style={inputStyle} />
            <textarea name="message" placeholder="Additional details (VIN optional)" style={inputStyle} />

            <button type="submit" style={buttonStyle}>
              Submit Request
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", background: "#0f172a", color: "#fff" }}>
        © {new Date().getFullYear()} Phoenix Auto Source. All rights reserved.
      </footer>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#f97316",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};