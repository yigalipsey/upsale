import React from "react";

const CenteredRadialPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#001c55",
          opacity: 1,
          width: "100%",
          height: "100%",
          backgroundImage: `
            repeating-radial-gradient(
              circle at center center,
              #002a70 0px,
              #002a70 4px,
              transparent 8px
            ),
            repeating-linear-gradient(
              rgba(0, 44, 115, 0.2),
              rgba(0, 28, 85, 0.1)
            )
          `,
        }}
      />
    </div>
  );
};

export default CenteredRadialPattern;
