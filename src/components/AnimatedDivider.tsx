export function AnimatedDivider() {
  return (
    <div className="relative w-full bg-charcoal-900 overflow-hidden h-[2px]" aria-hidden="true">
      {/* Scope definition styles for the custom animated shine gradient */}
      <style>{`
        /* Individual tracks ensuring every component starts and fully exits the screen */
        @keyframes flow-a {
          0% {
            transform: translateX(-110%);
          }
          50% {
            transform: translateX(110%);
          }
          100% {
            transform: translateX(260%);
          }
        }
        @keyframes flow-b {
          0% {
            transform: translateX(-110%);
          }
          55% {
            transform: translateX(150%);
          }
          100% {
            transform: translateX(520%);
          }
        }
        @keyframes flow-c {
          0% {
            transform: translateX(-110%);
          }
          45% {
            transform: translateX(200%);
          }
          100% {
            transform: translateX(680%);
          }
        }
        @keyframes flow-d {
          0% {
            transform: translateX(350%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-110%);
          }
        }
        @keyframes pulse-intense {
          0%, 100% {
            opacity: 0.3;
            filter: brightness(1.0) blur(4px);
          }
          50% {
            opacity: 0.7;
            filter: brightness(1.3) blur(6px);
          }
        }
        .animate-flow-a {
          animation: flow-a 10s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .animate-flow-b {
          animation: flow-b 14s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .animate-flow-c {
          animation: flow-c 11s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .animate-flow-d {
          animation: flow-d 12s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .animate-pulse-glow {
          animation: pulse-intense 4s ease-in-out infinite;
        }
      `}</style>
      
      {/* Background base track line - perfectly centered single seam */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent relative">
        {/* Component A: Primary deep steel-blue glow flowing right */}
        <div className="absolute inset-y-0 left-0 w-[40%] h-[2px] -top-[0.5px] bg-linear-to-r from-transparent via-[#416b9e]/90 to-transparent animate-flow-a blur-[1px]"></div>
        
        {/* Component B: Secondary warm gold elegant spark trailing behind */}
        <div className="absolute inset-y-0 left-0 w-[20%] h-[1.5px] -top-[0.25px] bg-linear-to-r from-transparent via-gold-400/80 to-transparent animate-flow-b"></div>
        
        {/* Component C: Ultra-thin bright-white focal core moving right */}
        <div className="absolute inset-y-0 left-0 w-[15%] h-[2px] -top-[0.5px] bg-linear-to-r from-transparent via-white to-transparent animate-flow-c"></div>
        
        {/* Component D: Backward flowing silver trail for complex colliding stream effect */}
        <div className="absolute inset-y-0 left-0 w-[30%] h-px bg-linear-to-r from-transparent via-neutral-400/50 to-transparent animate-flow-d blur-[0.5px]"></div>
        
        {/* Component E: Atmospheric ambient aura around the track with slow pulsing transition */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-6 bg-radial-gradient from-[#416b9e]/15 to-transparent pointer-events-none blur-md animate-pulse-glow"></div>
      </div>
    </div>
  );
}
