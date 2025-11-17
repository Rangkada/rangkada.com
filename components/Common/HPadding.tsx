import { ReactNode } from 'react';

// Use this component to align children to the header
// Decoupled from Container because sometimes a component would want a width that is smaller than
// that of the header but the padding needs to be preserved
export default function HPadding({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
