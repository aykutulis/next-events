import moment from 'moment';

export class StringFormatter {
  static humanReadableDate = (date: string) => {
    return moment(date).format('dddd, MMMM Do YYYY');
  };

  static formattedAddress = (address: string) => {
    return address.replace(', ', '\n');
  };
}
