console.log('client js started');



document.getElementById('button').addEventListener('click',()=>{

   const address = document.getElementById('Field').value
   
   fetch(`http://localhost:3000/weather?address=`+encodeURI(address)).then((response)=>{

    response.json().then((data)=>{
        document.getElementById('display').textContent = data.weather
        
    })

})

})
