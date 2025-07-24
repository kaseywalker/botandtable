import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from './dialog';

export default function LeadCaptureModal({ open, onOpenChange, onSubmit }) {
  console.log('LeadCaptureModal render - open:', open);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [revenue, setRevenue] = useState('');
  const [hasList, setHasList] = useState('');
  const [listSize, setListSize] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !revenue || !hasList || (hasList === 'yes' && !listSize)) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    onSubmit && onSubmit({ name, email, revenue, hasList, listSize });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">Get Your FREE Custom Report</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="flex-1 rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            className="rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base"
            placeholder="Monthly Revenue (e.g. $10,000)"
            value={revenue}
            onChange={e => setRevenue(e.target.value)}
            required
          />
          <div>
            <label className="block font-semibold mb-1">Do you have a marketing list?</label>
            <div className="flex gap-2">
              <button type="button" className={`px-4 py-2 rounded-lg font-semibold text-base shadow transition ${hasList === 'yes' ? 'bg-[#db5439] text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => { setHasList('yes'); }}>Yes</button>
              <button type="button" className={`px-4 py-2 rounded-lg font-semibold text-base shadow transition ${hasList === 'no' ? 'bg-[#db5439] text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => { setHasList('no'); setListSize(''); }}>No</button>
            </div>
            {hasList === 'yes' && (
              <input
                type="text"
                className="mt-2 rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base w-full"
                placeholder="How big is your list? (number)"
                value={listSize}
                onChange={e => setListSize(e.target.value.replace(/[^\d]/g, ''))}
                required
              />
            )}
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button type="submit" className="mt-2 px-8 py-3 rounded-lg bg-[#db5439] text-white font-bold text-xl shadow hover:bg-[#b53e28] transition w-full">Get My Report</button>
        </form>
        <DialogClose className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">✕</DialogClose>
      </DialogContent>
    </Dialog>
  );
} 