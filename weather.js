function fetchWeather(){
    var city=document.getElementById("temp").value
    console.log(city)
    var request=new XMLHttpRequest()
    var apikey='69ede025422bfe36cb1f750ecab3bcad'
    var url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=69ede025422bfe36cb1f750ecab3bcad';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result)
    }
    request.send();
    console.log("Fetching...")
}