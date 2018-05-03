# PFL API APP

This is the front-end code of my coding challenge for PFL. The code makes use of React as the front-end framework, Redux for state management, Axios to make server calls, and ReactStrap as a UI framework.

### The App consists of 4 main components:

##### App.js

This is the main component that is viewed by the user. All the other components are children of, and connected to App.js

##### ProductList.js

This displays the available products PFL has to offer, using their test API

##### UserOrderCart.js

This is the users cart consisting of the products they have selected to purchase. It will update real time as products are added

##### UserCheckoutModal.js

This is a modal of inputs for the users info as well as the final step in the checkout process