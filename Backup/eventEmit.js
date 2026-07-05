const EventEmitter=require('events');
const event=new EventEmitter();

// event.on('data',()=>{
//     console.log('this is event emitter ')
// })
// event.emit('data');
// event.emit('data');


//it also run more time when we provide more response
// event.on('data',()=>{console.log('this is event emitter ')})
// event.on('data',()=>{console.log('this is event emitter ')})
// event.emit('data');


//only one time run
event.once('data',(name,age)=>{console.log(`name=${name} and age=${age}`)})

event.emit('data','annu','22')
event.emit('data','annu','22')
