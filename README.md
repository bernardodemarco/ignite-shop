# Ignite Shop

Ignite Shop is a fictional e-commerce web application developed with Next.js. It's the fourth challenge of [Rocketseat's](https://www.rocketseat.com.br/) React.js course.

Working on this project allowed me to put into practice some core web concepts, such as Server Side Rendering (SSR) and Static Site Generation (SSG).

## About the project

![home-page](https://github.com/bernardodemarco/ignite-shop/assets/115510880/49fbe643-15e5-4b04-a803-297566f807a5)

On the application's main page, the user can navigate through all available products. Once a product is clicked, the user is redirected to a page that shows its specifications. Inside, there is a button that adds this specific product to the cart.

![product-details](https://github.com/bernardodemarco/ignite-shop/assets/115510880/e1dbe19e-11c3-4c7e-bf6a-bdc47a7a708d)

The user can view the cart status by clicking on the bag icon. In the cart, the number of items and the total price are displayed.

![cart](https://github.com/bernardodemarco/ignite-shop/assets/115510880/0b1f984c-4b0e-430b-a6bb-5e832d7dc225)

When the user clicks on the button to complete the purchase, they are redirected to the [Stripe](https://stripe.com/en-br) custom page. If the payment is successfully completed, the user is redirected to a success page.

![success-page](https://github.com/bernardodemarco/ignite-shop/assets/115510880/a7c7c82e-6e63-401a-b240-56e9a1be295e)

It is possible to simulate payments by using **_4242 4242 4242 4242_** as the card number. The security code can be any random three digits, such as **_123_**.

## 🛠️ Built with

- **_Next.js_**
- **_TypeScript_**
- **_Stitches_**
- **_Stripe_**

## 🚀 Setup

Clone this repository:

```bash
  # clone this repo
  git clone https://github.com/bernardodemarco/ignite-shop.git
```

Go to the project's folder and create a **_.env.local_** file, following the structure in **_.env.example_**.

Then, run the following commands:

```bash
  # install dependencies
  npm i

  # run web app
  npm run dev
```

**_Bernardo De Marco Gonçalves, July 2023_**.
