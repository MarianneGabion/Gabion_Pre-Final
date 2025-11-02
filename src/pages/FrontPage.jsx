import { useNavigate } from "react-router-dom";

function FrontPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home"); 
  };

  return (
    <div className="front-page">
      <div className="front-content">
        <h1>☕ Marianne’s Whisk & Leaf Café 🌿</h1>
        <p className="tagline">
           A cozy café experience where matcha meets calm and comfort.
        </p>
        <button onClick={handleStart} className="start-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
