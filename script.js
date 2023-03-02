import {getStorage} from '/phonebook/script/serviceStorage.js';

import {
  renderPhoneBook,
  renderContacts,
} from '/phonebook/script/render.js';

import sortElementsTable from './phonebook/script/optional.js';

import {deleteControl, formControl, hoverRow, modalControl} from './phonebook/script/control.js';

{
  const init = (selecrorApp, title) => {
    const app = document.querySelector(selecrorApp);
    const data = getStorage('data');
    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      btnDel,
      form,
      header} = renderPhoneBook(app, title);

    const allRow = renderContacts(list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);
    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    sortElementsTable(header, list);
    formControl(form, list, closeModal);
  };


  window.phoneBookInit = init;
}
