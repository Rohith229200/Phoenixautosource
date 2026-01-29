export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Phoenix Auto Source</h1>

      <p>Deployment test successful</p>

      <section style={{ marginTop: "30px" }}>
        <h2>Request a Quote</h2>

        <form>
          <input
            type="text"
            placeholder="Your Name"
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <textarea
            placeholder="Enter part details"
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <button type="submit" style={{ padding: "10px 20px" }}>
            Request Quote
          </button>
        </form>
      </section>
    </main>
  );
