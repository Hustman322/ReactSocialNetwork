const mes_text = 'UpdateMessageText'
const mes_send = 'SendMessage'

const messager_reducer= (state,action) => {


    switch (action.type) {
        case mes_text:
            state.messagetext = action.newText;
            break;

        case mes_send:

                let text = state.messagetext;
                state.MessageData.push({message: text, id: 4});
                state.messagetext = '';
            break;
        default:
            return state;
    }
    return state;
}

export const refreshmestext = (text) => {
    return{
        type: mes_text,
        newText : text,
    }
}

export const sendmessage = () => {
    return {
        type: mes_send
    }

}

export default messager_reducer;