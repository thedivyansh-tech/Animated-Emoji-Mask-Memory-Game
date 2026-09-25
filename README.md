# 🎭 Animated Emoji Mask Memory Game

A playful and interactive **JavaScript memory matching game** featuring animated emoji masks, smooth CSS transitions, glassmorphism UI, combo tracking, tries, and high-score tracking.

The project combines **JavaScript game logic with modern CSS animations** to create a fun and visually interactive frontend experience.

## ✨ Features

* 🎭 Animated emoji masks
* 🧠 Memory matching gameplay
* 🔥 Combo system
* 🎯 Try counter
* 🏆 Best score tracking
* 🔄 Reset game functionality
* ✨ Smooth card animations
* 🪟 Glassmorphism interface
* 🍊 Orange and light-grey visual theme
* 🌊 Soft wavy background effects
* 📱 Responsive design
* ♿ Semantic button elements
* ⌨️ Keyboard-friendly focus states
* ⚡ CSS `linear()` easing animations
* 📐 Squircle-style card corners where supported

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* SVG
* CSS Animations
* CSS Transforms
* CSS Transitions
* CSS `linear()` easing
* Responsive Web Design

## 🎮 How To Play

1. Click on any card to reveal the hidden emoji.
2. Click another card to find its matching emoji.
3. If the emojis match, the cards are marked as matched.
4. If they don't match, the cards are hidden again.
5. Try to remember the position of each emoji.
6. Build combos by finding consecutive matches.
7. Complete the board using as few tries as possible.
8. Try to beat your best score.

## 🧠 Game Logic

The game creates two copies of each emoji and randomly shuffles them across the board.

The JavaScript keeps track of:

* Selected card
* Number of tries
* Number of matched pairs
* Current combo
* Best score
* Game completion state

When two cards are selected, their `data-face` values are compared.

If both values are the same, the cards receive the `is-matched` class.

If they are different, the cards are flipped back after a short delay.

## 🎨 UI Design

The interface uses a modern light visual style built around:

* Orange accents
* White surfaces
* Soft grey backgrounds
* Transparent glass panels
* Blur effects
* Orange shadows and highlights
* Rounded/squircle cards
* Subtle wavy background elements

The goal was to make a simple memory game feel more like a polished modern web experience.

## 📂 Project Structure

```text
animated-emoji-memory-game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Run Locally

No installation or build process is required.

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/animated-emoji-memory-game.git
```

Open the project folder and launch:

```text
index.html
```

You can also use the **Live Server** extension in VS Code for a better development experience.

## 📸 Preview

Add a screenshot of your game here:

```md
![Animated Emoji Memory Game](./preview.png)
```

You can also add a GIF showing the card animations.

## 💡 Inspiration

This project was created as a frontend learning and experimentation project.

The visual concept, animation techniques, and general idea were inspired by **YouTube tutorials, frontend showcases, web-development articles, and other resources available online**.

The project was adapted and implemented as my own learning project to practice JavaScript game logic, CSS animations, UI design, and interactive frontend development.

Third-party code, assets, or resources should be credited separately when directly reused.

## 📚 What I Learned

Building this project helped me practice:

* DOM manipulation
* JavaScript event handling
* Arrays and shuffling
* Game state management
* Matching algorithms
* CSS custom properties
* CSS animations
* CSS transforms
* CSS transitions
* Custom easing functions
* Responsive layouts
* Accessibility attributes
* Interactive UI states

## 🔮 Future Improvements

* Add difficulty levels
* Add countdown mode
* Add different emoji themes
* Add leaderboard
* Add dark mode
* Add game statistics
* Add multiplayer mode
* Add localStorage for persistent high scores

## 👨‍💻 Author

**Divyansh**

Frontend development and JavaScript project.

## 📄 License

This project is primarily intended for learning and personal experimentation.

If third-party code, assets, fonts, or other resources are used, their original licenses and attribution requirements should be respected.
