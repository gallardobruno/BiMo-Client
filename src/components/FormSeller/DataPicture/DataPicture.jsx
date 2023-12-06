// import React, { useEffect } from 'react';

// import './StyleDP.css';

// function DataPicture() {
//   useEffect(() => {
//     const dropZone = document.getElementById('dropZone');
//     const preview = document.getElementById('preview');

//     dropZone.addEventListener("dragover", function(e) {
//       e.preventDefault();
//     });

//     dropZone.addEventListener("drop", function(e) {
//       e.preventDefault();
//       const file = e.dataTransfer.files[0];

//       if (file.type.match('image.*')) {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = function(e) {
//           preview.src = e.target.result;
//           preview.style.display = 'block';
//         };
//       } else {
//         alert('El archivo no es una imagen válida');
//       }
//     });
//   }, []);

//   return (
//     <div id='f-s'>
//       <div id='dropZone'>Arrastra una imagen aquí</div>
//       <img id='preview' src='' alt='Vista previa de la imagen' />
//     </div>    
//   );
// }

// export default DataPicture