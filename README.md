Will You Be My Valentine? 💌
A charming, interactive webpage designed to ask someone to be your Valentine in a fun and playful way. This project features a runaway "No" button that playfully avoids being clicked, making "Yes" the inevitable, fun choice.

It's a single, self-contained HTML file with polished animations, background music, and an optional notification system to let you know when they've said yes!

✨ Features
Interactive Proposal: A clear "Yes" or "No" choice to start.

Playful "No" Button: The "No" button moves to a random position on the screen each time it's clicked.

Dynamic "Yes" Button: The "Yes" button grows larger with each click of the "No" button.

Animated Background: A gentle, looping animation of floating hearts creates a romantic atmosphere.

Background Music: A song automatically plays when the user first interacts with the page by clicking "Yes".

Multi-Stage Success Animation: Clicking "Yes" reveals a sequence of celebratory stickers.

Discord Webhook Notification: Optionally sends an instant notification to your Discord server when the "Yes" button is clicked.

🚀 How to Use
There are two main ways to use this project: locally or by hosting it online for free.

Method 1: Running Locally

Download the index.html file from this repository.

Download the song.mp3 file and place it in the exact same folder as the index.html file.

Open the index.html file in any web browser.

Method 2: Hosting on GitHub Pages (Recommended)

Create a new public GitHub repository.

Upload both the index.html file and your song.mp3 file to the repository.

In the repository settings, go to the "Pages" tab.

Under "Build and deployment," select the main branch as your source.

Save the changes. Your website will be live at a URL like https://your-username.github.io/your-repository-name.

🔧 Customization
It's easy to make this page your own! Open the index.html file in any text editor to make these changes.

Changing the Text

Main Question: Find the <h1> tag inside the <main> section and change the text.

Success Message: Find the <h1> tag inside the <section id="success-container"> and change the text.

"No" Button Phrases: In the <script> section at the bottom, find the noButtonPhrases array and edit the list of strings to your liking.

Changing the Stickers (GIFs)

Main Sticker: Find the <img> tag with the class main-img and replace the src link with a link to your chosen GIF.

Success Stickers: Inside <section id="success-container">, there are two <img> tags (intermediate-sticker and final-sticker). Replace their src links with your chosen GIFs for the success animation.

Changing the Music

Get your desired audio file and rename it to song.mp3.

Place it in the same folder as your index.html file, replacing the old one.

Alternatively, if you have a direct URL to an .mp3 file, you can find the <audio> tag and replace the src="song.mp3" with your URL.

Setting up the Discord Webhook

Create a webhook in your Discord server's settings (Server Settings > Integrations > Webhooks).

Copy the Webhook URL.

In the <script> section, find the line const webhookURL = "YOUR_WEBHOOK_URL_HERE"; and paste your URL between the quotes.

💻 Technologies Used
HTML5

CSS3 (with animations and custom properties)

JavaScript (for all the interactive logic)

📜 License
This project is open-source and available under the MIT License.
