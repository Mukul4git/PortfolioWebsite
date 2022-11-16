
const contactForm = document.querySelector('.contact-form');

let person = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        person: person.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }


    fetch('/api', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

 })
//    .then((response) => response.json())
//    .then((formData) => {
//      console.log('Success:', formData);
//    })
//    .catch((error) => {
//      console.error('Error:', error);
//    });

    // let xhr = new XMLHttpRequest();

    // xhr.open('POST', '/contact');

    // xhr.setRequestHeader('content-type', 'application/json');

    // xhr.onload = function(){
    //     console.log(xhr.responseText);
    //     if(xhr.responseText == 'success'){
    //         alert('Email sent');
    //         person.value = '';
    //         email.value = '';
    //         subject.value = '';
    //         message.value = '';
    //     }

    //     else{
    //         alert('Something went wrong! Please Use my Email link in the Footer to send the mail. I am Working on fixing it.')
    //     }
    // }

    // xhr.send(JSON.stringify(formData));


