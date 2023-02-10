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
export function dateStringToTimeAdverbial(dateString: string): string {
  const date = new Date(dateString).getTime();
  const today = new Date().getTime();
  const differenceInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));

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