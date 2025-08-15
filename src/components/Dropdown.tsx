'use client';

import { useState, useRef, useEffect } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';

interface Props {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}

export function Dropdown({ value, options, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="w-full not-prose relative">
      <button
        onClick={() => setOpen((open) => !open)}
        className={`w-full bg-panel-dark hover:bg-panel-light transition p-2 text-left cursor-pointer rounded-t ${open || 'rounded-b'}`}
      >
        <div className="flex justify-between items-center">
          <span className="truncate">{value || 'All tags'}</span>
          <span className="text-xs">{open ? <SlArrowUp /> : <SlArrowDown />}</span>
        </div>
      </button>
      {open && (
        <div className="absolute bg-panel-dark shadow w-full max-h-80 overflow-scroll z-10 rounded-b">
          {['', ...options].map((opt) => (
            <div
              key={opt || 'all'}
              className="m-0 px-2 py-1 cursor-pointer hover:bg-panel-light transition rounded truncate"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt || 'All tags'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
