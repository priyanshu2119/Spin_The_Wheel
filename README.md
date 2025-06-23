# Spin & Win - Techno Be With You! 🎡

Hey there awesome humans! 👋 Welcome to my little corner of the coding universe - the "Spin & Win" app that I whipped up for the "Techno Be With You" event. This isn't your grandma's spinning wheel (though she'd probably crush it) - it's a fun little creation designed to sprinkle some digital luck dust on your event!

So what does this baby do? It lets folks register, give the wheel a good ol' spin, and potentially walk away doing their happy dance with some cool prizes. And don't worry about that one guy trying to spin 50 times - we've got a one-spin-per-person rule that keeps things fair and square!

## ✨ What makes it special?

Here are some of the cool features packed into this little app:

*   **📝 Simple Registration:** A form so clean and simple, even your tech-challenged uncle could figure it out!
*   **🚫 One Spin to Win:** We're watching those phone numbers like a cat watches a laser pointer. No duplicate spins here!
*   **🎡 An Exciting Wheel:** A spinning wheel so pretty you might get hypnotized. Don't say I didn't warn you!
*   **⚖️ Weighted Probabilities:** Some prizes are rarer than finding a parking spot downtown. That's by design, folks!
*   **🔥 Built with Firebase:** All spin data gets saved faster than you can say "did I win?" (Spoiler: maybe!)
*   **💅 Sleek & Modern UI:** It's so pretty you might want to take it to dinner first. Tailwind CSS worked its magic here!
*   **🚀 Powered by Vite + React:** This app loads faster than your coworker disappears when it's time to refill the coffee pot.

## 🛠️ Tech Stack

Here's the digital toolkit I rummaged through to build this thing:

*   **Frontend:** [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/) (because JavaScript with superpowers!)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (for when you want your app to look fabulous without crying over CSS)
*   **Backend & Database:** [Firebase](https://firebase.google.com/) (because who has time to build a backend from scratch? Not me!)
*   **Wheel Component:** [react-custom-roulette](https://www.npmjs.com/package/react-custom-roulette) (doing the spinny magic)
*   **Notifications:** [react-hot-toast](https://react-hot-toast.com/) (for notifications hotter than my morning coffee)

## 🚀 Getting Started

Want to play with this on your own computer? I gotchu! Here's the how-to:

### Prerequisites

You'll need [Node.js](https://nodejs.org/) (v18 or higher) and [npm](https://www.npmjs.com/). Don't have them? Well, that's like trying to make pancakes without a pan... so go download them first!

### 1. Clone the Repository

First, yoink this repo to your computer:

```bash
git clone https://github.com/priyanshu2119/Spin_The_Wheel
cd Spin_The_Wheel
```

### 2. Install Dependencies

Time to grab all those digital LEGO pieces:

```bash
npm install
```
(Sit back and enjoy watching the terminal do its thing. Maybe grab a snack?)

### 3. Set up Firebase

This app needs Firebase like I need caffeine in the morning:

1.  Head over to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  Set up a **Firestore Database** (it's like a digital filing cabinet for our app).
3.  Add a new **Web App** to your project.
4.  Firebase will give you some code that looks like alphabet soup. That's your `firebaseConfig`. Grab it!
5.  Open `src/firebase.ts` and replace the placeholder with your config (like swapping out a fake ID for a real one).

```typescript
// src/firebase.ts

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 4. Run the Development Server

Now for the magic words:

```bash
npm run dev
```

Boom! Your app should be running at `http://localhost:5173`. If it doesn't work, try turning it off and on again. Works 60% of the time, every time! 😉

## 📁 Project Structure

Here's what's what in this digital toybox:

```
/
├── public/
├── src/
│   ├── components/         # Where all the small widgets live
│   ├── services/
│   │   └── database.ts     # The database whisperer
│   ├── App.tsx             # The big boss component
│   ├── firebase.ts         # Firebase's welcome mat
│   ├── index.css           # Making things pretty 101
│   └── main.tsx            # Where the React party starts
├── package.json            # The guest list for our dependency party
└── vite.config.ts          # Telling Vite how to do its thing
```

---

Well, that's all folks! Hope this project makes your day a bit more fun and your event a lot more exciting. Feel free to tinker with it - break it, fix it, make it play the Macarena, whatever floats your boat!


Happy coding, and may the odds be ever in your favor! 🎯✨

