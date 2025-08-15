// components/Sun.tsx
'use client';

export default function Sun() {
  return (
    <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] pointer-events-none">
      {/* Sun glow */}
      <div
        className="absolute inset-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 195, 0, 0.9) 0%, rgba(255, 195, 0, 0.2) 60%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Concentric orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="animate-spin-rings-slow"
          style={{ animation: 'spin-rings 90s linear infinite' }}
        >
          {[25, 40, 55].map((r, idx) => (
            <circle
              key={idx}
              cx="50"
              cy="50"
              r={r}
              stroke="rgba(255, 195, 0, 0.2)"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
