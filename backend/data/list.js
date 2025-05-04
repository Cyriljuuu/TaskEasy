const lists = [];

const listDao = {
  create(list) {
    const newList = { id: Date.now().toString(), ...list };
    lists.push(newList);
    return newList;
  },
  get(id) {
    return lists.find((l) => l.id === id);
  },
  list() {
    return lists;
  },
  update(id, updatedList) {
    const index = lists.findIndex((l) => l.id === id);
    if (index === -1) return null;
    lists[index] = { ...lists[index], ...updatedList };
    return lists[index];
  },
  remove(id) {
    const index = lists.findIndex((l) => l.id === id);
    if (index !== -1) lists.splice(index, 1);
  },
};

module.exports = listDao;
