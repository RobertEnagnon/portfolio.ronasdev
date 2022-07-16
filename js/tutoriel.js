const tutoriel = async (baseUrl) => {
    const $url = baseUrl+"backend/tutoriel.php";

    let tutoriels = document.querySelector('#tutoriels')

    await fetch($url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        
        data.forEach(elt => {
            
            // Tutoriel wrap
            let item = document.createElement('div');
            item.setAttribute('class', 'item mx-3');

            let created_at = `${new Date( elt.created_at).getDate()}/${new Date( elt.created_at).getMonth()}/${new Date( elt.created_at).getFullYear()}}` 
            item.innerHTML = `
                            <div class="tutoriel-item">
                                <!-- L'entete qui presente la video -->
                                    <div class="tutoriel-info-box" id="tutoFrame" title="Doublez cliquer pour agrandir"> 
                                    <!-- Le contenu de la balise frame -->
                                        <p  title="Doublez cliquer pour agrandir">
                                        ${ elt.frame}
                                        </p>
                                        <!-- La categorie -->
                                        <ul id="categorie">
                                            <li class="font-size-16 font-rubik-italic"><i class="fa fa-box" aria-hidden="true"></i> ${ elt.name} </li>
                                        </ul>
                                    </div>
                                    <!-- Le corps qui presente la description -->
                                    <div class="tutoriel-body" id="tutoBody">
                                        <!-- Le titre de la video -->
                                        <div class="tutoriel-title-m">
                                            <h6 class="font-size-16 font-baloo" id="title"><a class="text-gray t1" target="_blank" href=" ${ elt.lien}"> ${ elt.title}</a></h6>
                                        </div>
                                        <!-- La description de la video -->
                                        <div class="inventory_info_m" id="description">
                                            <p> ${ elt.description}</p>
                                        </div>
                                    </div>
                                    <!-- Le pied de la page -->
                                    <div class="tutoriel-footer" id="tutoFooter">
                                        <a class="next target="_blank"  font-size-16" href="${ elt.lien}">Découvrir <i class="fas fa-arrow-right"></i> </a>
                                        <span class="create"><small>Mise en ligne  le ${ created_at} </small></span> 
                                    </div>
                            </div>
                        `;

            tutoriels.appendChild(item)
        });

        // Tutoriels youtube
        $(".owl-carousel").owlCarousel({
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                916:{
                    items:3
                }

            },
            loop: true,
            nav: true,
            autoplay:true,
            autoplayHoverPause:true,
            dots:true,
            lazyLoad:true,
            autoplayTimeout: 3000,
            video:true,
            navText: ['Précedent','Suivant'],
        });


    })
    .catch((err)=>{
        console.log(err);
    })
}

export default tutoriel;