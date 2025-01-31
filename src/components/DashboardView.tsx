import React from 'react';
import { PenSquare, User, RotateCcw } from 'lucide-react';
import { Transaction } from '../types';

const transactions: Transaction[] = [
  { name: 'Alberto Giglio', amount: -1500.00, accountNumber: 'DE12345678901234567890', date: '08/11/2022' },
  { name: 'Tom Everaert', amount: -2000.00, accountNumber: 'DE09876543210987654321', date: '22/02/2023' },
  { name: 'Xiaowen zhen', amount: -75.25, accountNumber: 'DE11223344556677889900', date: '03/06/2023' },
  { name: 'Elvis', amount: -12.99, accountNumber: 'DE22334455667788990011', date: '19/12/2023' },
];

export function DashboardView() {
  return (
    <div className="flex-1 flex flex-col bg-black text-white overflow-hidden">
      <header className="p-4 flex justify-between items-center bg-gray-900">
        <div className="text-amber-400 font-semibold">Chernakov,Igor &gt;</div>
        <div className="flex gap-4">
          <PenSquare className="w-6 h-6 text-indigo-400" />
          <User className="w-6 h-6 text-indigo-400" />
          <RotateCcw className="w-6 h-6 text-indigo-400" />
        </div>
      </header>

      <div className="p-6 flex-1 overflow-y-auto hide-scrollbar">
        <h2 className="text-indigo-400 mb-2">Total Balance</h2>
        <h1 className="text-4xl font-bold text-indigo-400 mb-8">$99,370.96</h1>

        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800">
              <div>
                <div className={`text-${transaction.amount > 0 ? 'amber-400' : 'amber-400'} font-medium`}>
                  {transaction.name}
                </div>
                <div className="text-indigo-400 text-sm">{transaction.accountNumber}</div>
              </div>
              <div className="text-right">
                <div className={`${transaction.amount > 0 ? 'text-white' : 'text-white'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </div>
                <div className="text-indigo-400 text-sm">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}