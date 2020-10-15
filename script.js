const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(); // JS gets the current date / time

  const seconds = now.getSeconds();
  // For moving the seconds hand - dividing by 60(seconds), multiplying with 360(degrees)
  // Adding 90 because in CSS we offset it by 90 degrees (in .hand)
  // That was needed to start a new minute at the 12 mark
  // But it also needed to be corrected according to the current second of the minute
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  // For rotating the hand by the degrees calculated in the secondsDegrees constant above
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //console.log(seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //console.log(minutes);

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  //console.log(hours);
}

setInterval(setDate, 1000); // Executes setDate fn every 1 sec