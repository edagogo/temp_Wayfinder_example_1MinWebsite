
import React from 'react';
import Header from './components/Header';
import ImportanceSection from './components/ImportanceSection';
import KeyConceptsSection from './components/KeyConceptsSection';
import VisualizationSection from './components/VisualizationSection';
import MethodSection from './components/MethodSection';
import AuthorsSection from './components/AuthorsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light-gray min-h-screen text-gray-800 antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-16 md:space-y-24">
        <Header />
        <ImportanceSection />
        <KeyConceptsSection />
        <VisualizationSection />
        <MethodSection />
        <AuthorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
