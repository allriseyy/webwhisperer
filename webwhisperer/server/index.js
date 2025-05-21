const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.post("/scrape", async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(url);
    res.json({ html: response.data });
    console.log("success");
  } catch (error) {
    console.log("Error fetching the URL:", error);
    res.status(500).json({ error: "Failed to fetch page." });
  }
});

app.post("/summarize", async (req, res) => {
  const { html } = req.body;
  const limitedHtml = html.slice(1000, 2000);

  try {
    const chatResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a web agent that reads HTML and extracts meaningful summaries and content."
          },
          {
            role: "user",
            content: `Summarize the following HTML content:\n\n${limitedHtml}`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ summary: chatResponse.data.choices[0].message.content });
  } catch (err) {
    console.error("Error with OpenAI API:", err.response);
    res.status(500).json({ error: "OpenAI API request failed." });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
