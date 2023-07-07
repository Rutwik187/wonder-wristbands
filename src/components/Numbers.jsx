import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default () => {
  const [counterOn, setCounterOn] = useState(false);

  const stats = [
    {
      start: "2000",
      end: "3000",
      title: "Customers",
    },
    { start: "90000", end: "1000000", title: "Bands Sold" },
    { start: "20", end: "40", title: "States" },
    { start: "10", end: "20", title: "Products" },
  ];

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-[#5E0000] text-3xl font-semibold sm:text-4xl">
              Our customers are always happy
            </h3>
            <p className="mt-3">Here are some figures we achieved.</p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-4xl text-[#FF6B66] font-semibold">
                    {counterOn && (
                      <CountUp
                        start={item.start}
                        end={item.end}
                        duration={5}
                        suffix="+"
                      />
                    )}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};
