import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <h1 style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 20 }}>CapeNova</h1>
      <p style={{ fontSize: 20, textAlign: 'center', maxWidth: 600, marginBottom: 40 }}>
        Create Viral Reels from Just an Idea — Powered by AI. CapeNova turns your text into engaging videos with visuals, voiceovers, and music — automatically.
      </p>
      <div style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, maxWidth: 400, width: '100%' }}>
        <h2 style={{ fontSize: 18, marginBottom: 10 }}>Join the Early Access Waitlist</h2>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />
        <button style={{ width: '100%', padding: 10, backgroundColor: '#111', color: '#fff', border: 'none' }}>
          Join Now
        </button>
      </div>
      <p style={{ marginTop: 30, fontSize: 14, color: '#aaa' }}>
        Follow us: @CapeNovaAI (IG, TikTok, X)
      </p>
    </div>
  );
}
