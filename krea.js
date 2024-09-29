const scriptURL = 'https://script.google.com/macros/s/AKfycbzB8i_1CS6cCfLBBCFCAbikBnseDrmuNEfCfY66NB-T-hhcRSC0YUQjKDnDVb1E0I8iiA/exec'

const form = document.forms['kontak']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Pesan anda telah terkirim, Terimakasih!"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})