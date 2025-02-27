# PIN Input Authentication

A simple client-side PIN-based authentication system that allows users to enter a four-digit PIN using their keyboard. The system validates the PIN and provides feedback based on correctness.

## Features
- Custom query selector function (`$`) for efficient DOM manipulation.
- Keyboard input support for digits (0-9) and `Backspace` for corrections.
- Visual feedback for correct (`#00FF40`) and incorrect (`#FF0000`) PIN entries.
- Auto-focus on the next input field when a digit is entered.
- Event handling with `removeEventListener` for enhanced user experience.
- Hint display if the entered PIN is incorrect.
- Simple reload mechanism for retrying.

## How It Works
1. The page clears all `.pin-input` fields on load.
2. Users enter a four-digit PIN using the keyboard.
3. If a number is typed, it fills the next available input field and triggers `focus()`.
4. If `Backspace` is pressed, the last entered digit is erased.
5. When all inputs are filled, the PIN is validated:
   - If correct, "Legend!" is displayed.
   - If incorrect, a hint ("Hint: B O O B") is shown.
6. The user can click a button to reload the page and try again.
7. `removeEventListener` is used to disable input handling after submission, preventing unnecessary key presses.

## Technologies Used
- **HTML**: Structure for input fields and buttons.
- **CSS**: Basic styling for input borders and button states.
- **JavaScript**: Core logic for handling input, validation, and UI feedback.

## What I've Learned
This project served as a practical exercise in **DOM manipulation**, including:
- Using `querySelectorAll` to select multiple elements efficiently.
- Implementing `focus()` to enhance user input experience.
- Handling keyboard events (`keydown`) for a seamless interaction.
- Utilizing `removeEventListener` to prevent redundant event bindings.
- Manipulating CSS dynamically using JavaScript.

## Limitations
- **No backend validation**: The PIN is hardcoded (`8008`), making it insecure.
- **Not a real authentication system**: Since verification happens only on the client-side, it's easy to bypass by inspecting the script.

## Possible Improvements
- Implement backend verification for secure PIN checking.
- Hash and salt stored PINs instead of using plain text.
- Add rate limiting to prevent brute-force attacks.
- Use multi-factor authentication (MFA) for better security.

## Usage
Simply open the `index.html` file in a browser and enter the PIN. The system will validate and provide feedback accordingly.

## License
This project is open-source. Feel free to modify and improve it!
