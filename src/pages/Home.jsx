// import React, {useEffect} from 'react';
// import Navbar from '../components/Navbar';
// import BG2 from '../assets/doctor-main.png';
// import BG3 from '../assets/dotor-certificates.png';
// import BG from '../assets/doctor-contacts.png'
// import { ParallaxMain } from "../components/ParallaxMain.tsx";
// import {useTranslation} from "react-i18next";
//
// const slides = [
//     {
//         id: 0,
//         title: ['Medical', 'Center'],
//         subtitle: 'More than 10 years of medical practice and thousands of satisfied patients. Vladislav Medical Clinic provides a wide range of services: from professional teeth cleaning to laser surgeries',
//         image: BG2
//     },
//     {
//         id: 1,
//         title: ['Out of', 'White'],
//         subtitle: 'We believe that white is banal and boring. We are supporters of a non-standard approach. Even the design of our website is made in dark colors',
//         image: BG3
//     },
//     {
//         id: 2,
//         title: ['Contact', 'Us'],
//         subtitle: 'Our technical support and reception specialists will help you with any questions: from employment to making an appointment with a doctor',
//         image: BG
//     }
// ];
//
// const Home = () => {
//     const [t] = useTranslation();
//
//     useEffect(() => {
//         document.title = `${t('titles.home')} | VMC`;
//     }, [t]);
//
//     return (
//         <>
//             <Navbar />
//             <div className={`scrolled-mandatory`}>
//                 {slides.map(slide =>
//                     <ParallaxMain id={slide.id} img={slide.image} title={t(`home.title${slide.id + 1}`, {returnObjects: true})} subtitle={t(`home.subtitle${slide.id + 1}`)} key={slide.id}/>
//                 )}
//             </div>
//         </>
//     );
// }
//
// export default Home;
//
//

   import React, { useEffect, useRef, useState } from 'react';
   import Navbar from '../components/Navbar';
   import BG2 from '../assets/doctor-main.png';
   import BG3 from '../assets/dotor-certificates.png';
   import BG from '../assets/doctor-contacts.png';
   import { ParallaxMain } from "../components/ParallaxMain.tsx";
   import { useTranslation } from "react-i18next";
   import backgroundMusic from '../assets/background-music.mp3'; // Импортируйте аудио файл

   const slides = [
       {
           id: 0,
           title: ['Medical', 'Center'],
           subtitle: 'More than 10 years of medical practice and thousands of satisfied patients. Vladislav Medical Clinic provides a wide range of services: from professional teeth cleaning to laser surgeries',
           image: BG2
       },
       {
           id: 1,
           title: ['Out of', 'White'],
           subtitle: 'We believe that white is banal and boring. We are supporters of a non-standard approach. Even the design of our website is made in dark colors',
           image: BG3
       },
       {
           id: 2,
           title: ['Contact', 'Us'],
           subtitle: 'Our technical support and reception specialists will help you with any questions: from employment to making an appointment with a doctor',
           image: BG
       }
   ];

 const Home = () => {
       const [t] = useTranslation();
       const audioRef = useRef(null);
       const [isPlaying, setIsPlaying] = useState(false);

       useEffect(() => {
           document.title = `${t('titles.home')} | VMC`;
       }, [t]);

       const handlePlay = () => {
           if (audioRef.current) {
               audioRef.current.play();
               setIsPlaying(true);
           }
       };

       return (
           <>
               <Navbar />
               <div className={`scrolled-mandatory`}>
                   {slides.map(slide =>
                       <ParallaxMain id={slide.id} img={slide.image} title={t(`home.title${slide.id + 1}`, { returnObjects: true })} subtitle={t(`home.subtitle${slide.id + 1}`)} key={slide.id} />
                   )}
               </div>
               <audio ref={audioRef} src={backgroundMusic} loop />
               {!isPlaying && (
                   <button onClick={handlePlay} className="play-button">
                       P
                   </button>
               )}
           </>
       );
   }

   export default Home;