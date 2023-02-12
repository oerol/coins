export function amountToString(amount: number): string {
  let text = amount.toString();
  let leftSide = text.split(".")[0];
  let rightSide = text.split(".")[1];

  rightSide = rightSide ?? "00";

  if (leftSide.length > 3) {
    for (let i = leftSide.length - 3; i > 0; i -= 3) {
      leftSide = leftSide.slice(0, i) + "." + leftSide.slice(i);
    }
  }

  if (rightSide.length < 2) {
    rightSide += "0";
  }

  return leftSide + "," + rightSide;
}

// https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates
export function getDifferenceInDays(date1: Date, date2: Date){
  const dateTime1 = date1.getTime();
  const dateTime2 = date2.getTime();
  const differenceInDays = Math.floor((dateTime2 - dateTime1) / (1000 * 60 * 60 * 24));

  return differenceInDays
}

export function dateStringToTimeAdverbial(dateString: string): string {
  const date = new Date(dateString);
  const today = new Date();
  
  const differenceInDays = getDifferenceInDays(date, today)

  if (differenceInDays === 0) {
    return 'today';
  } else if (differenceInDays === 1) {
    return 'yesterday';
  } else if (differenceInDays >= 2 && differenceInDays <= 7) {
    return differenceInDays + " days ago";
  } else {
    return '> 1 week';
  }
}