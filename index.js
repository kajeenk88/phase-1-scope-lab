var customerName = "bob";
const leastFavoriteCustomer = "sour fred";

const currentUser = "Grace Hopper";
function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "sour fred";
}

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

function setBestCustomer() {
  var bestCustomer = "not bob";
  window.bestCustomer = bestCustomer;
}

function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}
