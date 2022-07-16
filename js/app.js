import manipulation from "./manipulationDOM.js";
import contact from "./contact.js";
import tutoriel from "./tutoriel.js";

$(document).ready(function(){
    const baseUrl = "http://localhost/oneByDay/ronsjsportfolio/";

    // GEstion du DOM
    manipulation();

    // gestion de contact
    const contactSubmit = document.querySelector('#btn-submit');
    contactSubmit.addEventListener('click',e => {
       
        e.preventDefault();
        contact(baseUrl);
       
    }); 

    // Gestion des tutoriels
    tutoriel(baseUrl);

  
    
})