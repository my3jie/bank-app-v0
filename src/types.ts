export interface Transaction {
  name: string;
  amount: number;
  accountNumber: string;
  date: string;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export interface Bookmark {
  id: number;
  type: 'transaction' | 'message';
  content: string;
  date: string;
  amount?: number;
  sender?: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
}