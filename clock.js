setInterval(()=>{
    date=new Date();
    hourHand=date.getHours();
    minuteHand=date.getMinutes();
    secondHand=date.getSeconds(); 

    hourRotate=30*hourHand + minuteHand/2;
    minuteRotate= 6*minuteHand;
    secondRotate=6*secondHand;

    hour.style.transform=`rotate(${hourRotate}deg)`; 
    minute.style.transform=`rotate(${minuteRotate}deg)`;
    second.style.transform=`rotate(${secondRotate}deg)`; 
},1000); 

let indiaBtn=document.getElementById('indiaBtn');
indiaBtn.addEventListener('click',function change(e){
    
    setInterval(()=>{
        date=new Date();
        hourHand=date.getHours()-5;
        minuteHand=date.getMinutes()-30;
        secondHand=date.getSeconds(); 
    
        hourRotate=30*hourHand + (minuteHand/2);
        minuteRotate= 6*minuteHand;
        secondRotate=6*secondHand;
    
        hour.style.transform=`rotate(${hourRotate}deg)`; 
        minute.style.transform=`rotate(${minuteRotate}deg)`;
        second.style.transform=`rotate(${secondRotate}deg)`; 
    },1000); 
})
