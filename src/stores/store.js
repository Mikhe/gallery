import { action, decorate, observable, autorun, runInAction } from 'mobx';

import mockData from '../mock/data';

export class Store {
    pictures = [];

    constructor() {
        autorun(() => this.fetchPictures());
    }

    fetchPictures = () => {
        this.pictures = mockData;
    };
};

decorate(Store, {
    pictures: observable,
    fetchPictures: action,
});

export const store = new Store();
