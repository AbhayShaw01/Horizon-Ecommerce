# Horizon

Horizon is a modern e-commerce web application built using Next.js. It leverages NextAuth for authentication, Tailwind CSS for styling, and incorporates server actions for seamless interactions.

## Features

- **User Authentication**: Secure login and registration using NextAuth.
- **Cart Management**: Add items to a cart, remove items, and manage cart contents.
- **Search Functionality**: Search for items easily within the application.
- **Product Listings**: List products on the add product page for easy management.
- **Responsive Design**: Styled with Tailwind CSS for a modern, responsive user interface.
- **Server Actions**: Efficient data handling and interactions with server-side actions.
  
## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbhayShaw0301/Horizon-Ecommerce.git
2.Navigate into the project directory:

```bash
  cd Horizon-Ecommerce
```
3.Install dependencies:
```bash
npm install
# or
yarn install
```
4.Set up environment variables. Create a .env.local file in the root directory and add your configuration variables.
```bash
DATABASE_URL="mongo-string"
GOOGLE_CLIENT_ID="google-client-string"
GOOGLE_CLIENT_SECRET="secret-key-string"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="aklndklrfnfkfknn " - any string
```
5.Run the development server:
```bash
npm run dev
# or
yarn dev
```
