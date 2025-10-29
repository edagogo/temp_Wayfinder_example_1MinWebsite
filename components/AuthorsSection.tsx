
import React from 'react';

const AuthorsSection: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">About the Authors</h2>
      <div className="mt-8 divide-y divide-gray-200">
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-lg font-semibold text-gray-800">L J Bracken (née Bull)</p>
          <p className="text-gray-600 mt-1 sm:mt-0">Department of Geography, University of Durham</p>
        </div>
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-lg font-semibold text-gray-800">E A Oughton</p>
          <p className="text-gray-600 mt-1 sm:mt-0">Centre for Rural Economy, University of Newcastle</p>
        </div>
      </div>
       <div className="mt-6 text-center text-sm text-gray-500">
          <p>Originally published in: <span className="italic">Transactions of the Institute of British Geographers, NS 31 371-382 (2006)</span></p>
       </div>
    </section>
  );
};

export default AuthorsSection;
