function getParents({
  index,
  parentField = 'parent'
} = {}) {
  return (rows) => {
    const parents = [];
    let currentIndex = index;
    let cell = rows[index];
    let previousParent;

    while (cell) {
      if (typeof cell[parentField] !== 'undefined') {
        if (typeof previousParent !== 'undefined' && previousParent !== cell[parentField]) {
          parents.unshift(cell);
        }
      } else {
        if (typeof previousParent !== 'undefined') {
          parents.unshift(cell);
        }

        break;
      }

      currentIndex -= 1;

      previousParent = cell[parentField];
      cell = rows[currentIndex];
    }

    return parents;
  };
}

export default getParents;
