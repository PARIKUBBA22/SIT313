require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/subscribe", async (req, res) => {
  console.log("Form data received:", req.body);

  const recipient = req.body.email;
  if (!recipient) return res.status(400).send("Email required");

  // Create the form data for Mailgun
  const form = new URLSearchParams();
  form.append("from", `Dev@Deakin <postmaster@${process.env.MAILGUN_DOMAIN}>`);
  form.append("to", recipient);
  form.append("subject", "Welcome to Dev@Deakin!");
  form.append(
    "text",
    "Hi!\n\nThanks for subscribing to Dev@Deakin.\n\n— Dev@Deakin Team"
  );

  try {
    const response = await axios.post(
      `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
      form,
      {
        auth: {
          username: "api",
          password: process.env.MAILGUN_API_KEY,
        },
      }
    );

    console.log("✅ Mailgun API Response:", response.data);
    res.send("Welcome email sent — check your inbox!");
  } catch (error) {
    console.error(
      "❌ Mailgun API Error:",
      error.response?.data || error.message
    );
    res.status(500).send("Failed to send welcome email.");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
