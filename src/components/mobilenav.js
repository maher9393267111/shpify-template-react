import React from 'react';

import {useState, useEffect} from 'react';
import { Button, Drawer, Space } from 'antd';
const logoimage =
  "https://api-seomaster.giraffly.com/commonPublic/shopify_1645508812621478ccee44c4923.jpg";

const Mobilenav = () => {


    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();
  
   
  
    const showLargeDrawer = () => {
      setSize('md');
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };




    return (
        <div className=' h-[66px]'>
            
<div>

    <div className=' justify-between flex'>


        {/* ---logo--- */}


<div>


<div className=' mt-[15px] ml-6 mr-6 w-[120px] h-[60px]'>
    <img src={logoimage} alt="" />
</div>


</div>




{/* -right-side- */}


<div className='mr-12 h-full'>

<div className= '   translate-y-[22px]  self-center flex gap-8'>

{/* -flex- */}

<div
className=' text-bold text-xl'

>
    <h1 className='mt-[2px]'>
        Login
    </h1>
</div>

<div
className=' text-3xl'
>
<i className='   text-3xl' class="fa-solid fa-bars"></i>
</div>






</div>




</div>





    </div>



    <>
      <Space>
       
        <Button type="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        width={window.innerWidth}
        bodyStyle={{ transition: 'all 0.7s' }}
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>


</div>


        </div>
    );
}

export default Mobilenav;
