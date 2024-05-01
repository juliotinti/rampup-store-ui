# Rampup Store UI 🚀

This repository contains the frontend application for the Rampup platform, developed using Angular. It provides a user-friendly interface for managing product offerings, orders, customer accounts, and support tickets as described in the Rampup API.

## Features 🌟

- **User Authentication:** Log in and manage user sessions. If you are the admin, you can manage and create another admin. If you are an operator, you just log in. 
- **Product Management:** Interface to add, update, view, and delete products. If you are the admin, you can add, update and delete the product. If you are an operator, you can view the product and add to the shopping cart.
- **Order Management:** Place new orders, view existing orders, and manage order details. If you are the admin, you can see the existing orders. If you are an operator, you can place new orders.
- **Customer Management:** Create and update customer profiles.
- **Support Tickets:** Raise and manage tickets for order-related queries.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/juliotinti/rampup-store-ui.git
2. npm install -g @angular/cli
3. Acesse o diretório onde foi clonado: npm install
4. ng serve
5. Just access http://localhost:4200/

OR

1. You can go to this repository https://github.com/juliotinti/rampup-store-api and use the Installation to make a docker image.
2. docker build -t <IMAGE_NAME>:latest .
3. Then, you can install the docker compose and use the 'docker-compose.yaml'.
4. You just need to change the image of this 'docker-compose.yaml', to make it the name of you image. 
5. And know, you have the backend and frontend of the store, just access the http://localhost:4200/

## Results

Login page:

<p align="center"> <img src="https://freeimage.host/i/JgOKren" width="400" height="600"/> </p>

Sign Up page:

<p align="center"> <img src="https://freeimage.host/i/JgOfY7t" width="300"/> </p>

Home page:

<p align="center"> <img src="https://postimg.cc/646B9wr4" width="600"/> </p>

Home page - Edit personal Info: 

<p align="center"> <img src="https://postimg.cc/KkqHM2XM" width="600"/> </p>

Home page - Add new address: 

<p align="center"> <img src="https://postimg.cc/TLMwvZNn" width="600"/> </p>

Home page - Delete account: 

<p align="center"> <img src="https://postimg.cc/qtdgCNy9" width="600"/> </p>

Product page: 

<p align="center"> <img src="https://postimg.cc/7JSWhQ4v" width="600"/> </p>

Product page - Purchase button: 

<p align="center"> <img src="https://postimg.cc/Xp7P4LPP" width="600"/> </p>

When add to shopping cart:

<p align="center"> <img src="https://postimg.cc/gXgvDVKw" width="200"/> </p>

Product page - Shopping cart button clicked: 

<p align="center"> <img src="https://postimg.cc/PCd5tgHj" width="600"/> </p>

Shopping cart popup - Choose the delivery address: 

<p align="center"> <img src="https://postimg.cc/hJkFGmmd" width="600"/> </p>

Ticket page: 

<p align="center"> <img src="https://postimg.cc/5Ym6qfbn" width="600"/> </p>

## Contributing
We welcome contributions from the open-source community. If you would like to contribute to MemoMed, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request.

## Author <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width="25" height="25" /> 

- [Júlio Tinti](https://www.linkedin.com/in/juliotinti/)

For more details about the project, please refer to the subsequent chapters of this README or contact us.