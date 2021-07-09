function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    age: 99
};

const monAutreFonction = () => {
    alert('test des interactions')
}

const Test = () => {
    return (
        <div>
            <h1>
                Hello, {formatName(user)}!
            </h1>
            <p>
                You have {user.age} years old.
            </p>
            <button onClick={monAutreFonction}>
                Go function
            </button>
        </div>
    )
};

export default Test;