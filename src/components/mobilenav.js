import React from "react";

import { useState, useEffect } from "react";
import { Button, Drawer, Space } from "antd";

import { Collapse } from "antd";
const { Panel } = Collapse;

const logoimage =
  "https://api-seomaster.giraffly.com/commonPublic/shopify_1645508812621478ccee44c4923.jpg";

const Mobilenav = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setSize("md");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className=" h-[66px]">
      <div>
        <div className=" justify-between flex">
          {/* ---logo--- */}

          <div>
            <div className=" mt-[15px] ml-6 mr-6 w-[120px] h-[60px]">
              <img src={logoimage} alt="" />
            </div>
          </div>

          {/* -right-side- */}

          <div className="mr-12 h-full">
            <div className="   translate-y-[22px]  self-center flex gap-8">
              {/* -flex- */}

              <div className=" text-bold text-xl">
                <h1 className="mt-[2px]">Login</h1>
              </div>

              <div className=" text-3xl">
                <i
                  onClick={showLargeDrawer}
                  className=" 


text-3xl"
                  class="fa-solid fa-bars"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <>
          <Space></Space>
          <Drawer
            title={`  Shopify`}
            placement="right"
            width={window.innerWidth}
            bodyStyle={{ transition: "all 0.7s", marginTop: "2px" }}
            onClose={onClose}
            visible={visible}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="primary" onClick={onClose}>
                  OK
                </Button>
              </Space>
            }
          >
            {/* -content- */}

            <div className=" ml-4">
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                onChange={onChange}
              >
                <Panel className="font-bold text-2xl  " header=" Start" key="1">
                  <div>
                    <ul className=" text-xl ">
                      <li className="  mb-2">Start your buisness</li>

                      <li className="  mb-2">
                        <Collapse
                          bordered={false}
                          defaultActiveKey={["1"]}
                          onChange={onChange}
                        >
                          <Panel
                            className="font-bold text-2xl  "
                            header=" Branding"
                            key="1"
                          >
                            <div>
                              <p className=" text-[17px] text-[#687771]">
                                Look professional and help customers connect
                                with your business
                              </p>

                              <ul>
                                <li className=" mb-2">
                                  buisness name generator
                                </li>

                                <li>Logo Maker</li>
                              </ul>
                            </div>
                          </Panel>
                        </Collapse>
                      </li>

                      <li className="  mb-2">
                        <Collapse
                          bordered={false}
                          defaultActiveKey={["1"]}
                          onChange={onChange}
                        >
                          <Panel
                            className="font-bold text-2xl  "
                            header="     online presence"
                            key="1"
                          >
                            <div>
                              <p className=" text-[17px] text-[#687771]">
                                Find a domain, explore stock images, and amplify
                                your brand
                              </p>

                              <ul>
                                <li className=" mb-2">Domain name</li>

                                <li>Stock photography</li>
                              </ul>
                            </div>
                          </Panel>
                        </Collapse>
                      </li>

                      <li className="  mb-2">store set up</li>
                    </ul>
                  </div>
                </Panel>
              </Collapse>

              {/* -collapse 2 sell- */}

              <div>
                <Collapse
                  bordered={false}
                  defaultActiveKey={["1"]}
                  onChange={onChange}
                >
                  <Panel
                    className="font-bold text-2xl  "
                    header=" Sell"
                    key="1"
                  >
                    <div>
                      <ul>
                        <li>
                          <p>sell anywhere</p>
                        </li>

                        <li>
                          <Collapse
                            bordered={false}
                            defaultActiveKey={["1"]}
                            onChange={onChange}
                          >
                            <Panel
                              className="font-bold text-2xl  "
                              header="Online store"
                              key="1"
                            >
                              <div>
                                <p className=" text-[17px] text-[#687771]">
                                  Look professional and help customers connect
                                  with your business
                                </p>

                                <ul className="ul-li">
                                  <li className=" mb-2">Overview</li>

                                  <li>Features</li>

                                  <li>Examples</li>

                                  <li>Themes</li>
                                </ul>
                              </div>
                            </Panel>
                          </Collapse>
                        </li>

                        {/* --------- */}

                        <li>
                          <Collapse
                            bordered={false}
                            defaultActiveKey={["1"]}
                            onChange={onChange}
                          >
                            <Panel
                              className="font-bold text-2xl  "
                              header="POINT OF SALE"
                              key="1"
                            >
                              <div>
                                <p className=" text-[17px] text-[#687771]">
                                  Sell at retail locations, pop-ups, and beyond
                                </p>

                                <ul className="ul-li">
                                  <li className=" mb-2">Overview</li>

                                  <li>Hardware</li>

                                  <li>Features</li>

                                  <li>Themes</li>

                                  <li>Pricing</li>
                                </ul>
                              </div>
                            </Panel>
                          </Collapse>
                        </li>
                        <li>
                          <p>sell anywhere</p>
                        </li>
                        <li>
                          <p>sell anywhere</p>
                        </li>
                      </ul>
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Mobilenav;
