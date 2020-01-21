//DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const chatroomUpdate = document.querySelector('.chat-rooms');

//updating chat room
chatroomUpdate.addEventListener('click', (e) =>{
    if(e.target.tagName ==='BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat =>{
            chatUI.render(chat)
        })
    }
})


//adding new chat
newChatForm.addEventListener('submit' ,(e) =>{
e.preventDefault();
//this will use the form instance and uses the id "message" to get the value of input
//trim is to remove unnecessary spaces
const message = newChatForm.message.value.trim();
chatroom.addChat(message)
.then(() =>newChatForm.reset())
.catch((error)=>console.log('error', error))
})


//updating username
newNameForm.addEventListener('submit', (e) =>{
    //this  will prevent the default behaviour of refreshing the page
    e.preventDefault();
    const username = newNameForm.name.value.trim();
    chatroom.updateName(username);
    //reset form
    newNameForm.reset();
    //show and hide the update msg
    updateMsg.innerText =`Your name was updated to ${username}`
    setTimeout(() => {
        updateMsg.innerText ='';
        
    }, 3000);
})
//check local storage for a user name
const username = localStorage.username ? localStorage.username: 'anonymous';


//class instance
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', username);

//get chats and render
chatroom.getChats((data)=>{
    chatUI.render(data);
});


