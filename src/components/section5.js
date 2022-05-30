import React from "react";
import { FiPlay } from "react-icons/fi";
import { Button, Modal } from "antd";
import { useState } from "react";

const Section5 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className=" pb-24">
      <div className=" container">
        <div className=" ml-12 mr-12">
          {/* -flex- */}

          <div className="  justify-between  flex xs:flex-col  lg:flex-row">
            {/* ----left----- */}

            <div className=" xs:w-full lg:w-1/2">
              <div>
                <div>
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/cee-cees-closet/cee-cees-closet-testimonial@desktop-5fc018d38a878b807f8a9997bb86f3ffc29f03d4323b0e32e30c424376e8ed31.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* -right-- */}

            <div className="  xs:min-h-[333px] lg:min-h-auto   xs:w-full lg:w-1/2  bg-[#002e25]">
              <div className=" h-full">
                <div className="xs:translate-y-[12px]  lg:translate-y-[22px]">
                  <h1 className=" text-center w-[60%] m-auto font-bold xs:text-[19px]  lg:text-[26px] text-white">
                    “We’ve been able to build something in 3 years that a lot of
                    brands haven’t actually gotten to in 10 years.”
                  </h1>

                  {/* -logo- */}

                  <div>
                    <div className=" mt-10 mb-10 text-center">
                      <img
                        className="  mx-auto"
                        src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/testimonials/logo-cee-cees-closet-small-bbc2baa973603b707c4d17c8ac77b35b9097174340d500cc757354a7d868c456.png"
                        alt=""
                      />

                      {/* -text- */}

                      <div>
                        <h1 className=" text-white  mt-4 text-[22px]">
                          Chioma | Cee Cee’s Closet NYC
                        </h1>
                      </div>

                      {/* video button- */}

                      <div>
                        <div>
                          <button className=" text-white font-semibold border-2 border-2-white w-[200px] p-2  text-left group transition-all duration-300  hover:text-black hover:bg-white">
                            <span>
                              <FiPlay
                                onClick={showModal}
                                className="text-2xl  mr-2 text-white inline-block group-hover:text-black "
                              />
                            </span>
                            Play video
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -video- ModaL---- */}

        <div>
          <Modal
            maskClosable={false} /// if click outside will not close
            // 354259
            maskStyle={{ backgroundColor: "#354259" }}
            title="Video"
            cancelText=""
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <video
                id="wistia_simple_video_106"
                crossorigin="anonymous"
                poster="https://fast.wistia.com/assets/images/blank.gif"
                aria-label="Video"
                src="blob:https://www.shopify.com/8b2168ec-b756-432f-a1fd-10e6c6566f03"
                controlslist="nodownload"
                playsInline=""
                preload="auto"
                type="video/m3u8"
                x-webkit-airplay="allow"
                style={{
                  display: "block",
                  position: "static",
                  width: "100%",
                  height: "auto",
                  margin: "0 auto",
                  objectFit: "fill",
                  background: "transparent",
                }}
                //   style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: fill;"
              >
                {/* <track kind="captions" label="English" srclang="eng" src="https://fast.wistia.net/embed/captions/qfcu6lt69y.vtt?language=eng"/> */}
              </video>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Section5;
