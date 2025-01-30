import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import { toast, Toaster } from 'react-hot-toast';
import { checkMobileExists, saveUserSpin, getProbabilities } from './services/database';
import type { WheelProbability } from './types';
import logo from './logo.png';


// Wheel configuration with prizes and styling
const wheelData = [
  { option: '10% off', probablity: 0.1, style: { backgroundColor: '#000000', textColor: 'white' } },
  { option: '20% off', probablity: 0.1, style: { backgroundColor: '#ffffff', textColor: 'black' } },
  { option: 'Free hoodie', probablity: 0.1, style: { backgroundColor: '#000000', textColor: 'white' } },
  { option: 'Mystery box', probablity: 0.1, style: { backgroundColor: '#ffffff', textColor: 'black' } },
  { option: 'Free tshirt', probablity: 0.1, style: { backgroundColor: '#000000', textColor: 'white' } },
  { option: 'Sorry 😔 Life is unfair', probablity: 0.9, style: { backgroundColor: '#ffffff', textColor: 'black' } },
];

const App: React.FC = () => {
  // Form state management
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  // Wheel state management
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);
  const [weights, setWeights] = useState<number[]>([]);
  const [showCollectPrize, setShowCollectPrize] = useState(false);

  // Load probabilities from Firebase on component mount
  useEffect(() => {
    const loadProbabilities = async () => {
      try {
        const probs = await getProbabilities();
        const newWeights = probs.map(p => p.probability);
        setWeights(newWeights);
      } catch (error) {
        console.error('Error loading probabilities:', error);
        setWeights([0.2, 0.2, 0.15, 0.15, 0.15, 0.15]); // Default weights
      }
    };

    loadProbabilities();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !mobile || mobile.length !== 10) {
      toast.error(mobile.length !== 10 ? 'Please enter a valid 10-digit mobile number' : 'Please fill in all fields');
      return;
    }

    try {
      const exists = await checkMobileExists(mobile);
      if (exists) {
        toast.error('This mobile number has already been used');
        return;
      }

      setShowForm(false);
      toast.success('Welcome to Techno Be With You!');
    } catch (error) {
      console.error('Error checking mobile:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  // Handle wheel spin with weighted probabilities
  const handleSpinClick = () => {
    if (!hasSpun) {
      const random = Math.random();
      let sum = 0;
      let selectedIndex = 0;
      
      for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (random <= sum) {
          selectedIndex = i;
          break;
        }
      }

      setPrizeNumber(selectedIndex);
      setMustSpin(true);
      setHasSpun(true);

      // Save spin result to Firebase
      saveUserSpin({
        name,
        mobile,
        prize: wheelData[selectedIndex].option,
        timestamp: new Date()
      });

      // Show collect prize popup for all prizes except "Sorry"
      setShowCollectPrize(wheelData[selectedIndex].option !== 'Sorry 😔 Life is unfair');
    } else {
      toast.error('You have already used your spin!');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster />
      
      {/* Navigation Bar */}
      <nav className="bg-black p-4 border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold">Welcome to Techno Be With You</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Registration Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-8 rounded-lg max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold mb-6">Welcome to Techno Be With You</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.slice(0, 10))}
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Spin Wheel Section */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Spin & Win</h1>
          <div className="relative w-full max-w-[320px] md:max-w-[400px] mx-auto">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={wheelData}
              onStopSpinning={() => {
                setMustSpin(false);
                if (showCollectPrize) {
                  toast.success('Collect your prize from Techno Be With You Stall!');
                }
              }}
              outerBorderColor="#ffffff"
              radiusLineColor="#ffffff"
              radiusLineWidth={1}
              fontSize={16}
              textDistance={60}
              spinDuration={0.9}
            />
            <button
              onClick={handleSpinClick}
              disabled={hasSpun}
              className={`mt-8 px-12 py-4 rounded-full text-lg font-semibold w-full max-w-xs mx-auto block ${
                hasSpun
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-200 transform hover:scale-105'
              } transition duration-300 ease-in-out`}
            >
              {hasSpun ? 'Already Spun' : 'SPIN'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
