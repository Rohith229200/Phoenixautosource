"use client";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>

      {/* HERO */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#0f172a",
          color: "#ffffff"
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Phoenix Auto Source
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 20px" }}>
          OEM & quality-tested used auto parts supplied directly from our inventory.
          <br />
          Fast quotes. Reliable fulfillment. Nationwide US delivery.
        </p>

        <a
          href="#quote"
          style={{
            padding: "12px 24px",
            background: "#f97316",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "16px"
          }}
        >
          Request a Quote
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}>
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
      <section
        id="quote"
        style={{
          padding: "60px 20px",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Request a Quote
        </h2>

        <form
          action="https://formspree.io/f/mqebajrl"
          method="POST"
          style={{ display: "grid", gap: "12px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="vehicle"
            placeholder="Vehicle (Year / Make / Model)"
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="part"
            placeholder="Part Required"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Additional details"
            rows="4"
            style={inputStyle}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#f97316",
              color: "#ffffff",
              border: "none",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Request Quote
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#0f172a",
          color: "#ffffff"
        }}
      >
        © {new Date().getFullYear()} Phoenix Auto Source. All rights reserved.
      </footer>

    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc"
};