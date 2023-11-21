const productDescription = document.getElementById("product-description");

const donation3Button = document.getElementById("donate-3");
const donation5Button = document.getElementById("donate-5");
const donation10Button = document.getElementById("donate-10");

const amountInput = document.getElementById("amount-input");
const totalAmount = document.getElementById("total-amount");

let donationCount = 0;

donation3Button.addEventListener("click", () => {
  amountInput.value = 3;
  donationCount = 3;
  updateTotalAmount();
});

donation5Button.addEventListener("click", () => {
  amountInput.value = 5;
  donationCount = 5;
  updateTotalAmount();
});

donation10Button.addEventListener("click", () => {
  amountInput.value = 10;
  donationCount = 10;
  updateTotalAmount();
});

amountInput.addEventListener("input", () => {
  donationCount = amountInput.value;
  updateTotalAmount();
});

const updateTotalAmount = () => {
  const updatedAmount = donationCount * 1;
  totalAmount.innerText = updatedAmount;
};


const mercadopago = new MercadoPago("TEST-201e9abd-3bb7-46a6-a36b-65d2a5689677", {
  locale: "es-AR",
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  const orderData = {
    quantity: document.getElementById("quantity").innerHTML,
    description: document.getElementById("product-description").innerHTML,
    price: totalAmount.innerText,
  };

  fetch("http://localhost:8080/create_preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (preference) {
      createCheckoutButton(preference.id);
    })
    .catch(function () {
      alert("Unexpected error");
    });
});

function createCheckoutButton(preferenceId) {
 
  const bricksBuilder = mercadopago.bricks();

  const renderComponent = async (bricksBuilder) => {
    if (window.checkoutButton) window.checkoutButton.unmount();
    await bricksBuilder.create(
      "wallet",
      "button-checkout", 
      {
        initialization: {
          preferenceId: preferenceId,
        },
        callbacks: {
          onError: (error) => console.error(error),
          onReady: () => {},
        },
      }
    );
  };
  window.checkoutButton = renderComponent(bricksBuilder);
}
