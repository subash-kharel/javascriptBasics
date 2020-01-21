//adding new chat documents
//setting up real time listener to get new chats
//updating the usernaem
//updating the room

class Chatroom {

    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
        this.unsub;
    }

    async addChat(message){
        //format chat message to json format
        const now = new Date();
        const chat = {
            message,
            username : this.username,
            room:  this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //saving chat docs
        const response = await this.chats.add(chat);
        return response;
    }

    //this is a real time listener, should retrieve messages on change
    //onSnapshot lets us see all the new changes and .docChanges gives access to all changed docs
    getChats(callback){
      this.unsub=  this.chats
        //complex queryies to query from firestore
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach((change) =>{
                if(change.type === 'added'){
                    //update ui
                    callback(change.doc.data())
                }
            })
        }
        )
    }

    updateName(username){
        this.username = username;
        localStorage.setItem('username',username);
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
      
    }

}


// const chatroom = new Chatroom('gaming', 'ksubash');

// // chatroom.addChat('hello guys')
// // .then((response) => console.log('response', response))
// // .catch((error) =>console.log(error))

// chatroom.getChats(data => console.log('data', data))

// setTimeout(() => {
//     chatroom.updateRoom('general');
//     chatroom.updateName('rajesh')
//     chatroom.getChats((data) =>{
//         console.log(data)
//     });
//      chatroom.addChat('testing')
// }, 3000);