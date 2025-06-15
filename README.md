# code-challenge Event Guest List Manager

A simple web app to manage guest lists for an event.

## Features

- Add guests with names and categories (Friend, Family, Colleague)
- Limit guest list to 10 people
- Timestamp shown when guest is added
- Toggle RSVP status between **Attending** and **Not Attending**
- Edit guest names
- Remove guests from the list
- Guest counter displayed

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/nyagetiria/code-challenge.git
````

2. Navigate to the project folder.
3. Open the project with a live server (e.g., using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code).

 Opening `index.html` directly may not load JS modules properly in some browsers — use a local server.

## Usage

1. Enter the guest’s name in the input field.
2. Select a category: Friend, Family, or Colleague.
3. Click **"Add Guest"** to submit.
4. Each guest appears in a list:

   * **Toggle RSVP**: Marks as Attending or Not Attending
   * **Edit**: Update the guest's name
   * **Remove**: Delete the guest
5. You’ll also see the timestamp and live guest count.

## Project Structure

```
.
├── index.html       # Main HTML structure
├── style.css        # Styling and layout
└── index.js         # JavaScript logic for interactivity
```

## Author

**naomi kemunto**
GitHub: [@nyagetiria](https://github.com/nyagetiria)

##  License

This project is licensed under the [MIT License](LICENSE).
