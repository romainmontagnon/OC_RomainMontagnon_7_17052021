const storeToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export default storeToSessionStorage;