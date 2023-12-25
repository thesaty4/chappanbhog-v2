import React from "react";
import bgCoverImg from "../../assets/food6.jpg";

const CoverBanner = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    height: "200px",
    width: "100%", 
  };

  return (
    <div style={bgImage}>
      <div  className="h-[200px] flex justify-center items-center text-black">
        <h1 style={{background: 'rgba(255,255,255, 0.6)', padding: 30, borderRadius:50}} className="text-3xl sm:text-4xl font-bold">
          Your Order Will Ready Just 20 Minutes.
        </h1>
      </div>
    </div>
  );
};

export default CoverBanner;
 
