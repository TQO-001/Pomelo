# Invoice & Subscription Billing App

## **Overview**

This project is a simple **Invoice & Subscription Billing App** created using **HTML**, **CSS**, and **JavaScript**. The app allows users to:

- Create invoices.
- Manage subscriptions.
- Store data in the browser using **localStorage**.

This is a **Minimum Viable Product (MVP)** version of the app, designed to be a starting point. More advanced features like payment processing, user authentication, and server-side integration can be added later.

## **Features**

### 1. **Invoice Management**

- Create invoices by entering client information, amount, and due date.
- View a list of created invoices.

### 2. **Subscription Management**

- Create and manage subscription plans (e.g., price, renewal period).

### 3. **Local Storage**

- Store invoices and subscription data in **localStorage** for persistent access between sessions.

### 4. **Basic UI**

- Simple and clean design using **HTML** and **CSS**.
- Easy-to-use forms for entering invoice and subscription details.

## **Tech Stack**

- **Frontend**:
    
    - **HTML**: Markup for structure.
    - **CSS**: Styling for layout and design.
    - **JavaScript**: Logic for functionality and handling data.
    
- **Storage**:
    
    - **localStorage**: To store invoices and subscription data on the browser.

## **File Structure**

```
/invoice-billing-app
├── index.html           # Main dashboard page displaying invoices
├── create-invoice.html  # Form for creating a new invoice
├── manage-subscription.html # Form for managing subscriptions
├── styles.css           # Styles for the app
└── script.js            # JavaScript logic for managing data and UI
```

## **Installation**

1. **Clone the Repository**
    
    - Clone the repository to your local machine using the following command:
    
    ```bash
    git clone https://github.com/your-username/invoice-billing-app.git
    ```
    
2. **Run the App**
    
    - Open the `index.html` file in your web browser to access the app.

3. **No Server Required**
    
    - Since this app uses **localStorage** to store data, it works entirely on the frontend. No server or backend is needed.

## **Usage**

### Dashboard (`index.html`)

- View a list of all created invoices.
- Links to create a new invoice or manage subscriptions.

### Create Invoice (`create-invoice.html`)

- Fill in the form with:
    
    - **Client Name**
    - **Amount**
    - **Due Date**

- Submit to save the invoice in **localStorage**.

### Manage Subscription (`manage-subscription.html`)

- Fill in the form with:
    
    - **Subscription Name**
    - **Price**
    - **Renewal Period (Months)**

- Submit to save the subscription in **localStorage**.

### Viewing and Managing Data

- Data is saved in the browser using **localStorage**, so it will persist between sessions, but it's only stored locally and not shared or synced between devices.

## **Future Enhancements**

This MVP version can be expanded to include:

- **Payment Gateway Integration** (e.g., Stripe, PayPal).
- **Invoice Editing/Deletion**: Ability to update or remove invoices.
- **Backend Integration**: Use a backend database (e.g., PostgreSQL, MongoDB) for more robust data storage.
- **User Authentication**: Allow multiple users to manage their invoices and subscriptions securely.
