import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://seklwinnnlmqlyrlxrcd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNla2x3aW5ubmxtcWx5cmx4cmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTkyODMsImV4cCI6MjA2Mjg5NTI4M30.XprZdi43BaWvh09pQedYhwlfVIrMK3C5Oz34ceg-ksg'
);

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    await supabase.from('waitlist').insert([{ email }]);
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <h1 style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 20 }}>CapeNova</h1>
      <p style={{ fontSize: 20, textAlign: 'center', maxWidth: 600, marginBottom: 40 }}>
        Create Viral Reels from Just an Idea — Powered by AI. CapeNova turns your text into engaging videos with visuals, voiceovers, and music — automatically.
      </p>
      {!submitted ? (
        <div style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, maxWidth: 400, width: '100%' }}>
          <h2 style={{ fontSize: 18, marginBottom: 10 }}>Join the Early Access Waitlist</h2>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: 10, marginBottom: 10 }}
          />
          <button onClick={handleSubmit} style={{ width: '100%', padding: 10, backgroundColor: '#111', color: '#fff', border: 'none' }}>
            Join Now
          </button>
        </div>
      ) : (
        <p style={{ fontSize: 18, color: '#0f0' }}>Thank you! You’re on the list.</p>
      )}
      <p style={{ marginTop: 30, fontSize: 14, color: '#aaa' }}>
        Follow us: @CapeNovaAI (IG, TikTok, X)
      </p>
    </div>
  );
}
