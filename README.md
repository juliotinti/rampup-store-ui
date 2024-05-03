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
3. Go to where you've cloned, then: npm install ; ng serve
4. Just access http://localhost:4200/

OR

1. You can go to this repository https://github.com/juliotinti/rampup-store-api and use the Installation to make a docker image.
2. docker build -t <IMAGE_NAME>:latest .
3. Then, you can install the docker compose and use the 'docker-compose.yaml'.
4. You just need to change the image of this 'docker-compose.yaml', to make it the name of you image. 
5. And know, you have the backend and frontend of the store, just access the http://localhost:4200/

## Results

Login page:

<p align="center"> <img src="https://iili.io/Jg8yKAu.md.png" width="600"/> </p>

Sign Up page:

<p align="center"> <img src="https://iili.io/JgOfY7t.png" width="600"/> </p>

[OPERATOR] Home page:

<p align="center"> <img src="https://iili.io/JgSdV14.png" width="600"/> </p>

[OPERATOR] Home page - Edit personal Info: 

<p align="center"> <img src="https://iili.io/JgSdbEv.png" width="600"/> </p>

[OPERATOR] Home page - Add new address: 

<p align="center"> <img src="https://iili.io/JgS37DX.png" width="600"/> </p>

[OPERATOR] Home page - Delete account: 

<p align="center"> <img src="https://iili.io/JgS3ssa.png" width="600"/> </p>

[OPERATOR] Product page: 

<p align="center"> <img src="https://iili.io/JgSKujt.png" width="600"/> </p>

[OPERATOR] Product page - Purchase button: 

<p align="center"> <img src="https://iili.io/JgSKv9V.png" width="600"/> </p>

[OPERATOR] When add to shopping cart:

<p align="center"> <img src="https://iili.io/JgSKZ9p.png" width="200"/> </p>

[OPERATOR] Product page - Shopping cart button clicked: 

<p align="center"> <img src="https://iili.io/JgSf9Ps.png" width="600"/> </p>

[OPERATOR] Shopping cart popup - Choose the delivery address: 

<p align="center"> <img src="https://iili.io/JgSfnVe.png" width="600"/> </p>

[OPERATOR] Order page: 

<p align="center"> <img src="https://iili.io/JgSfcWF.png" width="600"/> </p>

[OPERATOR] Order page - View order detail: 

<p align="center"> <img src="https://iili.io/JgSfwxt.png" width="600"/> </p>

[OPERATOR] Order page - Open ticket: 

<p align="center"> <img src="https://iili.io/JgSfPz7.png" width="600"/> </p>

[OPERATOR] Ticket page: 

<p align="center"> <img src="https://iili.io/JgSqqdv.png" width="600"/> </p>

[ADMIN] Manage Products: 

<p align="center"> <img src="https://iili.io/JgSqLTN.png" width="600"/> </p>

[ADMIN] Manage Products - Add product: 

<p align="center"> <img src="https://iili.io/JgSB08v.png" width="600"/> </p>

[ADMIN] Manage Products - Remove: 

<p align="center"> <img src="https://iili.io/JgSBOcG.png" width="600"/> </p>

[ADMIN] Manage Users: 

<p align="center"> <img src="https://iili.io/JgSB4V9.png" width="600"/> </p>

[ADMIN] Manage Users - Add admin: 

<p align="center"> <img src="https://iili.io/JgSCJKg.png" width="600"/> </p>

[ADMIN] Manage Users - Remove: 

<p align="center"> <img src="https://iili.io/JgSCCxI.png" width="600"/> </p>

[ADMIN] Orders: 

<p align="center"> <img src="https://iili.io/JgSCaxS.png" width="600"/> </p>

[ADMIN] Orders - Detail: 

<p align="center"> <img src="https://iili.io/JgSCVJj.png" width="600"/> </p>

[ADMIN] Manage Tickets: 

<p align="center"> <img src="https://iili.io/JgSCUdJ.png" width="600"/> </p>

[ADMIN] Manage Tickets - Solve: 

<p align="center"> <img src="https://iili.io/JgSnqdb.png" width="600"/> </p>

[ADMIN] Informations: 

<p align="center"> <img src="https://iili.io/JgSnakv.png" width="600"/> </p>

## Contributing
We welcome contributions from the open-source community. If you would like to contribute to this, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request.

## Author <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width="25" height="25" /> 

- [Júlio Tinti](https://www.linkedin.com/in/juliotinti/)

For more details about the project, please refer to the subsequent chapters of this README or contact us.