import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleWaitlistJoin = () => {
    if (!email) return alert("Please enter your email address.");
    alert(`Thank you! ${email} has been added to the waitlist.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4 text-center">CapeNova</h1>
      <p className="text-xl text-center mb-8 max-w-xl">
        AI-Powered Reels. Instantly. CapeNova turns your text into engaging videos with voiceovers, visuals, and music.
      </p>

      <div className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-lg mb-12">
        <h2 className="text-lg font-semibold mb-2">Join the Early Access Waitlist</h2>
        <Input
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Button className="w-full" onClick={handleWaitlistJoin}>Join Now</Button>
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-2xl font-bold">USD $19.90/mo</p>
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>40 Reels/month</li>
            <li>HD video export</li>
            <li>AI voiceover</li>
            <li>Basic stock visuals</li>
          </ul>
          <a href="https://www.paypal.com/paypalme/Capenova/19.90" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 w-full">Subscribe with PayPal</Button>
          </a>
        </div>
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-2xl font-bold">USD $29.90/mo</p>
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>100 Reels/month</li>
            <li>No watermark</li>
            <li>Advanced captioning</li>
            <li>Premium stock visuals</li>
          </ul>
          <a href="https://www.paypal.com/paypalme/Capenova/29.90" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 w-full">Subscribe with PayPal</Button>
          </a>
        </div>
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">Elite</h3>
          <p className="text-2xl font-bold">USD $49.90/mo</p>
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>Unlimited Reels</li>
            <li>Brand uploads</li>
            <li>Auto-publish to socials</li>
            <li>Team access</li>
          </ul>
          <a href="https://www.paypal.com/paypalme/Capenova/49.90" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 w-full">Subscribe with PayPal</Button>
          </a>
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-400">
        Follow us: @CapeNovaAI (IG, TikTok, X)
      </p>

      <div className="mt-16">
        <Link href="/thank-you" className="text-xs text-gray-500">
          Already subscribed? Click here to continue.
        </Link>
      </div>
    </div>
  );
}
