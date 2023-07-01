import shop from "../assets/about-us.jpg";
import mango from "../assets/wristBandLogo.png";

const AboutUs = () => {
  return (
    <div className="m-6 md:m-12 xl:m-20">
      <h1 className="mb-4 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-5xl ">
        About Us
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
        Welcome to Wonder Wristbands Prints, your one-stop shop for all your
        printing needs. We are a group of passionate, committed professionals
        with years of experience in the printing business. Our goal is to offer
        our customers high-quality printing services at a competitive price.
      </p>

      <div className="py-8">
        <div className="container m-auto ">
          <div className="lg:flex flex-row-reverse justify-between items-center gap-12">
            <div className="lg:w-3/4 ">
              <h1 className="mb-4 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl ">
                Our Inspiring Story
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
                services at a competitive price. Our founder, Mr. Jugalkishor
                Malu, was a visionary who founded Wonder Wristbands Prints,
                formerly known as Mangala Enterprises, in 1972. He saw the need
                for dependable and high-quality envelopes for use in radiology
                and general hospitals, and this motivated him to set the
                groundwork for our production and printing business. We added
                multicolor paper files and laminated files to our product lineup
                within a short period of time.
              </p>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
                We made an investment in the technology needed to produce PP
                files, PVC files, plastic files, or non-tearing files as the
                demand for stronger, more durable files grew. Having been in
                this industry for 48 years, Wonder Wristbands Prints is
                delighted to be India's most dependable provider of hospital
                stationary.
              </p>
            </div>
            <div className="lg:w-1/4 order-2">
              <img
                src={mango}
                // style={{
                //   transform:
                //     "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                // }}
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Background */}
      <div className="py-8">
        <div className="container m-auto ">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 ">
              <h1 className="mb-4 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl ">
                More About Us
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
                Mr. Nilesh Malu joined the company in 2005, bringing with him a
                desire to modernize the entire process utilizing the most recent
                printing and production technologies. When re-inventing a
                product, our goal has grown to consider our customers’ needs
                without sacrificing the high quality for which we are known.
                <br />
                <br />
                We now offer a wide variety of products that serve various
                industries. We produce and provide ID wristbands and tags for
                the healthcare and hospital sectors, cutting-edge promotional
                goods for the marketing and events sector, and various bags for
                the retail industry. Additionally, we provide creative and
                professional printing services for magazines, brochures,
                catalogues, and annual reports.
              </p>
            </div>
            <div className="lg:w-5/12 order-2">
              <img
                src={shop}
                // style={{
                //   transform:
                //     "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                // }}
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full ">
        <h1 className="mb-4 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl ">
          Dedicated to Quality and Client Satisfaction
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
          At Wonder Wristbands Prints, we take great pleasure in our dedication
          to quality and client satisfaction. In order to produce the greatest
          products at the most competitive costs, we make use of innovative
          technology and feel out the market needs. We have made a name for
          ourselves in the packaging sector for both for-profit and nonprofit
          goods and products. We are dedicated to providing each and every one
          of our customers with a great experience.
          <br />
          <br />
          We are a team of passionate and dedicated individuals who have years
          of experience in the printing industry. We believe that the key to
          success is through building strong relationships with our clients, and
          we are proud to have built a reputation for excellence in the printing
          industry. We look forward to continuing to serve our clients for many
          more years to come.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
