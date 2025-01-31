import React from 'react';
import { PenSquare, User, RotateCcw } from 'lucide-react';
import { Contact } from '../types';

const contacts: Contact[] = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Jane', lastName: 'Smith' },
  { id: 3, firstName: 'Emily', lastName: 'Brown' },
  { id: 4, firstName: 'Michael', lastName: 'Johnson' },
  { id: 5, firstName: 'Sarah', lastName: 'Williams' },
  { id: 6, firstName: 'Chris', lastName: 'Taylor' },
  { id: 7, firstName: 'Laura', lastName: 'Davis' },
  { id: 8, firstName: 'David', lastName: 'Miller' },
  { id: 9, firstName: 'Liam', lastName: 'Clark' },
  { id: 10, firstName: 'Emma', lastName: 'Moore' },
  { id: 11, firstName: 'Olivia', lastName: 'Wilson' },
];

export function ContactsView() {
  return (
    <div className="flex-1 flex flex-col bg-black overflow-hidden">
      <header className="p-4 flex justify-between items-center bg-gray-900">
        <div className="text-amber-400 font-semibold">John Doe &gt;</div>
        <div className="flex gap-4">
          <PenSquare className="w-6 h-6 text-indigo-400" />
          <User className="w-6 h-6 text-indigo-400" />
          <RotateCcw className="w-6 h-6 text-indigo-400" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center p-4 border-b border-gray-800">
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-4"></div>
            <div>
              <div className="text-amber-400">{contact.firstName}</div>
              <div className="text-white">{contact.lastName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}