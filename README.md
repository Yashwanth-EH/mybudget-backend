# MyBudget Backend

## Vercel Deployment

### Prerequisites
- Node.js 18+
- Vercel account
- MongoDB database

### Setup
1. Copy `.env.example` to `.env` and set your environment variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mybudget
   JWT_SECRET=your-jwt-secret-key
   PORT=5000
   NODE_ENV=production
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Deploy to Vercel
1. Push your code to a Git repository
2. Go to Vercel Dashboard
3. Click "New Project" and connect your repository
4. Vercel will automatically detect the Node.js setup
5. Add environment variables in Vercel dashboard
6. Deploy

### Local Development
```bash
npm start
```

### Environment Variables Required
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT token generation
- `NODE_ENV`: Set to "production" for deployment

## API Endpoints
- Authentication: `/api/v1/auth/*`
- Dashboard: `/api/v1/dashboard/*`
- Income: `/api/v1/income/*`
- Expense: `/api/v1/expense/*`
- File Uploads: `/uploads/*`

## File Structure
```
backend/
|-- config/
|   |-- db.js
|-- controllers/
|   |-- authController.js
|   |-- dashboardController.js
|   |-- expenseController.js
|   |-- incomeController.js
|-- middleware/
|   |-- authMiddleware.js
|   |-- uploadMiddleware.js
|-- models/
|   |-- Expense.js
|   |-- Income.js
|   |-- User.js
|-- routes/
|   |-- authRoutes.js
|   |-- dashboardRoutes.js
|   |-- expenseRoutes.js
|   |-- incomeRoutes.js
|-- uploads/
|-- server.js
|-- package.json
|-- vercel.json
```
