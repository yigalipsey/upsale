import React from "react";

const Pattern = () => {
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
              circle at 0 0,
              transparent 0,
              #002a70 30px
            ),
            repeating-linear-gradient(
              rgba(0, 44, 115, 0.3),
              rgba(0, 28, 85, 0)
            )
          `,
        }}
      />
    </div>
  );
};

export default Pattern;
