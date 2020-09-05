const post_mes = 'PostMessage'

let initialstate ={
    PostData: [
        {id: 1, message: 'Mandrik sosav sodnia', likes : 42},
        {id: 2, message: 'Dota 2 zaebis',likes : 5}
    ],
}

 const profilepage_reducer = (state = initialstate ,action) => {

     switch (action.type) {
         case post_mes:
             let newpost =
                 {id: 3, message: action.PostText, likes: 42}
             state.PostData.push(newpost);
             break;
         default:
             return state;
     }
     return state;
}


export const addPostAction = (text) => {
    return {
        type: post_mes,
        PostText: text
    }

}

export default profilepage_reducer;