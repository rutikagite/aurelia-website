"use client";

export default function PlexusBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-white">
      {/* Vignette Style Gradient: Corners to Center */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-100"
        style={{ 
          background: "radial-gradient(circle at center, #FFFFFF 0%, rgba(42, 109, 217, 0.45) 100%)" 
        }}
      />
    </div>
  );
}

