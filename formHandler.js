const scriptURL = "https://script.google.com/macros/s/AKfycbwnf7jaOlAqz3U5-Kn1WsfiRakyiTd2VrV3QDe2WJUbjJul2GzEUX4Zn2xSJVnYrCw9nQ/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){        
            msg.innerHTML = ""
        },5000)
        form.reset
      })
      .catch(error => console.error('Error!', error.message))
  })
