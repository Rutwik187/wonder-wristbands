export default () => {
  const stats = [
    {
      data: "3K+",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Bands Sold",
    },
    {
      data: "40+",
      title: "States",
    },
    {
      data: "30+",
      title: "Products",
    },
  ];

  return (
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
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
