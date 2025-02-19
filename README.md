# Aurora Movie List Application

## Description

This Angular application displays a dynamic list of movies over a stunning Aurora background video. Key features include:

- **Background Video:** A downloaded Aurora video plays in the background.
- **Movie List with Pagination:** Movies are shown using Swiper web components with pagination.  
  The movie cards are numbered continuously (e.g., the first 10 movies are numbered 1–10, the next 10 are 11–20, and so on).
- **Navigation:** “Prev” and “Next” buttons allow you to navigate between pages.  
  When loading a new page, the movie cards are re-ordered so that you see the beginning of the list for “Next” and the end of the list for “Prev.”
- **Error Handling:** On error, an Angular Material Dialog displays the error message.
- **Custom Font:** The application uses a downloaded custom font stored in the `assets/fonts` folder.
- **"Don't Click here!" Page:** A clickable link in the toolbar navigates to a separate page with a humorous message and a “Back to Home” button that returns to the main page.

## Installation

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install the dependencies**  
   ```bash
   npm install
   ```

## Running the Development Server

To run the development server, execute:
```bash
ng serve
```
Then open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).

## Project Structure

- **src/app/movie-list/**  
  Contains the component for displaying the movie list, including the Swiper-based pagination, continuous numbering of movie cards, and error handling.

- **src/app/dont-click/**  
  Contains the "Don't Click here!" page, which displays the humorous message along with a "Back to Home" button.

- **src/assets/fonts/**  
  Contains the downloaded custom font files used by the application.

- **src/styles.scss**  
  Global styles including settings for the background video, custom font, and layout.

## Technologies Used

- **Angular (with standalone components)**
- **Angular Material** (Toolbar, Button, Dialog)
- **Swiper (Web Component)**
- **HTML5 Video** (for displaying the background video)
- **SCSS** (for styling)

## Routing

The application includes the following routes:
- `/` – Home page displaying the movie list.
- `/dont-click` – The "Don't Click here!" page, try it and see it what happens, and there is a button to navigate back to the home page.

## Credits

- **Szalontai Tibor** – Written and Directed  
- **Hired by AURORA**

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```
