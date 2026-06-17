# Codeforces Notes Chrome Extension

A Chrome Extension that adds persistent personal notes and revision tracking directly to Codeforces problem pages.

## Features

* 📝 Persistent notes for every problem
* ⚡ Auto-save using Chrome Storage API
* 📋 One-click note template insertion
* 📏 Character counter
* 🟢 Solved, 🟡 Revise, 🔴 Hard, ⭐ Favourite status tags
* 📂 Collapsible notes panel
* 🎨 Clean and lightweight UI
* 💾 All data stored locally using Chrome Storage

## Tech Stack

* JavaScript
* HTML
* CSS
* Chrome Extension Manifest V3
* Chrome Storage API

## Installation

1. Clone the repository

```bash
git clone https://github.com/Priyanshi-dixit1/codeforces-notes-extension.git
```

2. Open Chrome and go to:

```
chrome://extensions
```

3. Enable **Developer mode**

4. Click **Load unpacked**

5. Select the project folder

6. Open any Codeforces problem page and start taking notes.

## Folder Structure

```
codeforces-notes-extension/
│
├── content.js
├── manifest.json
├── styles.css
├── popup/
│   ├── popup.html
│   └── popup.js
└── README.md
```

## License

MIT License
