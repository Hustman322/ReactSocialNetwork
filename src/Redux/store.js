import profilepage_reducer from "./profilepage.js";
import messager_reducer from "./messagereducer.js";





let store = {

     _callsubcriber(){
         console.log('state has been changed')
     },

    _state : {

        ProfilePage: {

            PostData: [
                {id: 1, message: 'Mandrik sosav sodnia', likes : 42},
                {id: 2, message: 'Dota 2 zaebis',likes : 5}
            ],

        },


        Messager:{
            DialogData: [
                {name:'Dima',surname:'Mandryk',id:1},
                {name:'Victor',surname:'Hui',id:2},
                {name:'Oleh',surname:'Poleh',id:3}

            ],

            MessageData: [
                {message:'Hello you fucking bitch', id:1},
                {message:'No you bitch', id:2},
                {message:'Nah', id:3}


            ],

            messagetext :  ""
        }

    },

    getstate() {
         return this._state;
    },


    subscribe(observer)  {
        this._callsubcriber = observer;
    },

   Dispatch (action) {
        this._state.ProfilePage = profilepage_reducer(this._state.ProfilePage,action);
         this._state.Messager = messager_reducer(this._state.Messager,action);
       this._callsubcriber(this._state);


    }

}







export default store;
window.store = store;