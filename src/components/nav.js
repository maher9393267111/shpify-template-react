import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


  import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';


const logoimage =
  "https://api-seomaster.giraffly.com/commonPublic/shopify_1645508812621478ccee44c4923.jpg";


const Nav = () => {
  const [tog1, settog1] = useState(false);
  const [tog2, settog2] = useState(false);
  const [togglecontentone, settogglecontentone] = useState(false);

  const togglehandle = () => {
    settog1(!tog1);
    console.log("one clicked");

    if (tog1) {
      settog2(false);
    }
  };

  const togglehandle2 = (content) => {
    settog2(!tog2);
    settogglecontentone(content);
    console.log(togglecontentone);
    console.log("clicked");
  };

  const togglecontentonehandle = () => {
    settogglecontentone(!togglecontentone);
    console.log("clicked");
  };

  return (
    <div>
      <div className="   grid gap-8  grid-cols-12">
        {/* -leftside-- */}

        <div className="ml-8 col-span-6  bg-gree">
          {/* ----flex logo and ul-- */}

          <div className=" flex gap-8 mt-[12px]">
            {/* --logo- */}

            <div>
              <div className=" w-[121px] h-[55px]">
                <img className="  object-cover" src={logoimage} alt="" />
              </div>
            </div>

            {/* ----logo end- */}

            {/* --items-nav- */}
            <div className=" mr-4    flex-1">
              <div>
                <ul className=" font-bold text-xl slf-center   transform translate-y-3   justify-between flex">
                  {/* -----one-- */}
                  <li className="  relative">
                    <div onClick={togglehandle} className=" relative">
                      start{" "}
                      <span>
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </div>

                    {/* -----toggle One- */}

                    {tog1 && (
                      <div className=" absolute togg1    min-w-min-[200px] ">
                        {/* content in tog1- */}

                        <div className=" container content mt-[33px] ">
                          {/* -header- */}

                          <div className="  font-semibold w-[80%] mt-[22px]  border-b-2 border-b-black  p-3">
                            <h1>Start your business</h1>
                          </div>

                          {/* --lists- */}

                          <div>
                            <ul className=" font-mono mt-4 w-[88%]">
                              <li className=" mb-2">
                                <div className="  flex justify-between">
                                  <div
                                    className="   cursor-pointer"
                                    onClick={(e) => togglehandle2("branding")}
                                  >
                                    <h1>Branding</h1>
                                  </div>

                                  {/* -arrow- */}
                                  <div>
                                    <span>
                                      <i class="fa-solid fa-chevron-right"></i>
                                    </span>
                                  </div>
                                </div>
                              </li>

                              <li className=" mt-2">
                                <div className="  flex justify-between">
                                  <div>
                                    <h1
                                      className=" cursor-pointer"
                                      onClick={(e) => togglehandle2("online")}
                                    >
                                      online presence
                                    </h1>
                                  </div>

                                  {/* -arrow- */}
                                  <div>
                                    <span>
                                      <i class="fa-solid fa-chevron-right"></i>
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className=" mt-2">
                                <div className="  flex justify-between">
                                  <div>
                                    <h1
                                      className=" cursor-pointer"
                                      onClick={(e) => togglehandle2("store")}
                                    >
                                      store setup
                                    </h1>
                                  </div>

                                  {/* -arrow- */}
                                  <div>
                                    <span>
                                      <i class="fa-solid fa-chevron-right"></i>
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* --subtoggle one--- */}

                    {/* { tog2 &&   */}

                    <motion.div
                      // if togg2 is true make it visible and come from -220px to 0px else make it invisible and come from 0px to -220px

                      animate={{ x: tog2 ? 0 : -220, opacity: tog2 ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className=" togg2">
                        <div>
                          {/* -content well change- */}

                          {/* --vbranding- */}

                          {togglecontentone === "branding" && (
                            <div className="flex flex-col">
                              {/* -header- */}

                              <div className=" header w-full">
                                <p className=" text-[15px] float-left ml-4 mt-4">
                                  Look professional and help customers connect
                                  with your business
                                </p>
                              </div>

                              {/* --content-- */}

                              <div className=" ml-4 text-[15px] mt-[20px]">
                                <div>
                                  <p>business name generator</p>
                                </div>

                                <div>
                                  <p>logo maker</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* --------------------------------------------------- */}

                          {/* --vonline- */}

                          {togglecontentone === "online" && (
                            <div>
                              <div className="flex flex-col">
                                {/* -header- */}

                                <div className=" header w-full">
                                  <p className=" text-[15px] float-left ml-4 mt-4">
                                    Look professional and help customers to buy
                                    Online
                                  </p>
                                </div>

                                {/* --content-- */}

                                <div className=" ml-4 text-[15px] mt-[20px]">
                                  <div>
                                    <p>business online with customer</p>
                                  </div>

                                  <div>
                                    <p>online conversion</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* --vstore- */}

                          {togglecontentone === "store" && (
                            <div>
                              <div className=" flex flex-col mt-6 pt-6 justify-between text-[16px]  ml-4">
                                <div>
                                  <p>
                                    Use Shopify’s powerful features to start
                                    selling
                                  </p>
                                </div>

                                <div>
                                  <p>products to sell</p>

                                  <p>store them</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* } */}

                    {/* ----------------------- */}
                  </li>

                  {/* //------------ */}

                  <li>sell</li>
                  <li>
                      

            <div>
                
              


                <Menu
         
                offsetY={66}
                offsetX={-10}
         
                
                menuButton={<MenuButton>

<h1 className=" font-bold">
    Market
</h1>

                </MenuButton>}>

                    <div>
                        <header className=" font-semibold pb-4 border-b-black border-b-2 mb-4">
                            MARKET YOUR BUISNESS
                        </header>
                    </div>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
        </Menu>


                </div>          
                      
                      
                      
    
    
    
    
    
    </li>
                  <li>manage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* -----rightside---- */}

        <div className="  col-span-6">



<div className=" container">


{/* -----content- */}
<div className=" list-cont">


{/* -flex- */}
<div className=" gap-14  font-semibold text-xl self-center  ml-20 flex  mt-[20px]">


{/* ----pricing- */}

<div>

  <p>pricing</p>
</div>



{/* -learn- */}


<div>

 
<div>
<Menu
         
         offsetY={66}
         offsetX={-10}
  
         
         menuButton={<MenuButton>

<h1 className=" font-bold">
  Learn <span> <i class="fa-solid fa-chevron-down"></i> </span>
</h1>

         </MenuButton>}>

     <MenuItem>blog</MenuItem>
     <MenuItem>buisness courses</MenuItem>
     <MenuItem>guides</MenuItem>
     <MenuItem>shopify community</MenuItem>
     <MenuItem> free tools</MenuItem>
     <MenuItem>prodcasts</MenuItem>
     <MenuItem>community events</MenuItem>
 </Menu>

</div>


</div>


<div>

  Login
</div>



<div>

  <p>
    <button
    className ='p-[5px]  text-white font-bold w-[166px]  hover:bg-black  bg-[#008060]'
    
    >free trial</button>
  </p>
</div>




</div>

{/* ----flex end- */}







</div>




</div>


        </div>
      </div>
    </div>
  );
};

export default Nav;
