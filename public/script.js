var socket =io();



let btn=document.getElementById('btn');
btn.onclick=function exec(){
    socket.emit('from_client');
}
socket.on('from_server', () =>{
    console.log("Collected a new event from server");
    const div=document.createElement('div');
    div.innerChild= 'New event from server';
    document.body.appendChild(div);
})