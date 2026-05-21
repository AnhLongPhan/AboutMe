/*eslint no-useless-escape: "off"*/
/* global dust, showErrorModal */

export const dustRender = (template, data, callback) => {
  if (template && data)
    dust.renderSource(template, data, (err, out) => {
      if (err) {
        showErrorModal(err);
        return;
      }
      callback(out);
    });
};

export const addBRTag = str => {
  if (str) return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
};

export const removeBRTag = str => {
  if (str) return str.replace(/<br\s*[\/]?>/gi, '\n');
};
