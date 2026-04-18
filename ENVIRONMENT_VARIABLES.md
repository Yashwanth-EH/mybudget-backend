# Vercel Environment Variables Setup

## Required Environment Variables

### 1. MONGODB_URI
**Purpose**: Connection string to your MongoDB Atlas database
**Format**: 
```
mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

**Example**:
```
mongodb+srv://yashwanth:yashwanth123@mybudget-cluster.abcde.mongodb.net/mybudget?retryWrites=true&w=majority
```

**How to get**:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create free cluster
3. Click "Connect" > "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password

### 2. JWT_SECRET
**Purpose**: Secret key for JWT token generation
**Format**: Random secure string (minimum 32 characters)

**Example**:
```
mySuperSecretKey1234567890abcdef!@#$%^&*()
```

**How to generate**:
```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Using OpenSSL
openssl rand -base64 32

# Or use any random string generator
```

**Generated Example**:
```
xJ9k2m5n8p1q4r7t0u3w6z9c2v5b8n1m4p7q0r3t6u9w2x5z8c1v4b7n0m3p6q9
```

### 3. NODE_ENV
**Purpose**: Environment mode
**Value**: `production`

## How to Add Environment Variables in Vercel

### Method 1: Vercel CLI
```bash
# Add each variable
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add NODE_ENV

# Then deploy
vercel --prod
```

### Method 2: Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add each variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string
   - Environments: Production, Preview, Development

5. Repeat for `JWT_SECRET` and `NODE_ENV`

## Quick Copy-Paste Values

**JWT_SECRET (copy this)**:
```
xJ9k2m5n8p1q4r7t0u3w6z9c2v5b8n1m4p7q0r3t6u9w2x5z8c1v4b7n0m3p6q9
```

**NODE_ENV (copy this)**:
```
production
```

**MONGODB_URI** - You need to get this from your MongoDB Atlas dashboard

## Verification

After deployment, verify your environment variables are working by checking:
- Database connection logs
- JWT token generation
- API endpoints responding correctly

## Common Issues

1. **MongoDB Connection Error**: 
   - Check if your IP is whitelisted in MongoDB Atlas
   - Verify username/password are correct

2. **JWT Error**: 
   - Ensure JWT_SECRET is at least 32 characters
   - Check for special characters that need escaping

3. **Environment Variables Not Loading**:
   - Restart your Vercel deployment after adding variables
   - Check variable names match exactly (case-sensitive)
