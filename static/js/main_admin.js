// variable 
console.log('duuuuuuuuuuuuu');
const ChatRoom= document.querySelector('#room_uuid').textContent.replaceAll('"','')

let chatSocket=null
console.log('chatroom',ChatRoom);

// elements 

const chatLogElement=document.querySelector('#chat_log')
const chatInputElement=document.querySelector('#chat_message_input')
const chatSubmitElement=document.querySelector('#chat_message_submit')

// web socket

chatSocket = new WebSocket(`ws://${window.location.host}/ws/${ChatRoom}/`)

chatSocket.onmessage=function(e){
    console.log('onmessage');

}


chatSocket.onopen=function(e){
    console.log('open -');
}


chatSocket.onclose=function(e){
    console.log('onclose- ');
}