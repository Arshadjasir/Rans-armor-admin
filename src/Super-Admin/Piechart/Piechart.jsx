import React, { useEffect, useRef } from "react";

const PieChart = ({ data, colors }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i];
    }

    let startAngle = 0;
    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (2 * Math.PI * data[i]) / total;
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) / 2,
        startAngle,
        startAngle + sliceAngle
      );
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.fill();
      startAngle += sliceAngle;
    }
  }, [data, colors]);

  return <canvas ref={canvasRef} width={140} height={140} />;
};

export default PieChart;
