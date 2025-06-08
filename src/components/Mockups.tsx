
import React from 'react';

const Mockups: React.FC = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Десктоп-макет */}
    <div
      className="
        absolute
        w-[60vw] h-[45vw]
        max-w-[800px] max-h-[600px]
        bg-white rounded-lg shadow-lg
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <img
        src="/screenshots/desktop.png"
        alt="Desktop Mockup"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>

    {/* Смартфон-макет */}
    <div
      className="
        absolute
        w-[20vw] h-[36vw]
        max-w-[260px] max-h-[460px]
        bg-white border border-gray-200 rounded-2xl shadow-xl
        top-1/2 left-[25%]
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <img
        src="/screenshots/mobile.png"
        alt="Mobile Mockup"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  </div>
);

export default Mockups;
