const mes_text = 'UpdateMessageText'
const mes_send = 'SendMessage'

let initialstate = {
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

const messager_reducer= (state = initialstate,action) => {


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