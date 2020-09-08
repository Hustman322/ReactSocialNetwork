const post_mes = 'PostMessage'
const post_text = 'PostText'

let initialstate ={
    PostData: [
        {id: 1, message: 'Mandrik sosav sodnia', likes : 42},
        {id: 2, message: 'Dota 2 zaebis',likes : 5}
    ],

    posttext : ""
}

 const profilepage_reducer = (state = initialstate ,action) => {

     switch (action.type) {
         case post_text:
             state.posttext = action.newText;
             break;

         case post_mes:
             if(state.posttext!==""){
             let newpost =
                 {id: 3, message: state.posttext, likes: 0}
             state.PostData.push(newpost);
             }
             break;
         default:
             return state;
     }
     return state;
}


export const addPostAction = () => {
    return {
        type: post_mes,
    }

}

export const refreshposttext = (text) => {
    return{
        type: post_text,
        newText : text,
    }
}

export default profilepage_reducer;