This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# Finance Expense Tracker

This project is a **Finance Expense Tracker** built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). The application allows users to track their income and expenses, save details such as amount, category, date, and time, and visualize their spending habits through a dynamic doughnut chart. The app integrates with Firebase for real-time data storage and management.

## Features

- **Income and Expense Tracking**: Users can add their income and expenses, specifying the amount, description, and category.
- **Firebase Integration**: Data is stored in Firestore for real-time updates.
- **Doughnut Chart Visualization**: The app provides a statistical view of expenses using a doughnut chart generated by `react-chartjs-2`.
- **Pop-up Form**: Allows users to input income data through a custom pop-up form.
- **Responsive UI**: Built with Tailwind CSS, the UI is fully responsive and modern.
- **Real-time Updates**: Fetch and display user transaction data with real-time updates from Firebase.

## Technologies Used

- **Next.js**
- **Tailwind CSS**
- **Firebase Firestore**
- **React-Chart.js**
- **React Hooks**

## Usage

   - Add Income/Expense:
        Click on the + Income button to open a pop-up where you can enter income details such as amount and description.
        Click on the + Expense button (currently not implemented) to add expense details.

   - View Transaction History:
        Income transactions are displayed with timestamps, allowing users to track their past transactions.

   - Statistics Visualization:
        The doughnut chart shows a breakdown of expenses by category.

## Todo

   - Implement full expense tracking functionality.
   - Add the ability to categorize expenses and view detailed statistics.
   - Improve UI/UX for a better user experience.
   - Deploy the app on a live server (Vercel, Netlify, etc.).

## Contribution

- Feel free to fork this repository and submit pull requests for any improvements or new features.
## License

- This project is licensed under the MIT License.
