export const getStorage = (key) => {
  let arrObj = JSON.parse(localStorage.getItem(key));
  return arrObj === null ? arrObj = [] : arrObj;
};

export const setStorage = (key, obj) => {
  const arrdata = getStorage(key);
  arrdata.push(obj);
  localStorage.setItem(key, JSON.stringify(arrdata));
};

export const removeStorage = (numberTel, key) => {
  const arrObj = getStorage(key);
  localStorage.clear();
  arrObj.forEach(obj => {
    if (obj.phone === numberTel) return;
    setStorage(key, obj);
  });
};

export const sortStorage = (key, newArrData) => {
  localStorage.clear();
  newArrData.forEach(obj => {
    setStorage('data', obj);
  });
};
