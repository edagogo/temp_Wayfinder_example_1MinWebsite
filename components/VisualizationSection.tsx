
import React from 'react';

const VisualizationSection: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">From Misunderstanding to Synergy</h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Effective interdisciplinary work requires moving from isolated conversations to a space of shared meaning.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Before */}
        <div className="text-center p-6 border border-red-200 rounded-lg bg-red-50/50">
          <h3 className="text-xl font-bold text-red-800 mb-4">The Problem: Talking Past Each Other</h3>
          <svg viewBox="0 0 200 100" className="w-full h-auto">
            <defs>
              <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
              </marker>
            </defs>
            <circle cx="40" cy="50" r="25" fill="#fecaca" stroke="#dc2626" strokeWidth="2"/>
            <text x="40" y="50" textAnchor="middle" dy=".3em" fontSize="8" fill="#991b1b" className="font-sans font-semibold">Physical</text>
            <text x="40" y="60" textAnchor="middle" dy=".3em" fontSize="8" fill="#991b1b" className="font-sans font-semibold">Science</text>
            
            <circle cx="160" cy="50" r="25" fill="#fecaca" stroke="#dc2626" strokeWidth="2"/>
            <text x="160" y="50" textAnchor="middle" dy=".3em" fontSize="8" fill="#991b1b" className="font-sans font-semibold">Social</text>
            <text x="160" y="60" textAnchor="middle" dy=".3em" fontSize="8" fill="#991b1b" className="font-sans font-semibold">Science</text>

            <line x1="65" y1="35" x2="135" y2="35" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
            <line x1="135" y1="65" x2="65" y2="65" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
          </svg>
          <p className="text-red-700 text-sm mt-2">Different "dialects" and "metaphors" cause communication to miss its target.</p>
        </div>

        {/* After */}
        <div className="text-center p-6 border border-green-200 rounded-lg bg-green-50/50">
          <h3 className="text-xl font-bold text-green-800 mb-4">The Solution: Building a Bridge</h3>
           <svg viewBox="0 0 200 100" className="w-full h-auto">
            <defs>
              <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#16A34A" />
              </marker>
            </defs>
            <circle cx="70" cy="50" r="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" opacity="0.8"/>
            <text x="70" y="50" textAnchor="middle" dy=".3em" fontSize="8" fill="#14532d" className="font-sans font-semibold">Physical</text>
            
            <circle cx="130" cy="50" r="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" opacity="0.8"/>
            <text x="130" y="50" textAnchor="middle" dy=".3em" fontSize="8" fill="#14532d" className="font-sans font-semibold">Social</text>

            <ellipse cx="100" cy="50" rx="35" ry="30" fill="#16a34a" fillOpacity="0.3" />
            <text x="100" y="45" textAnchor="middle" fontSize="7" fill="#14532d" className="font-sans font-bold">Common</text>
            <text x="100" y="55" textAnchor="middle" fontSize="7" fill="#14532d" className="font-sans font-bold">Understanding</text>
          </svg>
          <p className="text-green-700 text-sm mt-2">"Articulation" creates a shared space for effective collaboration and innovation.</p>
        </div>
      </div>
    </section>
  );
};

export default VisualizationSection;
