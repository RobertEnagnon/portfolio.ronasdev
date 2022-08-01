const work = async (baseUrl) => {
    const $url = baseUrl+"backend/work.php";

    let works = document.querySelector('#works')
    let boite = document.querySelector('#boite');

    const $headers =  {
        'Content-Type': 'application/json',
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      };

    await fetch($url, $headers)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        
        const workelts = data.works;
        const workImages = data.images
        workelts.forEach(work => {
            
            // work wrap
            let item = document.createElement('div');
            item.innerHTML =  `
            <div class="col-xs-6 col-sm-4 col-md-4 filtr-item card-wrapper" data-category="${work.data_cat}" title="Cliquer pour voir plus en detail">
                <div style="cursor: pointer;" data-toggle="modal" data-target="#projet${work.id}">
                    <img src="images/${work.banner}" class="img-fluid" alt="">
                </div>
            </div>
            `;
            // Boite modale
            let modal = document.createElement('div');
            modal.setAttribute('class','modal fade');
            modal.setAttribute('id',`projet${work.id}`);

            let img = '';
            let i = 0;
              workImages.forEach((elt)=>{ 
                  if (elt.id_work == work.id) {
                    if (i===0) {
                        img += `<div class="item"><img src="images/${elt.image}" class="img-fluid" alt="" /></div>`  
                    }else{
                        img += `<div class="item"><img src="images/${elt.image}" class="img-fluid" alt="" /></div>`  
                    }
                  }
                  i++
                })
                        

            modal.innerHTML = `
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title text-muted">${work.title} </h3>
                                    <span  data-dismiss="modal" class="close">&times;</span>
                                </div>
                                <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
                                    <div class="owl-carousel owl-theme">
                                           ${img}
                                    </div>
                                    <p>${work.description}</p>
                                </div>
                                <div class="modal-footer">
                                    <a href="${work.lien}" target="_blank" class="mr-auto btn btn-primary font-italic">Visitez le projet</a>
                                    <button class="btn btn-outline-danger" data-dismiss="modal">Fermer</button>
                                </div>
                            </div>
                        </div>
                        `;

            boite.appendChild(modal);
            works.appendChild(item);
           
        });

        $(".owl-carousel").owlCarousel({
            items:1,
            loop: true,
            autoplay:true,
            // autoplayHoverPause:true,
            dots:true,
            lazyLoad:true,
            autoplayTimeout: 1000,
        });
        //   Works FilterIzr
        var filterizr = $('.filter-container').filterizr({
            animationDuration: .5
        })

       

    })
    .catch((err)=>{
        console.log(err);
    })
}

export default work;