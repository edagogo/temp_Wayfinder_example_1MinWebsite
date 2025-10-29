
import React from 'react';

const ImportanceSection: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Why is This Important?</h2>
      <div className="flex flex-col md:flex-row items-center mt-8 gap-8">
        <div className="flex-shrink-0">
          <svg className="w-24 h-24 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 16.707a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-1.414 1.414zM16.293 16.707a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-1.414 1.414z" /></svg>
        </div>
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Complex global challenges, from climate change to public health, require experts from different fields to work together. This research highlights a fundamental obstacle—<strong>communication</strong>—and offers a path forward.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            By understanding how language barriers arise, teams can build the trust and shared vocabulary necessary for truly effective collaboration, ensuring that progress isn't hindered by simple misunderstandings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
