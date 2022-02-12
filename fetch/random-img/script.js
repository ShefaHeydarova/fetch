let btn = document.querySelector('button');
let img  = document.querySelector('img');

btn.addEventListener('click', (e)=>{
    e.preventDefault();


fetch('https://api.unsplash.com/photos/random?client_id=day_nBr1C0O-jBwInU7xm_ApsWoybtfko_JsdrRNdNk')
.then(response => response.json()
.then(data => {
 img.src = data.urls.small;
  console.log(data);
})
.catch(err=> console.log(err))
)
.catch(err => {
    console.log(err);
});


})