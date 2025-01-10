import * as bootstrap from "bootstrap";
import confetti from "canvas-confetti";

AOS.init();

const eventDate = new Date("2025-01-09T16:41:30");
const eventTimestamp = eventDate.getTime();

const interval = setInterval(() => {
  const today = new Date();
  const todayTimestamp = today.getTime();

  const timestampRemaining = eventTimestamp - todayTimestamp;

  const days = 1000 * 60 * 60 * 24;
  const hours = 1000 * 60 * 60;
  const minutes = 1000 * 60;
  const seconds = 1000;

  const daysRemaining = Math.floor(timestampRemaining / days);

  const hoursRemaining = Math.floor((timestampRemaining % days) / hours);

  const minutesRemaining = Math.floor((timestampRemaining % hours) / minutes);

  const secondsRemaining = Math.floor((timestampRemaining % minutes) / seconds);

  const h1 = document.getElementById("h1");
  const timer = document.getElementById("timer");

  if (timestampRemaining <= 0) {
    clearInterval(interval);
    timer.innerHTML = "";
    h1.innerHTML = "🥳 Feliz aniversário, Michael!";
    confetti();
  } else {
    h1.innerHTML = "O meu próximo aniversário será em: ";
    timer.innerHTML = `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
  }
}, 1000);
