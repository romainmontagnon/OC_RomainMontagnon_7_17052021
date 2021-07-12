const loadFromSessionStorage = (key, value) => {
    let data = sessionStorage.getItem(key);
    if (!data) {
        return value
    }
    return JSON.parse(data);
};

export default loadFromSessionStorage;