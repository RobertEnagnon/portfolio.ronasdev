
  const contact = async (baseUrl) => {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    const $url = baseUrl+"backend/contact.php"
    const $body = {
        name,
        email,
        subject,
        message
    };
const $headers =  {
    'Content-Type': 'application/json',
    Accept: "application/json"
  };


   await fetch($url,{
        method: "POST",
        headers: $headers,
          body: JSON.stringify($body),
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        let errName = document.querySelector('#message-name');
        let errEmail = document.querySelector('#message-email');
        let errsubject= document.querySelector('#message-subject');
        let errmessage= document.querySelector('#message-message');
        // Gestion des erreurs 
        if (data.name) {
            errName.classList.add('text-danger');
            errName.innerText =data.name;
        }else{
            errName.innerText = '';
        }

        if (data.email) {
            errEmail.classList.add('text-danger');
            errEmail.innerText =data.email;
        }else{
            errEmail.innerText = '';
        }

        if (data.subject) {
            errsubject.classList.add('text-danger');
            errsubject.innerText =data.subject;
        }else{
            errsubject.innerText = '';
        }

        if (data.message) {
            errmessage.classList.add('text-danger');
            errmessage.innerText =data.message;
        }else{
            errmessage.innerText = '';
        }

        // AU cas du success
        if (data.success) {
            new Notify({
                status: 'success',
                title: 'Message réussi',
                text: data.success,
                effect: 'slide',
                speed: 300,
                // customClass: null,
                // customIcon: null,
                showIcon: true,
                // showCloseButton: true,
                autoclose: false,
                autotimeout: 8000,
                gap: 20,
                distance: 20,
                type: 1,
                position: 'right top'
              })
        }
    })
    
}

export default contact;

