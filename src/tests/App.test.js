import { Store } from '../stores/store';
import mockData from '../mock/data';

describe('[Store]', () => {
  let store;

  beforeEach(() => {
    store = new Store();
  });

  test('[store] defaults', () => {
    expect(store.bought).toBe(0);
    expect(store.status).toBe(1);
    expect(store.pictures).toEqual(mockData);
    expect(store.search).toBe('');
    expect(store.loaded).toBe(0);
  });

  test('[store] method buyPicture buys a picture', () => {
    const chosenPicId = 1;

    store.buyPicture(chosenPicId);
    expect(store.pictures.find(pic => pic.id === chosenPicId).order).toBe(true);
  });

  test('[store] method filterByStatus filters sold', () => {
    const statusSold = 2;

    store.filterByStatus(statusSold);
    expect(store.pictures).toEqual(mockData.filter(pic => !!pic.sold === true ));
  });

  test('[store] method filterByStatus rest filter after choosing All option', () => {
    const statusSold = 2;
    const statusAll = 1;

    store.filterByStatus(statusSold);
    store.filterByStatus(statusAll);
    expect(store.pictures).toEqual(mockData);
  });

  test('[store] method filterByTitle filters by title', () => {
    const search = 'pic';

    store.filterByTitle(search);
    expect(store.pictures).toEqual(mockData.filter(pic => pic.title.toLowerCase().includes(search) ));
  });

  test('[store] method filterByTitle filters by title not depending from case', () => {
    const search = 'pIC';

    store.filterByTitle(search);
    expect(store.pictures).toEqual(mockData.filter(pic => pic.title.toLowerCase().includes(search.toLowerCase()) ));
  });

  test('[store] method filterByTitle & filterByStatus work together', () => {
    const search = 'pic';
    const statusSold = 2;

    store.filterByStatus(statusSold);
    store.filterByTitle(search);
    expect(store.pictures)
        .toEqual(mockData.filter(pic => pic.title.toLowerCase().includes(search) && !!pic.sold === true ));
  });

  test('[store] method get readyToShow return false if not everything is loaded', () => {
    expect(store.readyToShow).toBe(false);
  });

  test('[store] method get readyToShow return true if everything is loaded', () => {
    mockData.forEach(() => {
      store.addLoaded();
    });
    expect(store.readyToShow).toBe(true);
  });
});
