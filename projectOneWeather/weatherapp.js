import axios from 'axios';
import { stdin, stdout } from 'process';
import readline from 'readline';

let rel=readline.createInterface({
    input:stdin,
    output:stdout
})

rel.question('enter city name',async(city)=>{
    let API='46a5f322471fb262d146062e019a8334';
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    try{
     let wheather= await axios.get(url);
     console.log('temp : ',wheather.data.main.temp,'°C')
     console.log('humidity : ',wheather.data.main.humidity)
    }
    catch(error){
        console(error.message);
    }
    finally{
        rel.close;
    }
    
})