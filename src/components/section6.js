import React from "react";

const images = [
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/cee-cees-closet-small-1d6b515579404482342748f0b67ff6e09836a47b648250d8d1b00e2a24b29faa.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/nalata-nalata-small-b5cd674cc9203997e3a72f2726c8aaa3d594a27c2f69001b4ad833939e9af5ce.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/kirrin-finch-small-b85f000eede1716da6a496a95ff3836b300b5beaa57617ab834332b675ede0d6.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/tokyo-bike-small-2295b7e1d183bae07eb36ad83451ec624cfe61bbec39e85877d40600f22115b2.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/meso-goods-small-d5c7243d2e6e1e1677b5648f1e672701476c5df7d516a131013a46c7721c98b4.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/coco-and-breezy-small-3cc3c1f7d5c50000624adec29ce71dae453821ce3813f0e34b2d3351b5f2b4b2.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/brooklyn-museum-small-3cbca35150e701329098cd95f21ec9388886479a5f781a515466b59d80d7b5bb.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/brooklyn-museum-small-3cbca35150e701329098cd95f21ec9388886479a5f781a515466b59d80d7b5bb.png",
  "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/adore-me-small-b4e6488ccabc61cdaaf92d931a5b8a591a35d55982a796a5b582924a9563afb1.png",
];

const Section6 = () => {
  return (
    <div className=" pb-20">
      <div className=" container">
        <div>
          {/* -flex images- */}

          <div className=" flex gap-4   flex-wrap justify-center  ">
            {images.map((image, index) => {
              return (
                <div className="w-[100px] mb-6">
                  <div>
                    <img src={image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

{/* -----section- */}


<div>


<div className=" container">




{/* --grid- */}


<div className=" grid  xs:grid-cols-1  lg:grid-cols-2">



{/* ----left---- */}


<div>


{/* -content- */}


<div className=" ml-8">

{/* -headere-- */}


<div className=" mb-12 ">
    <h1 className=" xs:text-[30px] font-semibold lg:text-[40px]">
    Get the help you need, every step of the way
    </h1>
</div>


{/* -bot- */}


<div>

{/* -flex- */}



<div className="flex xs:flex-col lg:flex-row flex-wrap">




{/* 1--- */}

<div className="  lg:w-1/2">

<div>

{/* -main- */}


<div className=" main">
    <h3>
    Shopify support
    </h3>

    <div>
        <p>
        Contact support 24/7, whether you’re troubleshooting issues or looking for business advice. 
        </p>
    </div>

<div className="ch">
    <h4>
       Contact us 
    </h4>
</div>

</div>


</div>



</div>

{/* 2- */}
<div className="lg:w-1/2">


<div>

{/* -main- */}


<div className=" main">
    <h3>
    Shopify App Store
    </h3>

    <div>
        <p>
        Add features and functionality to your business with 6,000+ apps that integrate directly with Shopify. 
        </p>
    </div>

<div className="ch">
    <h4>
       Visit our App Store
    </h4>
</div>

</div>


</div>




</div>



{/* 3--- */}


<div className="w-1/2">
<div>

{/* -main- */}


<div className=" main">
    <h3>
    Shopify Experts Marketplace
    </h3>

    <div>
        <p>
       .Hire a Shopify expert to help you with everything from store setup to SEO. 
        </p>
    </div>

<div className="ch">
    <h4>
    Explore the Shopify Experts Marketplace 
    </h4>
</div>

</div>


</div>




</div>


</div>



</div>




</div>


</div>


{/* -right- */}


<div>

<div>
    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/help@desktop-9a31a38edab7cba3389c5d71eccb81ab32d24e0eeb40c8eac3568d98bc179e1e.jpg" alt="" />
</div>


</div>

</div>



</div>





</div>




    </div>
  );
};

export default Section6;
