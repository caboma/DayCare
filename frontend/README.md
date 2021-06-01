# DayCare

DayCare is a web application aim to provide tools for child daycare providers to spend less time in facility management and more time sharing their care and love with the kids they are taking care of. The app gives a great way for parents to stay informed on the daily activities and development of their kids.  

## Functional Requirements

* Development focuses on a single page application (SPA) called DayCare, built using React.
* Data is persisted by the API server using a PostgreSQL database.
* The client application communicates with an API server over HTTP, using the JSON format.

## Behavioural Requirements

### Providers
* Providers such as daycare owners and managers must create their account in order to access admin functions such as Account Management, Employee Management, Billing and Payments
* Providers can view, create, update and delete user accounts
* Providers can view, create, update and delete billing and payments
* Providers can view, create, update and post check-in and checkouts, activities, profiles and reports, accomplishments and milestones, messages and annoucements

### Admin
* Admin users such as teachers, facilitators and caregivers must create their account in order to be able to use the admin components.
* A teacher/facilitator/caregiver can create, remove, update, and post attendance
* A teacher/facilitator/caregiver can create, remove, update, and post daily activities
* A teacher/facilitator/caregiver can view, create, remove and update profiles and reports
* A teacher/facilitator/caregiver can create, remove, update, and post kids accomplishment and milestones
* A teacher/facilitator/caregiver can create, remove, update, and send direct messages, group messages and announcements


### Parents
* A parent must create their account to login and view their child's daily acitivities, meals, accomplishments and milestones
* A parent can check-in and check-out their kid
* A parent can authorize someone to check-out their kid
* A parent can pay their bills online
* A parent can register their kid to reserve a slot to avail daycare services including termination of the daycare service
* A parent can send, view messages and other announcements and notifications

## Technical Specifications

* [React](https://reactjs.org/)
* [React-bootstrap](https://www.npmjs.com/package/react-bootstrap)
* [React-pdf](https://www.npmjs.com/package/react-pdf)
* [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer)
* [React-Router](https://www.npmjs.com/package/react-router)
* [React-charts](https://www.npmjs.com/package/react-charts)
* [Node-saas](https://www.npmjs.com/package/node-sass)
* [Saas](https://www.npmjs.com/package/sass)
* [Node](https://nodejs.org/en/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Cors](https://www.npmjs.com/package/cors)
* [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [Dot-env](https://www.npmjs.com/package/dot-env)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Express](https://expressjs.com/)
* [PostgresSQL - pg](https://www.npmjs.com/package/pg)
* [pg-native](https://www.npmjs.com/package/pg-native)
* [debug](https://www.npmjs.com/package/debug)
* [Axios](https://github.com/axios/axios)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [Weekpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [nvm](https://github.com/nvm-sh/nvm)
* [Storybook](https://storybook.js.org/)
* [Weekpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [Jest](https://jestjs.io/en/)
* [Testing Library](https://testing-library.com/)

The [Reckon](https://github.com/caboma/DayCare) Single Page Application created using [Create React App](https://facebook.github.io/create-react-app/). [Express](https://expressjs.com/) is the basis for the [DayCare API](https://github.com/caboma/DayCare/tree/master/backend) server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

### Database

* [Database Schema Files](https://github.com/caboma/DayCare/tree/master/backend/db/schema)
* [Database Seed Files](https://github.com/caboma/DayCare/tree/master/backend/db/seeds)
* [Database ERD Model](https://github.com/caboma/DayCare/blob/master/docs/database/erd-model.png)

## Reference

* [React Documentation](https://reactjs.org/)
* [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)
* [Jest Documentation](https://jestjs.io/docs/en/getting-started)
* [Axios Example](https://github.com/axios/axios#example)

## Setup

* Clone the [DayCare Application](https://github.com/caboma/DayCare) repository
* Make sure you are using node version 8.9.4 on the backend (nvm)
* Make sure you are using node version 10.20.1 on the frontend (nvm)
* Install all modules dependencies separately on client and backend and folders by running ```sh npm install`` on each folder.
* After installing all modules dependencies by running ```sh npm install```
* Make sure you perform a [db reset](http://localhost:3001/api/debug/reset) before run DayCare App.

## Running Webpack Development Server

```sh
npm start
```
## Final Product

### Dashboard
![Dashboard](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/dashboard.png)

### Incomes Page
![Incomes](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/incomes.png)

![Adding Income](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/new-income.png)

### Expenses Page
![Expenses](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/expenses.png)

![New Expense](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/new-expense.png)

### Accounts Page
![Accounts](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/accounts.png)

### Account Detail
![Account Detail](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/accounts1.png)

### Reports Page
![Incomes Report](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/income-report.png)
