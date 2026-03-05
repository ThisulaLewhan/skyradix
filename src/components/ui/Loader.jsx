import React from 'react';

const Loader = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-full flex justify-center items-center overflow-hidden ${className}`}>
      <style>{`
        .loader-svg {
          width: 100%;
          height: 100%;
        }
        .grid-line {
          stroke: #222;
          stroke-width: 0.5;
        }
        .browser-frame {
          fill: #111;
          stroke: #666;
          stroke-width: 1;
          filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
        }
        .browser-top {
          fill: #1a1a1a;
        }
        .loading-text {
          font-family: sans-serif;
          font-weight: bold;
          font-size: 14px;
          fill: #e4e4e4;
        }
        .skeleton {
          fill: #2d2d2d;
          rx: 4;
          ry: 4;
          animation: pulse 1.8s ease-in-out infinite;
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.02));
        }
        @keyframes pulse {
          0% { fill: #2d2d2d; }
          50% { fill: #505050; }
          100% { fill: #2d2d2d; }
        }
        .trace-flow {
          stroke-width: 1.5;
          fill: none;
          stroke-dasharray: 120 600;
          stroke-dashoffset: 720;
          animation: flow 3s linear infinite;
          opacity: 0.95;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 8px currentColor) blur(0.5px);
          color: #00ccff;
        }
        .trace-flow:nth-child(1) { stroke: url(#traceGradient1); }
        .trace-flow:nth-child(2) { stroke: url(#traceGradient2); }
        .trace-flow:nth-child(3) { stroke: url(#traceGradient3); }
        .trace-flow:nth-child(4) { stroke: url(#traceGradient4); }
        @keyframes flow {
          from { stroke-dashoffset: 720; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="w-full h-full transform scale-125 md:scale-150 flex items-center justify-center">
        <svg className="loader-svg" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="traceGradient1" x1="250" y1="120" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ccff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ccff" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="traceGradient2" x1="650" y1="120" x2="800" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ccff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ccff" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="traceGradient3" x1="250" y1="380" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ccff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ccff" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="traceGradient4" x1="650" y1="120" x2="500" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ccff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ccff" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <g id="grid">
            <g>
              {Array.from({ length: 17 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="100%" className="grid-line" />
              ))}
            </g>
            <g>
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 100} x2="100%" y2={i * 100} className="grid-line" />
              ))}
            </g>
          </g>

          <g id="browser" transform="translate(0, 200)">
            <rect x="250" y="120" width="400" height="260" rx="8" ry="8" className="browser-frame" />
            <rect x="250" y="120" width="400" height="30" rx="8" ry="8" className="browser-top" />
            <circle cx="270" cy="135" r="4" fill="none" stroke="#838383ff" strokeWidth="1" />
            <circle cx="285" cy="135" r="4" fill="none" stroke="#838383ff" strokeWidth="1" />
            <circle cx="300" cy="135" r="4" fill="none" stroke="#838383ff" strokeWidth="1" />
            <text x="450" y="140" textAnchor="middle" className="loading-text">Website...</text>
            <rect x="270" y="160" width="360" height="20" className="skeleton" />
            <rect x="270" y="190" width="200" height="15" className="skeleton" />
            <rect x="270" y="215" width="300" height="15" className="skeleton" />
            <rect x="270" y="240" width="360" height="90" className="skeleton" />
            <rect x="270" y="340" width="180" height="20" className="skeleton" />
          </g>

          <g id="traces" transform="translate(0, 200)">
            <path d="M100 300 H250 V120" className="trace-flow" />
            <path d="M800 200 H650 V380" className="trace-flow" />
            <path d="M400 520 V380 H250" className="trace-flow" />
            <path d="M500 50 V120 H650" className="trace-flow" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
