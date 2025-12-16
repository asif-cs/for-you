<h1>💖 Valentine’s Day Proposal Web App</h1>

<p>
A charming, interactive single-page web application designed to ask that special someone to be your Valentine —
complete with personalised messaging and real-time Discord notifications.
</p>

<hr />

<h2>🌟 About This Project</h2>

<p>
This project delivers a unique and engaging Valentine’s Day proposal through a lightweight yet playful web experience.
It combines a gamified front-end with a secure, serverless back-end for real-time event tracking.
</p>

<p>
At its heart is a playful <strong>acceptance trap</strong>:
the <em>“No”</em> button constantly repositions itself while the <em>“Yes”</em> button grows larger with every interaction,
making refusal delightfully impossible.
</p>

<p>
Every meaningful action — from opening the link to final acceptance — is instantly logged to a private Discord channel
using a secure serverless API.
</p>

<hr />

<h2>✨ Key Capabilities</h2>

<ul>
  <li>
    <strong>Interactive Proposal Flow</strong>  
    <br />
    A structured, multi-step journey from name entry to the final celebratory screen.
  </li>

  <li>
    <strong>Personalised Messaging</strong>  
    <br />
    The recipient’s name is dynamically injected into the proposal text.
  </li>

  <li>
    <strong>Gamified Acceptance (The Trap)</strong>  
    <br />
    The “No” button jumps randomly while the “Yes” button increases in scale after each attempt.
  </li>

  <li>
    <strong>Celebration Sequence</strong>  
    <br />
    A multi-stage GIF animation plays on acceptance, ending with a heart-warming final scene.
  </li>

  <li>
    <strong>Real-Time Tracking</strong>  
    <br />
    Uses a serverless function (<code>/api/send-love</code>) with Discord Webhooks to log:
    link opens, name entry, and acceptance.
  </li>

  <li>
    <strong>Romantic Ambiance</strong>  
    <br />
    Background music and floating CSS heart animations enhance the mood.
  </li>
</ul>

<hr />

<h2>💻 Tech Stack Overview</h2>

<div style={{ overflowX: "auto" }}>
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Technology</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>HTML5, CSS3, Vanilla JavaScript</td>
      <td>Single-page application structure, styling, and interactive logic</td>
    </tr>
    <tr>
      <td>API</td>
      <td>Node.js (Serverless)</td>
      <td>Secure endpoint for Discord webhook communication</td>
    </tr>
    <tr>
      <td>Communication</td>
      <td>Discord Webhooks</td>
      <td>Instant notifications for user interactions</td>
    </tr>
    <tr>
      <td>Assets</td>
      <td>GIF, MP3</td>
      <td>Animated stickers and looping background audio</td>
    </tr>
  </tbody>
</table>
</div>

<hr />

<h2>🏗️ Project Structure</h2>

<p>
The codebase is intentionally minimal, consisting of a single frontend file and one backend function:
</p>

<pre>
{`valentines/
├── api/                   # 🌐 Serverless Functions
│   └── send-love.js       # Node.js handler for Discord webhook notifications
├── media/                 # 🖼️ Static assets
│   ├── audio/
│   │   └── song.mp3       # Background music
│   └── gifs/              # Animated stickers (greeting, main, stickers 1–3, final)
└── index.html             # 💖 Complete single-page application`}
</pre>

<hr />

<h2>⚙️ Getting Started</h2>

<h3>Prerequisites</h3>

<ul>
  <li>A Discord server channel with a webhook URL</li>
  <li>A hosting provider that supports static assets and serverless functions (e.g. Vercel)</li>
</ul>

<h3>Installation</h3>

<pre>
{`git clone [repository-url]
cd valentines`}
</pre>

<h3>Environment Configuration</h3>

<div style={{
  padding: "12px",
  borderLeft: "4px solid #ff4d6d",
  background: "#fff5f7"
}}>
  <strong>⚠️ Important</strong>
  <br />
  The <code>api/send-love.js</code> function requires the
  <code>DISCORD_WEBHOOK</code> environment variable to be set.
</div>

<pre>
{`DISCORD_WEBHOOK="https://discord.com/api/webhooks/..."`}
</pre>

<h3>Deployment</h3>

<p>
Deploy the <code>valentines</code> folder.
Your hosting platform will automatically serve <code>index.html</code> at the root
and expose the API endpoint at <code>/api/send-love</code>.
</p>

<hr />

<h2>▶️ Usage</h2>

<p>
Once deployed, share the public URL with your recipient.
The following events are automatically logged to Discord:
</p>

<div style={{ overflowX: "auto" }}>
<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>Notification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Opens Link</td>
      <td>👉🏻 Someone just opened the Valentine link!</td>
    </tr>
    <tr>
      <td>Enters Name</td>
      <td>👀 [Name] just entered their name!</td>
    </tr>
    <tr>
      <td>Clicks “Yes”</td>
      <td>💖 [Name] said YES!</td>
    </tr>
  </tbody>
</table>
</div>

<hr />

<h2>🗺️ Roadmap</h2>

<ul>
  <li>📱 Haptic feedback for mobile interactions</li>
  <li>🎨 URL-based customisation for text and colours</li>
  <li>🧸 Expanded sticker and animation library</li>
</ul>

<hr />

<h2>🤝 Contributing</h2>

<p>
This project is designed as a fun and reusable template.
Feel free to fork it and customise the assets (<code>.gif</code>, <code>.mp3</code>)
and styling (inside <code>index.html</code>) to make it uniquely yours.
</p>

<hr />

<h2>📄 License</h2>

<p>
This project is open-sourced under the <strong>MIT License</strong>.
</p>
