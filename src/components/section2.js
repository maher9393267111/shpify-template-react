import React from "react";
import { section2data, two } from "./data";
import image1 from "./images/house.svg";
const Section2 = () => {
  return (
    <div className="  pb-[90px] pt-[44px] mb-12">
      <div className=" bg-[#004c3f] w-full ">
        {/* ---content wrapper-- */}

        <div className=" ml-[88px] mr-[66px]">
          <div className="wrapper ">
            <div className="pt-[100px] ">
              <h1 className=" text-semibold lg:text-[40px] xs:text-[28px]  text-white">
                Bring your business online
              </h1>

              <div>
                <p className="text-white text-[17px]">
                  Create an ecommerce website backed by powerful tools that help
                  you find customers, drive sales, and manage your day-to-day.
                </p>
              </div>
            </div>

            {/* -cards--- */}

            <div>
              <div className=" grid xs:grid-cols-2 gap-4 md:grid-cols-3  md:h-[411px] mdg:h-[480px] md:overflow-hidden lg:grid-cols-4 lg:h-auto">
                {section2data?.map((item) => (
                  <div className="">
                    <div>
                      <img src={item?.image} alt="" />
                    </div>

                    <div className=" mt-4 text-[14px]  font-semibold   text-white  ">
                      <p>{item?.tags}</p>

                      <p>{item?.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ------second row---- */}

              <div className=" mt-[165px]">
                <div className="wrapper ">
                  {/* -header- */}

                  <div>
                    <h1 className=" font-semibold text-[24px] text-white">
                      Take the best path forward
                    </h1>
                  </div>

                  {/* -grid- */}

                  <div className="  map-2   grid xs: grid-coils-1 md:grid-cols-2 lg:grid-cols-4  mt-12">
                    {two.map((item) => (
                      <div>
                        <div>
                          <p className=" text-[25px] text-white">{item.icon}</p>
                        </div>

                        <div className="  text-white text-semibold">
                          <h1 className=" font-bold text-white text-[19px] ">
                            {item.text}
                          </h1>

                          <p className=" w-[80%]">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
