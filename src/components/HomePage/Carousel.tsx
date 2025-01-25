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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-500 mb-20 p-10 mt-20">
      <div className="w-[90%] mx-auto">
        <h3 className="text-5xl text-center">
          What Our Users Say
        </h3>
      </div>
      <p className="mt-10 text-center text-2xl">{quotes[isSelected].text}</p>
      <p className={`text-end ${quotes[isSelected].width} mt-5`}>
        {quotes[isSelected].author}
      </p>

      {/* <div className="flex justify-center pt-10">
        {quotes.map((quote, index) => (
          <div
            key={index}
            onClick={() => setIsSelected(index)}
            aria-label={`Select quote ${index + 1}`}
            className={`h-4 ${
              isSelected === index ? "bg-orange-100" : "bg-orange-300"
            } w-4 mr-5 rounded-md cursor-pointer border-4 border-red-500`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
