import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-[radial-gradient(circle_at_top,#001f3f,#050505_60%,#000)]">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute inset-0 h-12 w-12 rounded-b-full border-t-primary  border-r-transparent border-b-transparent border-l-transparent"
          style={{ animation: "spin 0.9s linear infinite" }}
        />
      </div>
      <div className="mt-6 flex flex-col items-center gap-1">
        <span
          className="font-monoBold text-6xl font-semibold tracking-tight mb-8
bg-linear-to-r from-cyan-400 via-cyan-100 to-cyan-500
bg-clip-text text-transparent"
        >
          {'< Loading />'}
        </span>
        <span className="flex gap-1 mt-2">
          <span
            className="h-8 w-8 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="h-8 w-8 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "120ms" }}
          />
          <span
            className="h-8 w-8 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "240ms" }}
          />
        </span>
      </div>
      <style>
        {`
                @keyframes spin{
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }           
                }
            `}
      </style>
    </div>
  );
};

export default Loading;
