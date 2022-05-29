import React from "react";

const Mainsection = () => {
  return (
    <div className="mb-12 mt-12 ml-6 mr-6 ">
      {/* -grid-         */}
      <div className="  grid  grid-cols-12 ">
        {/* -left- */}

        <div className=" xs:col-span-12    mb-12 lg:col-span-4">
          <div className=" container">
            {/* -----content---- */}

            <div className=" lg:ml-6 mr-6 wrapper-content  ">
              {/* -header- */}

              <div>
                <h1 className=" font-bold text-[#004c3f] ml-4  xs:text-[32px]  lg:text-[48px]">
                  The platform commerce is built on
                </h1>

                {/* ---subheader- */}

                <div className=" ml-4 mb-4">
                  <h2 className=" text-[#687771] xs:text-[18px] lg:text-[20px]">
                    Millions of the world's most successful brands trust Shopify
                    to sell, ship and process payments anywhere.
                  </h2>
                </div>
              </div>

              {/* ------form- */}

              <div className=" ml-6">
                <form className=" mb-4">
                  <div className=" flex w-full     xs:flex-row lg:flex-col">
                    <div className=" lg:w-full xs:w-[77%]  ">
                      <input
                        className="

  block w-[80%] p-[9px]   rounded-md


border-2 outline-black border-[#354259] focus:border-[#008060]  
focus:outline-none focus:shadow-outline    "
                        placeholder="Enter your email address"
                        type="email"
                      />
                    </div>

                    <div className=" xs:w-1/2 lg:w-full">
                      <button className=" xs:mt-[-6px]  font-bold text-white text-xl h-full lg:mt-2 p-4 lg:w-[88%]  xs:w-[66%] bg-[#008060] hover:bg-[#687177]">
                        Start free trial
                      </button>
                    </div>
                  </div>
                </form>
{/* --son- */}


<div>
    <p
    className=" text-[12px]"
    >Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
</div>


              </div>
            </div>
          </div>
        </div>

        {/* -right--- */}

        <div className=" 
        xs:col-span-12  
          xs:mb-12 lg:mb-0
        lg:col-span-8">


<div>



{/* -image- wrapper-- */}


<div
className=" w-[87%]  ml-[40px] xs:mt-12 lg:mt-0"

>

    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/en/hero-product@tablet-dcee1276b5e044d7e201cd88922474aa3676c3133222b6946a578f01f5367589.png" alt="" />
</div>


</div>



        </div>
      </div>
    </div>
  );
};

export default Mainsection;
