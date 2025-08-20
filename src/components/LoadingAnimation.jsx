import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

const LoadingAnimation = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  // Generate particle positions once to avoid re-randomizing on every render
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    []
  );

  const rafIdRef = useRef(null);
  const startRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    doneRef.current = false;
    startRef.current = null;

    const tick = (now) => {
      if (doneRef.current) return;

      if (startRef.current == null) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));

      // Avoid unnecessary state updates
      setProgress((prev) => (prev === pct ? prev : pct));

      if (elapsed >= duration) {
        doneRef.current = true;
        if (onComplete) onComplete(); // no extra delay
        return;
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      doneRef.current = true;
    };
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      {/* Animated Background Particles (stable positions) */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animation: "float 3s ease-in-out infinite alternate",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Main Loading Container */}
        <div className="relative">
          {/* Outer Rotating Rings */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-2 border-purple-500 border-r-transparent animate-spin-reverse"></div>
            <div className="absolute inset-4 rounded-full border-2 border-emerald-500 border-b-transparent animate-spin-slow"></div>

            {/* Center AI Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg rotate-45 animate-pulse shadow-lg shadow-blue-500/50"></div>
            </div>
          </div>

          {/* Data Flow Animation */}
          <div className="flex justify-center mb-8 space-x-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1s",
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-80 max-w-sm mx-auto mb-6">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-100 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Tech Elements */}
          <div className="mt-8 flex justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs">AI</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-purple-500/20 rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 bg-purple-400 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <span className="text-xs">GenAI</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 bg-emerald-400 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <span className="text-xs">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-spin-reverse { animation: spin-reverse 2s linear infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </div>
  );
};

LoadingAnimation.propTypes = {
  onComplete: PropTypes.func,
  duration: PropTypes.number,
};

export default LoadingAnimation;