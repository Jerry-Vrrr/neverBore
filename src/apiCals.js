




const getData = () => {
    return fetch(`http://www.boredapi.com/api/activity/`)
    .then(response => response.json())
  }

export const rawData = getData()

