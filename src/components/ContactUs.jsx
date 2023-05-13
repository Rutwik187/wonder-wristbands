export default () => {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  return (
    <main className="flex overflow-hidden" id="contact-us">
      <div className="flex-1 hidden lg:block">
        <img
          src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-[#5E0000] text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3">
              We’d love to hear from you! Please fill out the form bellow.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 mt-12 lg:pb-12"
          >
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>

              <input
                type="number"
                placeholder="+1 (555) 000-000"
                required
                className="w-full px-2 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#FF6B66] duration-150 hover:bg-[#FE5650] active:bg-[#FF0800] rounded-lg ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
