// const { error } = require('console');
// const https=require('https')

// https.get('https://jsonplaceholder.typicode.com/todos/1',(res)=>{
//     let data='';
//     res.on('data',(chunk)=>{
//        data =data + chunk;
//     })
//     res.on('end',()=>{
//         console.log('API data : ', JSON.parse(data))
//     })
//     res.on('error',(err)=>{
//         console.log(err)
//     })

// })




//npm i node-fetch
 
// import fetch from 'node-fetch';
// async function fetchData(){
//      try{
//       const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       const data= await res.json();
//       console.log('API data : ',data)
//       }catch(error){
//          console.log(error)
//      }

// }
// fetchData();




//npm i axios
import axios from "axios";
async function apiData(){
    try{
        let res= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log('API data : ',res.data)

    }
    catch(error){
        console.log(error)

    }
}

apiData();