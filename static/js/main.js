let chatName=''
let chatSocket=null
let chatWindow=window.location.href
let chatRoomUuid=Math.random().toString().slice(2,12)

// elements

const chatElement=document.querySelector('#chat')
const chatOpenElement=document.querySelector('#chat_open')
const chatJoinElement=document.querySelector('#chat_join')
const chatIconElement=document.querySelector('#chat_icon')
const chatWelcomeElement=document.querySelector('#chat_welcome')
const chatRoomElement=document.querySelector('#chat_room')
const chatNameElement=document.querySelector('#chat_name')
const chatLogElement=document.querySelector('#chat_log')
const chatMessageElement=document.querySelector('#chat_message_input')
const chatSubmitElement=document.querySelector('#chat_message_submit')

// fuctions
function getCookie(name){
    var cookieValue=null

    if (document.cookie && document.cookie != ''){
        var cookies = document.cookie.split(';')

        for (var i=0;i<cookies.length;i++){
            var cookie=cookies[i].trim()
            if (cookie.substring(0,name.length+1)===(name+'=')){
                cookieValue=decodeURIComponent(cookie.substring(name.length+1))
                break
            }
        }
    }
    return cookieValue
}

function joinChat(){
    
    chatName=chatNameElement.value
    const data= new FormData()
    data.append('name',chatName)
    data.append('url',chatWindow)
    data.append('url',chatWindow)

    fetch(`create-room/${chatRoomUuid}`,{
        method:"POST",
        headers:{
            'X-CSRFToken':getCookie('csrftoken')
        },
        body:data
    })
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log('data',data);
    })
}


// event listner

chatOpenElement.onclick=function(e){
    e.preventDefault()

    chatIconElement.classList.add('hidden')
    chatWelcomeElement.classList.remove('hidden')
    console.log('gdbkbdjkhfdbfdbf');
    return false
}

chatJoinElement.onclick=function(e){
    e.preventDefault()

    chatWelcomeElement.classList.add('hidden')
    chatRoomElement.classList.remove('hidden')
    joinChat()
    console.log('gdbkbdjkhfdbfdbf');
    return false
}
