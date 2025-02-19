'use client';

interface XButtonProps {
  onClick: () => void;
}

export default function XButton({ onClick }: XButtonProps) {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={onClick}>
      ×
    </button>
  );
}
