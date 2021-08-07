import { action, decorate, observable, autorun, runInAction } from 'mobx';

import mockData from '../mock/data';

export class Store {
    pictures = [];
    status = 1;
    search = '';
    bought = 0;

    constructor() {
        autorun(() => this.fetchPictures());
    }

    fetchPictures = () => {
        this.pictures = mockData;
    };

    filterByStatus = (status) => {
        if (status === this.status) return;

        this.status = status;
        this.filterPictures();
    };

    filterByTitle = (title) => {
        if (title === this.search) return;

        this.search = title || '';
        this.filterPictures();
    };

    filterPictures = () => {
        this.pictures = mockData.filter(({ sold, title }) => {
            let match = true;

            // by status
            if (this.status === 2 && !sold) {
                match = false;
            }

            // by name
            if (!title.toLowerCase().includes(this.search.toLocaleLowerCase())) {
                match = false;
            }

            return match;
        });
    };

    buyPicture = (id) => {
        // kinda backend request
        mockData.find(pic => pic.id === id).order = true;

        this.pictures.find(pic => pic.id === id).order = true;
        this.bought++;
    };
}

decorate(Store, {
    pictures: observable,
    status: observable,
    search: observable,
    bought: observable,
    filterByStatus: action,
    filterByTitle: action,
    buyPicture: action,
});

export const store = new Store();
