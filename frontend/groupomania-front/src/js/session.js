const loadFromSessionStorage = (key, value) => {
    let data = sessionStorage.getItem(key);
    if (!data) {
        return value
    }
    return JSON.parse(data);
};

const storeToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export {
    storeToSessionStorage,
    loadFromSessionStorage
};