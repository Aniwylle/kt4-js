let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34}
];

function addUser(name, lastname, age) {
    const id = users.length + 1;
    const newUser = { id, name, lastname, age };
    users.push(newUser);
    return newUser;
}

function updateUser(id, name, lastname, age) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { id, name, lastname, age };
        return users[index];
    }
    return undefined;
}

function deleteUser(id) {
    const deletedUser = users.find(user => user.id === id);
    users = users.filter(user => user.id !== id);
    return deletedUser;
}

module.exports = { addUser, updateUser, deleteUser };
