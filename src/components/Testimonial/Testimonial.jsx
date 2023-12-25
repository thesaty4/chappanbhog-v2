import React from "react";
import Slider from "react-slick";
import Shivam from "../../assets/owner/shivam.jpeg";
import Adarsh from "../../assets/owner/adarsh.jpeg";

const testimonialData = [
  {
    id: 1,
    name: "Shivam Dubey",
    text: `At Chhappanbhog, we're devoted to delivering an extraordinary culinary experience centered on unparalleled quality. Our philosophy is simple: exceptional taste, uncompromised quality. Join us on a gastronomic journey. Thank You !`,
    img: Shivam,
  },
  {
    id: 2,
    name: "Adarsh Dubey",
    text: `We meticulously source the finest ingredients, ensuring that each dish is a testament to our commitment to excellence. From farm to table, every step is a celebration of flavor, crafting a menu that transcends expectations. Thank You !`,
    img: Adarsh,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div
        id={"about"}
        data-aos="fade-up"
        data-aos-duration="300"
        className="py-10"
      >
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our team say!
            </p>
            <h1 className="text-3xl font-bold">OWNER</h1>
            <p className="text-xs text-gray-400">
              We are two brothers who have started this business with the aim of
              offering the finest quality food. Please give us the opportunity
              to enhance your dining experience and bring joy to your table.{" "}
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                        width={200}
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
