import React from 'react';
import { useRef} from 'react'
const Section3 = () => {


     
        const vidRef = useRef(null);
        const handlePlayVideo = () => {
          vidRef.current.play();

          // stop if video is playing
            // vidRef.current.onended = () => {
            //     console.log("video ended");
            //     vidRef.current.pause();
            //     }
        }


    return (
        <div className=' mx-[30px] pb-28 pt-2'>
            
<div className=' container'>

{/* -header- */}


<div>

<div className=' w-[70%] mx-auto text-center'>



<h1 className='  xs:text-[30px] lg:text-[40px]'>
With you wherever you’re going 
</h1>


<div className='w-[77%] mx-auto'>
<p className=' pt-4  sm:text-[15px]  lg:text-[22px]'>
One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.
</p>
</div>




</div>

</div>




{/* ------video section-- */}

<div>


{/* -grid- */}


<div className=' grid  xs:grid-cols-1  lg:grid-cols-2 '>


{/* ---- left- */}
<div>
<div>

<video
type="video/mp4"


ref={vidRef}

autoPlay loop src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/sell-animation-desktop-1b186d853b04bce6dbc12bb63bd5bc4bc1ff60cd1a06fd12f85261c8acc66d0a.webm"></video>


</div>

</div>



{/* -right-- */}


<div>

<div className=' container'>


    <div>

{/* --header---- */}


<div className=' translate-y-[80px]'>


{/* ------click video- */}

<div>
    <button
    className=' bg-green-600 text-white text-bold rounded-full p-2'
    onClick={handlePlayVideo}
    >
        Play Video
    </button>
</div>

    <h1 className=' xs:text-[33px] lg:text-[40px]'> 
    Sell everywhere
    </h1>

<div className=' lg:w-[88%] text-[#0687177]  text-[17px] '>
    <p>
    Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online marketplaces.
    </p>
</div>


<div>

    <p className=' text-bold text-xl font-bold text-[#008060]'>
    Explore ways to sell <span>arrow</span>
    </p>
</div>


</div>






    </div>






</div>



</div>





</div>


</div>





</div>




        </div>
    );
}

export default Section3;
