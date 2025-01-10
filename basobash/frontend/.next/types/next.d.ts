import { NextApiRequest } from 'next';

// Extend the NextApiRequest interface to include the 'user' property
declare module 'next' {
  interface NextApiRequest {
    user?: { userId: string }; // Adjust the type of userId to match your actual data structure
  }
}
