
# AI Logo Generator

A sleek and modern mobile application that simulates AI-powered logo and art generation. Built with React Native and Expo, this app features a clean design, real-time status simulation, and Firebase integration. It is fully extensible and ready for real AI backend integration.

## Screenshots
![Shot](https://github.com/user-attachments/assets/c59dc839-fd4c-4f3f-bc5c-ed7a59d0d6e2)



## ✨ Features

- **Two-screen user flow**:
  - **Input Screen**: Allows users to enter a prompt or keyword for logo generation.
  - **Output Screen**: Displays a mock AI-generated image based on the input.
- **Status Chip Simulation**:
  - Shows a "processing" indicator for a random duration (30–60 seconds).
  - Automatically updates to a "done" state.
  - Navigates to the output screen when tapped in the "done" state.
- **Generated Logo Library**:
  - View all previously generated logos in a dedicated screen.
  - Automatically saved to Firebase Firestore.
  - Provides a gallery-like experience where users can scroll through past results.
- **Component Showcase**:
  - A dedicated screen to preview and test all UI components used in the app.
  - Great for design validation and consistency checks.
- **Modular Architecture**:
  - Easily extend or replace the mock generation logic with real AI APIs.
  - Firebase Functions folder included for potential backend automation.

## 📱 Technologies Used

- **React Native with Expo (Managed Workflow)**
- **Firebase Firestore** for data storage
- **Zustand** for lightweight state management
- **Tailwind CSS (via NativeWind)** for rapid UI styling
- **TypeScript** for type safety
- **Firebase Functions (backend-ready)**

## 📁 Project Structure

```bash
AI-Logo-Generator/
├── app/              # Main screens and navigation
├── components/       # Shared UI components
├── hooks/            # Custom hooks
├── store/            # Zustand state logic
├── types/            # Global TypeScript definitions
├── functions/        # Firebase Cloud Functions setup
├── assets/           # Fonts, icons, and images etc.
├── firebaseConfig.ts # Firebase configuration
├── app.json          # Expo configuration
   ```

## 🚀 Getting Started

### 1. Clone the project
   
```bash
   git clone https://github.com/tekmez/AI-Logo-Generator.git
   ```

### 2. Go to the project directory

```bash
  cd AI-Logo-Generator
   ```
### 3. Install necessary packages
```bash
   npm install
   ```

### 4. Start the app

```bash
    npx expo start
   ```
