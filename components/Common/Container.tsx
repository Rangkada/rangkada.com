import { ReactNode } from 'react';
import HPadding from './HPadding';

// Use this component to align children to the header
export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="w-full max-w-[1536px]">
        <HPadding>
          {children}
        </HPadding>
      </div>
    </div>
  );
}