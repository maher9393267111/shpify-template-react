import Button from '@mui/material/Button';

import {useState,useEffect} from 'react';
import Nav from '../components/nav';
import Mobilenav from '../components/mobilenav';








const Home = () => {

const [currentnav,setcurrentnav] = useState(<Nav/>);


// change curent nav to mobile nav when screen is less than 600px
useEffect(()=>{
  


window.addEventListener('resize',()=>{

    if(window.innerWidth<888){
        setcurrentnav(<Mobilenav/>);
        console.log("mobile nav");
        console.log(window.innerWidth);
    }
    else{
        setcurrentnav(<Nav/>);
        console.log("desktop nav");
        console.log(window.innerWidth);
    }


})
},[]);



    return (
        <div>

<div>

<div>


{currentnav}




</div>






</div>


            
        </div>
    );
}

export default Home;






