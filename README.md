# Company Website

## What this project does

This is a small website for a company. The home page welcomes visitors and shows changing pictures. Visitors can open the Contact Us page, enter their name, email address, and message, and send it to the company. The site checks the information, saves valid messages, and shows a thank-you message. If something is missing or the email looks wrong, the site explains what to fix.

## How to start the website

Run these steps from the project folder:

1. Install the project files:

   ```bash
   npm install
   npm --prefix frontend install
   npm --prefix backend install
   ```

2. Start the website:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your web browser.

## What the folders contain

- `frontend/` contains the pages visitors see, the pictures, the contact form, and the page design.
- `backend/` contains the part that receives contact messages, checks them, and saves them.
- `db/` contains the instructions for how saved contact messages are organized.
- `specs/` contains the written description and plans for the website.
- `tests/` contains checks that help confirm the website works.
- `.github/` contains project guidance and helper instructions.
- `.specify/` contains the project principles and feature setup information.

The `README.md` file (this file) explains the project and how to start it.
