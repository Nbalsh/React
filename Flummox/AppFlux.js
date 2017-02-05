import { Flux } from 'flummox';

class AppFlux extends Flux {
    contructor() {
        super();

        this.createActions('messages', MessageActions);

        this.createStore('messages', MessageStore, this);
    }
}
const flux = new AppFlux();