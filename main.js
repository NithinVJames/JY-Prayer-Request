const form = document.forms['prayer-request']

form.addEventListener('submit', e => {
    e.preventDefault()
    const name = form['name'].value;
    const request = form['request'].value;
    console.log({name,request});
    // form.submit()
    // fetch(`https://api.telegram.org/bot5270203551:AAHmDszAG_3LpScU-EO6xamxV1kBuBN-tqs/sendMessage?chat_id=-737082532&Text=name%20:%20${name1}%0ARequest%20:%20${re1}`);
    
    // fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(() => {
        // $("#form_alerts").html("<div class='alert alert-success'>Requested successfully.</div>");
        // setTimeout(() => {$("#form_alerts").html('')},2000)
        // document.getElementById("pr").reset();
    // })
    // .catch(() => $("#form_alerts").html("<div class='alert alert-danger'>Error.</div>"))
})