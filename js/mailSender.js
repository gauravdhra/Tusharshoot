/*------------------
       Mail Sender
   --------------------*/
emailjs.init("user_9YyNtfKt3MI1Id0X3kgY1");

$("#contactForm").submit(sendMail);

function sendMail(event) {
    event.preventDefault()
    const serviceID = 'service_zas5bl9'
    const templateID = 'template_w2p0rxd'
    // const userID = 'user_9YyNtfKt3MI1Id0X3kgY1'

    const templateParams = {
        from_name: $('#contactForm').find('input[name="name"]').val(),
        to_name: 'Tushar Art & Company',
        contact: $('#contactForm').find('input[name="contact"]').val(),
        email: $('#contactForm').find('input[name="email"]').val(),
        message_html: $('#contactForm').find('textarea[name="message"]').val(),
        reply_to: $('#contactForm').find('input[name="FirstName"]').val()
    }

    emailjs.send(serviceID, templateID, templateParams)
        .then(function (response) {

            $.magnificPopup.open({
                items: {
                    src: '#success-popup',
                    type: 'inline'
                }

            });


        }, function (error) {
            $.magnificPopup.open({
                items: {
                    src: '#fail-popup',
                    type: 'inline'
                }

            });
        });

}

