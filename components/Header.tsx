
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        'What do you mean?'
      </h1>
      <p className="mt-4 text-lg md:text-xl text-accent font-semibold">
        The Importance of Language in Developing Interdisciplinary Research
      </p>
      <p className="mt-6 text-base md:text-lg text-gray-600">
        This paper explores how different uses of language create barriers in research that crosses scientific disciplines. It identifies three key challenges—'dialects', 'metaphors', and 'articulation'—and argues that building a shared understanding is crucial for successful collaboration between experts.
      </p>
    </header>
  );
};

export default Header;
