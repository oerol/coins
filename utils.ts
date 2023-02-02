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
