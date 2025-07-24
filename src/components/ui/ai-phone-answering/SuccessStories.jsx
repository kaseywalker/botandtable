import React from 'react';

export default function SuccessStories() {
  return (
    <section className="w-full py-16 bg-white border-b">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1,2].map(i => (
            <div key={i} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center border hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{background:'#FF6B47'}}>
                <span className="text-white text-2xl font-bold">{i}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">"This AI changed our business!"</h3>
              <p className="text-gray-600">"We never miss a call, and our reservations are up 40%. Highly recommend!"</p>
              <span className="mt-4 text-sm text-gray-500">- Restaurant Owner {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 