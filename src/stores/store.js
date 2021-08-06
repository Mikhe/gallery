import { action, decorate, observable, autorun, runInAction } from 'mobx';

import mockData from '../mock/data';

export class Store {
    pictures = [];
    status = 1;

    constructor() {
        autorun(() => this.fetchPictures());
    }

    fetchPictures = () => {
        this.pictures = mockData;
    };

    filterByStatus = (status) => {
        if (status === this.status) return;

        this.status = status;

        if (status === 2) {
            this.pictures = mockData.filter(picture => picture.sold === true);
        } else {
            this.pictures = mockData;
        }
    };
};

decorate(Store, {
    pictures: observable,
    status: observable,
    fetchPictures: action,
    filterByStatus: action,
});

export const store = new Store();
