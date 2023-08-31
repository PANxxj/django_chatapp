// variable 
console.log('duuuuuuuuuuuuu');
// let room1=document.querySelector('#room_uuid')
// console.log('roo1 ',room1);
// let room2=room1.textContent.replaceAll('"','')
// console.log('room 2',room2);
const ChatRoom= document.querySelector('#room_uuid').textContent.replaceAll('"','')

// 
let chatSocket=null
console.log('chatroom',ChatRoom);

// elements 

const chatLogElement=document.querySelector('#chat_log')
const chatInputElement=document.querySelector('#chat_message_input')
const chatSubmitElement=document.querySelector('#chat_message_submit')


//fuctions 

function sendMessage(){
    console.log(';;;;;;;;;;;;;;;;;;;',chatInputElement.value);
    console.log('sendMessage');
    chatSocket.send(JSON.stringify({
        'type': 'message',
        'message': chatInputElement.value,
        'name': document.querySelector('#user_name').textContent.replaceAll('"',''),
        'agent': document.querySelector('#user_id').textContent.replaceAll('"',''),
    }))
    console.log('sendMessage......................');
    chatInputElement.value = ''
}


function onChatMessage(data){ 
    console.log('onChatMessage',data);

    if (data.type=='chat_message'){
        if(!data.agent){
            chatLogElement.innerHTML += `
            <div class="flex w-full mt-2 space-x-3 max-w-md">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 text-center pt-2">${data.initials}</div>

                <div>
                    <div class="bg-gray-300 p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">${data.message}</p>
                    </div>
                    
                    <span class="text-xs text-gray-500 leading-none">${data.created_at} ago</span>
                </div>
            </div>
        `

        }
        else{
            chatLogElement.innerHTML += `
                <div class="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end">

                    <div>
                        <div class="bg-blue-300 p-3 rounded-l-lg rounded-br-lg">
                            <p class="text-sm">${data.message}</p>
                        </div>
                        
                        <span class="text-xs text-gray-500 leading-none">${data.created_at} ago</span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 text-center pt-2">${data.initials}</div>
                </div>
            `
        }
    }

}

// web socket

chatSocket = new WebSocket(`ws://${window.location.host}/ws/${ChatRoom}/`)

chatSocket.onmessage=function(e){
    console.log('onmessage');

    onChatMessage(JSON.parse(e.data));

}


chatSocket.onopen=function(e){
    console.log('open -');
}


chatSocket.onclose=function(e){
    console.log('onclose- ');
}


//event listeners

chatSubmitElement.onclick = function(e){
    e.preventDefault()

    sendMessage()
    return false
}

chatInputElement.onkeyup=function(e){
    if (e.keyCode==13){
        sendMessage()
    }
}