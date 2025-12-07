# Baebol Kwestin (Bible Questions App)

A Progressive Web App (PWA) for asking Bible questions in Bislama (Vanuatu). Powered by AI to provide clear, Reformed theology-based answers in simple English suitable for new Christians.

## 🌟 Features

- **AI-Powered Answers**: Get biblical answers to your questions using Google Gemini AI
- **Simple Language**: Answers written for 13-year-old reading level
- **Reformed Theology**: All answers align with solid Reformed biblical principles
- **Offline Support**: Works as a PWA - install on your phone or computer
- **Dark Mode**: Easy reading in any lighting condition
- **Question History**: Save and review all your past questions and answers
- **Extended Answers**: Get detailed Bible study versions (600-800 words) of any answer
- **Smart Question Pool**: 
  - 21 culturally-relevant questions about animism/kastom traditions
  - 29 general Christian questions
  - AI-generated fresh questions added automatically
- **Share Answers**: Share questions and answers via clipboard or native share
- **Bilingual Interface**: Bislama UI with English answers

## 🎯 Target Audience

Designed for Christians in Vanuatu who:
- Are navigating the intersection of traditional kastom and Christian faith
- Want clear biblical answers to practical questions
- May have limited or intermittent internet access
- Prefer simple, conversational language

## 🚀 Getting Started

### Online Use
Simply visit the app URL in your web browser.

### Install as PWA (Recommended)

**On Android/Chrome:**
1. Open the app in Chrome
2. Tap the "Install" button that appears
3. Or: Menu → "Add to Home Screen"

**On iOS/Safari:**
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"

**On Desktop:**
1. Look for the install icon in the address bar
2. Or click the "Instolem Baebol Kwestin" button

## 📖 How to Use

### Ask a Question
1. Type your question in Bislama or English in the text box
2. Click **"ASKEM Baebol"** (Ask Bible)
3. Wait a moment for the AI-generated answer

### Get Random Questions
1. Click **"GIVIM Kwestin"** (Give Me Questions)
2. Choose from 5 suggested questions
3. Questions cover kastom/animism topics and general Christian faith

### Get Extended Answers
- Click **"Mekem ansa i longfala..."** (Make answer longer)
- Receive a detailed 600-800 word Bible study format answer
- Includes 6-8 Bible verses and practical application steps

### View History
1. Click **"HISTRI: Ol kwestin we yu askem finis"** (History: Questions you asked)
2. Click any question to expand its answer
3. Use 📤 to share specific answers
4. Use 🗑️ to delete individual answers
5. Download all answers as text file
6. Clear entire history if needed

### Share Answers
- **Main view**: Click the share icon (top left) to share current answer
- **History view**: Click 📤 next to any question to share that answer
- Copies to clipboard automatically

## 🛠️ Technical Details

### Built With
- **Vanilla JavaScript** - No frameworks
- **Google Gemini 2.5 Flash** - AI answer generation
- **Marked.js** - Markdown parsing
- **LocalStorage** - History persistence
- **Service Workers** - Offline functionality

### AI Model
- **Primary**: Google Gemini 2.5 Flash (free tier)
  - 1,500 requests per day
  - 15 requests per minute
- **Fallback**: Offline message if no internet connection

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive Web App compatible
- Responsive design (mobile-first)

### Data Storage
- All data stored locally in browser (localStorage)
- No server-side storage
- History limited to 200 most recent Q&As
- Question pool persists across sessions

## 🎨 Theology Guidelines

All answers follow Reformed theology principles:
- God's sovereignty and creation
- Universal sin and need for forgiveness
- Jesus' substitutionary atonement
- Salvation by grace through faith alone
- Authority of Scripture
- Work of the Holy Spirit
- Final judgment and eternal life

### Special Focus: Animism & Kastom
The app includes questions specifically addressing:
- Ancestor worship
- Spirit communication
- Traditional healing practices
- Ceremonial participation
- Taboo places and objects
- Sorcery (nakaimas)
- Integration of kastom and Christian faith

## 📝 Answer Format

### Short Answers (~350 words)
- Main idea
- 2-3 practical steps
- 3+ Bible verses (NIrV version)
- Encouraging conclusion

### Extended Answers (~600-800 words)
1. Summary answer
2. What the Bible says (6-8 verses)
3. Deeper understanding
4. Practical application
5. Encouraging reminder

## 🔧 Development

### File Structure
```
baebol-kwestin/
├── index.html          # Main application
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── icon-192.png       # App icon (192x192)
└── icon-512.png       # App icon (512x512)
```

### Local Development
1. Clone repository
2. Serve files (any HTTP server)
3. No build process required
4. Add your own Gemini API key

### API Keys
The app uses Google Gemini API. To use your own key:
1. Get key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Replace encoded key in `GEMINI_KEY` variable
3. Encode with: `btoa("your-api-key-here")`

## 🌍 Localization

**Current Interface Language**: Bislama (Vanuatu)
**Answer Language**: Simple English (13-year-old reading level)

Key Bislama Terms:
- `ASKEM` = Ask
- `GIVIM` = Give
- `HISTRI` = History
- `Wet smol` = Wait a moment
- `Nogat intanet` = No internet
- `Serem` = Share
- `Deletem` = Delete
- `longfala` = extended/detailed

## 📱 Offline Functionality

- PWA can be installed and work offline
- Answers require internet connection
- History accessible offline
- Question pool loads offline
- Clear error messaging when offline

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional culturally-relevant questions
- Bislama translations
- UI/UX enhancements
- Bug fixes
- Documentation improvements

## 📄 License

[Your chosen license - e.g., MIT]

## 👤 Author

**Ross Webb**
- App Version: 2.0
- Year: 2025

## 🙏 Acknowledgments

- Built for the Christians of Vanuatu
- Reformed theology resources
- NIrV Bible translation
- Google Gemini AI
- Anthropic Claude (development assistance)

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- [Your contact method]

## 🔮 Future Enhancements

Potential features:
- More Bislama interface elements
- Audio answers (text-to-speech)
- Verse lookup tool
- Community question suggestions
- Multiple language support
- Catechism integration

---

**Tagline**: *"Askem eni kwestin long Baebol"* (Ask any question about the Bible)

Made with ❤️ for Vanuatu
