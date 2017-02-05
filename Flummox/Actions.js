import { Actions } from 'flummox';

class MessageActions extends Actions {
    createMessage(messageContent) {
        return {
            content: messageContent,
            date: Date.now()
        };
    }

    createAsyncMessage(messageContent) {
        try {
            return await serverCreateMessage(messageContent);
        } catch (error) {
            console.log('async error creating message');
        }
    }
}