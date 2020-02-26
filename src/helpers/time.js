import moment from 'moment';

export const formatFromArray = array => array.map(item => ({
  ...item,
  createdAt: format(item.createdAt),
  updatedAt: format(item.updatedAt)
}));

export const format = originalDate => moment(originalDate).calendar();
