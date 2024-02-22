import  { useState } from 'react';



const Alert = () => {
 // Creamos un estado separado para cada tarjeta
 const [liked1, setLiked1] = useState(false);
 const [liked2, setLiked2] = useState(false);
 const [liked3, setLiked3] = useState(false);
 const [liked4, setLiked4] = useState(false);


 // Funciones para manejar el clic en cada tarjeta
 const toggleLike1 = () => {
   setLiked1(!liked1);
 };
 const toggleLike2 = () => {
   setLiked2(!liked2);
 };
 const toggleLike3 = () => {
   setLiked3(!liked3);
 };
 const toggleLike4 = () => {
   setLiked4(!liked4);
 };


 return (
   <div className="cards-container">
     <h5 className='text'>Novedades</h5>
     {/* Tarjeta 1 */}
     <div className="card">
       <div className="card-image">
         <img src="https://phantom-expansion.unidadeditorial.es/fb2ddf9d2efba27cbb6b688e68514e0b/resize/640/assets/multimedia/imagenes/2023/03/28/16799981394294.jpg" alt="Illustration" />
       </div>
       <div className="card-content">
         <div className="heading"> Atico de alquiler en ... </div>
         {/* Toggle para el primer corazón */}
         <div className={`heart-icon ${liked1 ? 'liked' : ''}`} onClick={toggleLike1}>
           &#x2764;
         </div>
       </div>
     </div>


     {/* Tarjeta 2 */}
     <div className="card">
       <div className="card-image">
         <img src="https://phantom-expansion.unidadeditorial.es/fb2ddf9d2efba27cbb6b688e68514e0b/resize/640/assets/multimedia/imagenes/2023/03/28/16799981394294.jpg" alt="Illustration" />
       </div>
       <div className="card-content">
         <div className="heading"> Atico de alquiler en ... </div>
         {/* Toggle para el segundo corazón */}
         <div className={`heart-icon ${liked2 ? 'liked' : ''}`} onClick={toggleLike2}>
           &#x2764;
         </div>
       </div>
     </div>


     {/* Tarjeta 3 */}
     <div className="card">
       <div className="card-image">
         <img src="https://phantom-expansion.unidadeditorial.es/fb2ddf9d2efba27cbb6b688e68514e0b/resize/640/assets/multimedia/imagenes/2023/03/28/16799981394294.jpg" alt="Illustration" />
       </div>
       <div className="card-content">
         <div className="heading"> Atico de alquiler en ... </div>
         {/* Toggle para el tercer corazón */}
         <div className={`heart-icon ${liked3 ? 'liked' : ''}`} onClick={toggleLike3}>
           &#x2764;
         </div>
       </div>
     </div>


     {/* Tarjeta 4 */}
     <div className="card">
       <div className="card-image">
         <img src="https://phantom-expansion.unidadeditorial.es/fb2ddf9d2efba27cbb6b688e68514e0b/resize/640/assets/multimedia/imagenes/2023/03/28/16799981394294.jpg" alt="Illustration" />
       </div>
       <div className="card-content">
         <div className="heading"> Atico de alquiler en ... </div>
         {/* Toggle para el cuarto corazón */}
         <div className={`heart-icon ${liked4 ? 'liked' : ''}`} onClick={toggleLike4}>
           &#x2764;
         </div>
       </div>
     </div>
   </div>
 );
};


export default Alert;