import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useState } from "react";
import "./App.css";

const skills = [
  { name: "React", desc: "Component-based frontend development" },
  { name: "JavaScript", desc: "ES6+, async logic, browser APIs" },
  { name: "Three.js", desc: "3D graphics on the web" },
  { name: "DSA", desc: "Strong algorithmic problem solving" },
  { name: "Git & GitHub", desc: "Version control & collaboration" },
  { name: "Competitive Programming", desc: "ICPC & contest practice" },
];

/* =======================
   SKILL ORB
======================= */
function SkillOrb({ position, skill, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        position={position}
        scale={hovered ? 1.25 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onSelect(skill)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#a5a5ff" : "#7c7cff"}
          emissive="#7c7cff"
          emissiveIntensity={hovered ? 0.9 : 0.4}
        />
      </mesh>
    </Float>
  );
}

/* =======================
   MAIN APP
======================= */
export default function App() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="app">
      {/* HERO */}
      <h1>Hi, I'm Vani Singh 👋</h1>
      <p>Frontend Developer • Competitive Programmer • App Dev</p>

      <div className="links">
        <a href="https://github.com/Vani-06" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vani-singh-0547b737a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {/* SKILL GALAXY */}
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {skills.map((skill, i) => {
            const angle = (i / skills.length) * Math.PI * 2;
            return (
              <SkillOrb
                key={skill.name}
                skill={skill}
                position={[
                  Math.cos(angle) * 2.8,
                  Math.sin(angle) * 2.8,
                  0,
                ]}
                onSelect={setActiveSkill}
              />
            );
          })}

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* SKILL INFO */}
      {activeSkill && (
        <div className="info-card">
          <h2>{activeSkill.name}</h2>
          <p>{activeSkill.desc}</p>
          <button onClick={() => setActiveSkill(null)}>Close</button>
        </div>
      )}

      {/* ABOUT ME */}
      <div className="section">
        <h2>About Me</h2>
        <div className="card">
          I enjoy building interactive web experiences, combining frontend
          development with clean design and 3D visuals. I actively practice
          competitive programming and enjoy exploring Three.js.
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="section">
        <h2>Achievements</h2>
        <div className="grid">
          <div className="card">ICPC Aspirant</div>
          <div className="card">Hackathon Winner</div>
          <div className="card">Competitive Programmer</div>
          <div className="card">Open Source Contributor</div>
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
