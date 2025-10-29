
import React from 'react';

const MethodSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900">How They Figured This Out</h2>
      <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg inline-block">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 text-accent">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-800">A Case Study in Action</h3>
            <p className="mt-2 text-lg text-gray-600">
              The researchers didn't just theorize; they analyzed their own real-world experience. Their findings are based on observing the communication dynamics within their team—composed of physical and social scientists—during a collaborative project and a field day excursion.
            </p>
            <p className="mt-3 text-lg text-gray-600">
              By reflecting on their own conversations and disagreements, they identified the specific moments where misunderstandings occurred and how they were resolved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
