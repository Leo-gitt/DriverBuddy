import React, { useEffect, useState } from "react";

const quotes = [
  {
    text: "„Финансиската слобода е достапна за оние кои учат за неа и работат за неа.“",
    author: "Роберт Киосаки",
    width: "w-[78%]",
  },
  {
    text: "„Финансиската дисциплина почнува со штедење, но се развива преку разбирање на пазарот и правилни одлуки.“",
    author: "Чарлс Шваб",
    width: "w-[91%]",
  },
  {
    text: "„Штедењето е добар пријател, но инфлацијата е тивок непријател – мора да размислиш за иднината.“",
    author: "Пол Самјуелсон",
    width: "w-[86%]",
  },
];

const Carousel = () => {
  const [isSelected, setIsSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSelected((prevSelected) => (prevSelected + 1) % quotes.length);
    }, 5000); // Auto transition every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen mx-auto py-16 bg-gradient-to-r from-cyan-100 to-orange-100">
      <div className="bg-gradient-to-r from-cyan-400 to-orange-400 mb-20 p-12 mt-20 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="w-[90%] mx-auto rounded-lg">
          <h3 className="text-6xl text-center text-white font-extrabold tracking-wide uppercase shadow-lg">
            What Our Users Say
          </h3>
        </div>

        <div className="relative mt-10 text-center">
          <p
            className={`transition-all duration-1000 text-3xl md:text-4xl text-white font-semibold ${quotes[isSelected].width} mx-auto opacity-90 transform transition-transform duration-1000 ease-in-out`}
          >
            {quotes[isSelected].text}
          </p>
          <p
            className={`text-xl text-gray-100 mt-5 ${quotes[isSelected].width} mx-auto italic`}
          >
            - {quotes[isSelected].author}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center pt-10">
          {quotes.map((quote, index) => (
            <div
              key={index}
              onClick={() => setIsSelected(index)}
              aria-label={`Select quote ${index + 1}`}
              className={`h-4 w-4 mx-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform ${
                isSelected === index
                  ? "bg-white scale-150"
                  : "bg-white opacity-60 hover:opacity-100 hover:scale-125"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
