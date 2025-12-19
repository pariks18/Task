import { useState } from "react";
import api from "../services/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;

    try {
      await api.post("/newsletter", { email });
      setSubscribed(true);   
      setEmail("");
    } catch (err) {
      console.log("Already subscribed or error");
    }
  };

  return (
    <div id="Subscription" className="bg-gray-600 py-20 text-white h-60">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-400 mb-10">
          Subscribe to our newsletter and get updates on new challenges,
          internships, and opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
       
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed}
            className={`w-full sm:w-96 px-4 py-3 rounded-lg bg-gray-600 border text-white
              focus:outline-none focus:ring-2
              ${subscribed ? "border-green-500 opacity-60" : "border-black focus:ring-violet-500"}`}
          />

          <button
            onClick={handleSubscribe}
            disabled={subscribed}
            className={`px-8 py-3 rounded-lg font-medium transition
              ${
                subscribed
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-violet-600 hover:bg-violet-700"
              }`}
          >
            {subscribed ? "Subscribed ✓" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
