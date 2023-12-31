import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import SwiperComponent from './components/Services/Swiper';
import { English ,Arabic } from './data';

function App() {
  const [isChecked, setChecked] = useState(false);
  const [content,setcontent] = useState(English);

  const handleSwitchChange = () => {
    setChecked(!isChecked);
  };
React.useEffect(()=>{
 
  if(isChecked) {
    setcontent(Arabic)
  }
  if(!isChecked){
    setcontent(English)
  }

} ,[isChecked])


  return (
    <div style={{ backgroundColor: '#212529', minHeight: '100vh'   }}>
     <div className='mb-3'>
     <Header
        data={content[4]}
        setChecked={setChecked}
        isChecked={isChecked}
        handleSwitchChange={handleSwitchChange}
      />

     </div>
   
    
    <div className='mt-4'>
    <AboutUs data={content[0]}  isChecked={isChecked} />
    </div>
      <Services data={content[1]} />
      <SwiperComponent data={content[2]} />
      <Contact data={content[3]} />
    </div>
  );
}

export default App;
