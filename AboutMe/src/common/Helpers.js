import { httpRequestNew } from './Utils';

// TEMPLATES
export const getInformationAboutDetail = callback => {
  return httpRequestNew(
    {
      url: '/home/get-information-about-detail',
    },
    callback
  );
};