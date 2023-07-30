# PC Builder Website

The PC Builder Website is a web application built using Next.js, React, and Tailwind CSS. It allows users to explore, customize, and build their dream PC by selecting and assembling various PC components.

## Live Link : https://buils-amt-next.vercel.app/

## Code Link : https://github.com/AmtTawsik/PC-Builder-With-Next.js
## Features

- **PC Builder Tool:** Users can use the PC Builder tool to add selected PC components and build their own custom PC.
- **Navbar with Categories:** The navbar features a "PC Builder" button that redirects users to the PC Builder page. It also includes a "Categories" dropdown with options for CPU/Processor, Motherboard, RAM, Power Supply Unit, Storage Device, Monitor, and Others.
- **Featured Products on Home Page:** The home page showcases at least 6 random PC components as Featured Products. Each product card displays essential details such as image, product name, category, price, status, and rating.
- **Product Detail Page:** Each PC component has a dedicated product detail page, offering detailed information about the product, including image, product name, category, status, price, description, key features, individual rating, average rating, and reviews.
- **Featured Category Sections:** The website has clickable featured category sections that redirect users to separate pages displaying at least 3 products from each specific category.
- **Add To Builder Button:** Users can select components from each category and add them to the PC Builder page by clicking the "Add To Builder" button.
- **Complete Build Button:** The PC Builder page has a "Complete Build" button that becomes active once the user adds at least 5-6 components. Clicking the button triggers a success alert.
- **User Authentication (Bonus):** The PC Builder page is a protected/private route accessible only to logged-in users. NextAuth is used for user authentication with social login providers like Google or Github.

## Instructions to Run the Project

1. Clone the repository:

