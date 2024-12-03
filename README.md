# **Hello There App**

A simple mobile app built with React Native and Expo that allows users to interact with a randomly changing background color. The app includes a color history feature and allows the user to toggle between dark and light themes.

## **Features**
- Display the text "Hello There" centered on the screen.
- Change the background color to a randomly generated color when the user taps anywhere on the screen.
- Maintain a history of the colors selected.
- Toggle between light and dark themes.
- Reset the background color.

## **Technologies Used**
- **React Native**: Framework for building the app.
- **Expo**: A set of tools for rapid mobile app development.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **React Native State Management**: To manage state (using React's `useState`).

## **Installation**

To run this app on your local machine, follow these steps:

### **Step 1: Clone the repository**

```bash
git clone https://github.com/Gabrpimenta/background-color-generator.git
```

### **Step 2: Navigate to the project folder**

```bash
cd color-history-app
```

### **Step 3: Install dependencies**

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### **Step 4: Start the development server**

To start the app in development mode:

```bash
npm start
# or
yarn start
```

This will start the Expo development server and open a new page in your browser with a QR code. Scan the QR code using the Expo Go app on your mobile device.

## **App Behavior**

### **1. Home Screen**
- **"Hello There" Text**: The text will appear centered on the screen.
- **Tap Anywhere**: When you tap anywhere on the screen, the background color will change to a randomly generated color.
- **Theme Toggle**: At the bottom of the screen, there's a button that allows you to toggle between dark mode and light mode.

### **2. Color History**
- **Color History**: Below the theme toggle, there’s a horizontal section that shows a history of the previously selected colors.
- **Reset Color**: A reset button will reset the background color to its default state.

## **Components**
The app consists of three primary components:

1. **App**: The main entry point of the application.
2. **TopSection**: This section contains the "Hello There" text.
3. **BottomSection**: This section contains buttons for resetting the color, toggling themes, and displaying the color history.

### **App Component**
This component sets up the state for background color, theme, and color history. It also contains the logic to generate a random color and handle the toggling between dark and light themes.

### **TopSection Component**
Displays the "Hello There" text and adjusts its position based on screen size.

### **BottomSection Component**
Displays the buttons for resetting the color, toggling the theme, and showing the color history.

## **Code Quality**
- **Clean Code**: We follow best practices in naming, code structure, and maintainability.
- **Principles Applied**: We apply DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid) principles throughout the code.

## **Customization**
Feel free to customize the app by:
- Adding additional features to the app, like custom themes.
- Updating the UI design (e.g., changing button styles, adding animations).
- Experimenting with other color generation algorithms or adding new functionalities.

## **Contributing**
If you'd like to contribute to this project, feel free to fork the repository and make pull requests. Please make sure to follow best practices and include tests for any new features.
