const post_mes = 'PostMessage'

 const profilepage_reducer = (state,action) => {

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