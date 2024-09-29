function Home() {
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
      <button type="button" id="get-joke-btn" className="btn btn-dark">
        Get a Joke
      </button>
    </div>
  );
}

export default Home;
