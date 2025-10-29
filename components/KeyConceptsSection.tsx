import React from 'react';

interface ConceptCardProps {
  // Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  title: string;
  description: string;
  example: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ icon, title, description, example }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
    <div className="bg-accent/10 p-4 rounded-full text-accent mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600 flex-grow">{description}</p>
    <p className="mt-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
      Example: <span className="font-semibold text-gray-700">"{example}"</span>
    </p>
  </div>
);

const KeyConceptsSection: React.FC = () => {
  const concepts: ConceptCardProps[] = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h4M5 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2z" /></svg>,
      title: "Dialects",
      description: "When the same word is used by different disciplines, but with different specialized meanings, leading to confusion.",
      example: "dynamic"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: "Metaphors",
      description: "Abstract concepts used to explain ideas that can be misinterpreted by those outside the specific 'speech community'.",
      example: "mapping"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
      title: "Articulation",
      description: "The active, collaborative process of deconstructing and rebuilding ideas to create a new, shared understanding.",
      example: "catchment"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Three Key Language Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {concepts.map(concept => <ConceptCard key={concept.title} {...concept} />)}
      </div>
    </section>
  );
};

export default KeyConceptsSection;