'use client';

import { useState } from 'react';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const [codeJoke, setJoke] = useState(null); // To store the joke
  const [buttonText, setButtonText] = useState('Get a Joke'); // To track the button text
  const [showPunchline, setShowPunchline] = useState(false); // To track if the punchline should be shown
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true); // To control welcome message visibility
  const { user } = useAuth(); // Get the authenticated user

  const fetchJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
    const joke = await response.json();

    setJoke(joke); // Set the joke after fetching
    setShowPunchline(false); // Initially show the setup only
    setButtonText('Get Punchline'); // Change the button text to "Get Punchline"
  };

  const handleButtonClick = () => {
    if (codeJoke && !showPunchline) {
      setShowPunchline(true); // Show both setup and punchline when clicked after showing the setup
      setButtonText('Get Another Joke'); // Change button text to "Get Another Joke"
    } else {
      fetchJoke(); // Fetch a new joke
      setShowWelcomeMessage(false); // Hide the welcome message after fetching a joke
    }
  };

  if (!user) {
    // Show a message if the user is not logged in
    return (
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h2>Please log in to get a joke</h2>
      </div>
    );
  }

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {showWelcomeMessage && <h2>Welcome, {user.displayName || user.email}!</h2>} {/* Show welcome message only if `showWelcomeMessage` is true */}
      {codeJoke && (
        <>
          <h2>{codeJoke.setup}</h2> {/* Always show the setup */}
          {showPunchline && <h2>{codeJoke.delivery}</h2>} {/* Only show punchline if "Get Punchline" has been clicked */}
        </>
      )}
      <button type="button" className="btn btn-dark" onClick={handleButtonClick}>
        {buttonText} {/* Button text controlled by state */}
      </button>
    </div>
  );
}

export default Home;
