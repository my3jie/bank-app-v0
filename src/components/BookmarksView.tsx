import React from 'react';
import { PenSquare, User, RotateCcw } from 'lucide-react';
import { Bookmark } from '../types';

const bookmarks: Bookmark[] = [
  {
    id: 1,
    type: 'transaction',
    content: 'Monthly Salary Deposit',
    date: '2024-03-15',
    amount: 5000.00,
    sender: 'Tech Corp Inc'
  },
  {
    id: 2,
    type: 'message',
    content: 'Meeting scheduled for project review',
    date: '2024-03-14',
    sender: 'Emily Brown'
  },
  {
    id: 3,
    type: 'transaction',
    content: 'Investment Return',
    date: '2024-03-13',
    amount: 1250.75,
    sender: 'Investment Fund'
  },
  {
    id: 4,
    type: 'message',
    content: 'Documents received for loan approval',
    date: '2024-03-12',
    sender: 'Loan Department'
  }
];

export function BookmarksView() {
  return (
    <div className="flex-1 flex flex-col bg-black overflow-hidden">
      <header className="p-4 flex justify-between items-center bg-gray-900">
        <div className="text-amber-400 font-semibold">Bookmarks &gt;</div>
        <div className="flex gap-4">
          <PenSquare className="w-6 h-6 text-indigo-400" />
          <User className="w-6 h-6 text-indigo-400" />
          <RotateCcw className="w-6 h-6 text-indigo-400" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.id} className="p-4 border-b border-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-amber-400 font-medium">{bookmark.sender}</div>
                <div className="text-white mt-1">{bookmark.content}</div>
                <div className="text-indigo-400 text-sm mt-1">{bookmark.date}</div>
              </div>
              {bookmark.amount && (
                <div className="text-white font-medium">
                  ${bookmark.amount.toFixed(2)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}