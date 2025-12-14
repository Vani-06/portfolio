import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import "./App.css";

function PlayerCube({ onClick }) {
  const ref = useRef();

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.015;
    ref.current.position.x = mouse.x * 2;
    ref.current.position.y = mouse.y * 1.2;
  });

  return (
    <mesh ref={ref} onClick={onClick}>
      <boxGeometry />
      <meshStandardMaterial color="#7c7cff" />
    </mesh>
  );
}

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      {/* HERO */}
      <h1>Hi, I'm Vani Singh 👋</h1>
      <p>Frontend Developer • Competitive Programmer • 3D Web</p>

      <div className="links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {/* GAME SCORE */}
      <p style={{ marginTop: "1rem" }}>
        🎯 Click the cube — Score: {score}
      </p>

      {/* 3D CANVAS */}
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <PlayerCube onClick={() => setScore(score + 1)} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* ABOUT ME */}
      <div className="section">
        <h2>About Me</h2>
        <div className="card">
          I enjoy building interactive web experiences, combining frontend
          development with game-like mechanics. I actively practice competitive
          programming and love experimenting with 3D on the web using Three.js.
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="section">
        <h2>Achievements</h2>
        <div className="grid">
          <div className="card">LeetCode Rating: 1800+</div>
          <div className="card">CodeChef: 4★</div>
          <div className="card">ICPC Aspirant</div>
          <div className="card">Hackathon Participant</div>
        </div>
      </div>

      {/* GAMING PROFILE */}
      <div className="section">
        <h2>Gaming Profile</h2>
        <div className="grid">
          <div className="card">Valorant: Diamond</div>
          <div className="card">CSGO: Legendary Eagle</div>
        </div>
      </div>

      {/* DEVELOPER CARD */}
      <div className="section">
        <h2>Developer Card</h2>
        <div className="credit-card">
          <div>Name: Vani Singh</div>
          <div className="number">4242 4242 4242 4242</div>
          <div>CVV: 007</div>
          <div>Expires: Never 😎</div>
        </div>
      </div>
    </div>
  );
}

