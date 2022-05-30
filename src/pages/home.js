import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import Nav from "../components/nav";
import Mobilenav from "../components/mobilenav";
import Mainsection from "../components/mainsection";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";
import Section6 from "../components/section6";
import Footer from "../components/footer";

const Home = () => {
  const [currentnav, setcurrentnav] = useState(<Nav />);

  // change curent nav to mobile nav when screen is less than 600px
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 888) {
        setcurrentnav(<Mobilenav />);
        console.log("mobile nav");
        console.log(window.innerWidth);
      } else {
        setcurrentnav(<Nav />);
        console.log("desktop nav");
        console.log(window.innerWidth);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <div>{currentnav}</div>
      </div>

 {/* ------main section--- */}
<div className=" main-sec" >

<div className=" ">



<Mainsection/>

</div>



{/* -----section2- */}


<div>


<Section2/>


</div>


{/* -section 3-- */}


<div>

 <Section3/>
</div>


<div>

  <Section4/>
</div>

<div>
  <Section5/>
</div>


<div>

<Section6/>

</div>


<div>


  <Footer/>
</div>



</div>



    </div>
  );
};

export default Home;
