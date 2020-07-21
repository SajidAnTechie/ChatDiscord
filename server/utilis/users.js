const users = [];

function userJoin(id, name, room) {
  const user = { id, name, room };

  users.push(user);

  return user;
}

function userLeave(id) {
  return users.find((user) => user.id === id);
}

function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

module.exports = { userJoin, userLeave, getCurrentUser };
