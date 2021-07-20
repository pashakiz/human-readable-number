module.exports = function toReadable (number) {
  const digits19 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const dozens = [
    null,
    null,
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  const hundred = 'hundred';

  if (!Number.isInteger(number)) {
      return false;
  }

  let numbers = number.toString().split('');

  if (number > 99) {
      //hundred [100..999]
      if (number % 100 == 0) { //[100,200..800,900]
        return digits19[numbers[0]] + ' ' + hundred;
      }
      if (number % 10 == 0) { //[120,130..980,990]
        if (numbers[1] == 1) {
            return digits19[numbers[0]] + ' ' + hundred + ' ' + digits19[numbers[1] + numbers[2]];
        }
        return digits19[numbers[0]] + ' ' + hundred + ' ' + dozens[numbers[1]];
      }
      if ( +(numbers[1] + numbers[2]) < 10 ) {
        return digits19[numbers[0]] + ' ' + hundred + ' ' + digits19[numbers[2]];
      }
      if ( +(numbers[1] + numbers[2]) == 10 ) {
        return digits19[numbers[0]] + ' ' + hundred + ' ' + digits19[10];
      }
      if ( +(numbers[1] + numbers[2]) < 20 && +(numbers[1] + numbers[2]) > 10 ) {
        return digits19[numbers[0]] + ' ' + hundred + ' ' + digits19[numbers[1] + numbers[2]];
      }
      return digits19[numbers[0]] + ' ' + hundred + ' ' + dozens[numbers[1]] + ' ' + digits19[numbers[2]];
  }

  if (number < 100 && number > 19) {
    //dozens [20..99]
    if (number % 10 == 0) { //[20,30..80,90]
      return dozens[numbers[0]];
    }
    return dozens[numbers[0]] + ' ' + digits19[numbers[1]];
  }

  if (number < 20) {
    //digits19 [0..19]
    return digits19[number];
  }

}
