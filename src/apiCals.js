const getData = (key) => {
  return fetch(`http://www.boredapi.com/api/activity/${key}`).then((response) =>
    response.json()
  );
};

const educational = getData("?type=education");
const charity = getData("?type=charity");
const relaxation = getData("?type=relaxation");
const chores = getData("?type=busywork");

export { educational, charity, relaxation, chores };
