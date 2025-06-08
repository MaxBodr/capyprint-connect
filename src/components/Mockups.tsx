
import React from 'react';

const Mockups: React.FC = () => (
  <div className="relative w-full h-[500px] bg-gray-50 overflow-hidden">
    {/* Смартфон слева */}
    <div
      className="
        absolute
        left-0
        top-1/2
        transform -translate-y-1/2
        w-[200px] h-[400px]
        max-w-[260px] max-h-[520px]
        bg-white border border-gray-200 rounded-2xl shadow-xl
        z-20
      "
    >
      <img
        src="/screenshots/mobile.png"
        alt="Mobile Screenshot"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>

    {/* Десктопный экран, начинающийся от середины телефона и находящийся позади */}
    <div
      className="
        absolute
        top-1/2
        transform -translate-y-1/2
        w-[60vw] h-[45vw]
        max-w-[800px] max-h-[600px]
        bg-white rounded-lg shadow-lg
        z-10
      "
      style={{ left: 'calc(50% + 100px)' }}
    >
      <img
        src="/screenshots/desktop.png"
        alt="Desktop Screenshot"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  </div>
);

export default Mockups;
