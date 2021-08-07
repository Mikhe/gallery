import { action, decorate, observable, autorun, computed } from 'mobx';

import mockData from '../mock/data';

export class Store {
    pictures = [];
    status = 1;
    search = '';
    bought = 0;
    loaded = 0;

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

        const newPicLen = this.pictures.length;

        if (this.loaded >= newPicLen) {
            this.loaded = newPicLen;
        } else {
            this.loaded = newPicLen - (newPicLen - this.loaded);
        }
    };

    buyPicture = (id) => {
        // kinda backend request
        mockData.find(pic => pic.id === id).order = true;

        this.pictures.find(pic => pic.id === id).order = true;
        this.bought++;
    };

    addLoaded = () => {
        this.loaded++;
    };

    get readyToShow() {
        return this.loaded === this.pictures.length;
    };
}

decorate(Store, {
    pictures: observable,
    status: observable,
    search: observable,
    bought: observable,
    loaded: observable,
    filterByStatus: action,
    filterByTitle: action,
    buyPicture: action,
    addLoaded: action,
    readyToShow: computed,
});

export const store = new Store();
