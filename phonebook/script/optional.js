import {getStorage} from './serviceStorage.js';
import {renderContacts} from './render.js';
import {sortStorage} from './serviceStorage.js';

const sortData = (sortElem, data) => {
  console.log(data);
  const arrDataName = data.map(item => item[sortElem]).sort();
  const arrDataSort = arrDataName.map(item => data.find(elem => elem[sortElem] === item));
  sortStorage('data', arrDataSort);
  return arrDataSort;
};

const sortElementsTable = (header, list) => {
  header.addEventListener('click', e => {
    const sortElem = e.target.getAttribute('name');
    if (sortElem === 'name' || sortElem === 'surname') {
      list.innerHTML = '';
      renderContacts(list, sortData(sortElem, getStorage('data')));
    }
  });
};

export default sortElementsTable;
