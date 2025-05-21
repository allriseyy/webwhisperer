import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSummary("");

    try {
      const { data: htmlData } = await axios.post("http://172.28.114.14:5000/scrape", { url });
      const { data: summaryData } = await axios.post("http://172.28.114.14:5000/summarize", {
        html: htmlData.html,
      });
      setSummary(summaryData.summary);
    } catch (err) {
      console.error(err);
      setSummary("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">🌐 WebWhisperer</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="url"
            className="border p-2 rounded"
            placeholder="Enter a webpage URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {loading ? "Processing..." : "Summarize Page"}
          </button>
        </form>

        {summary && (
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "black" }}>Summary:</h2>
            <pre className="whitespace-pre-wrap" style={{ color: "black" }}>{summary}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
