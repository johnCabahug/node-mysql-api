# Node.js MySQL API - Backend

## Live URLs
- **Live Backend URL:** https://node-mysql-api-5pnk.onrender.com
- **Swagger Documentation:** https://node-mysql-api-5pnk.onrender.com/api-docs

## Tech Stack
- Node.js + TypeScript
- MySQL (Railway)
- Sequelize ORM
- JWT Authentication + Refresh Tokens
- Nodemailer (Mailtrap)
- Swagger UI

## Setup Instructions

### Prerequisites
- Node.js v18+
- MySQL database

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/johnCabahug/node-mysql-api.git
   cd node-mysql-api/node-mysql-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `config.json` in the root directory:
   ```json
   {
     "secret": "your-jwt-secret",
     "database": {
       "host": "localhost",
       "port": 3306,
       "user": "root",
       "password": "your-password",
       "database": "your-db-name"
     },
     "emailFrom": "noreply@example.com",
     "smtpOptions": {
       "host": "smtp.ethereal.email",
       "port": 587,
       "auth": {
         "user": "your-smtp-user",
         "pass": "your-smtp-pass"
       }
     }
   }
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

5. Visit Swagger docs at: `http://localhost:4000/api-docs`

### Production (Render)
Set these environment variables on Render:
- `NODE_ENV=production`
- `JWT_SECRET=your-secret`
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- `CORS_ORIGIN=https://your-frontend.onrender.com`
- `COOKIE_SECURE=true`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM`
- `MAILTRAP_TOKEN=your-token`

## API Endpoints
- `POST /accounts/register` - Register new account
- `POST /accounts/authenticate` - Login
- `POST /accounts/refresh-token` - Refresh JWT token
- `POST /accounts/revoke-token` - Logout
- `POST /accounts/verify-email` - Verify email
- `POST /accounts/forgot-password` - Forgot password
- `POST /accounts/reset-password` - Reset password
- `GET /accounts` - Get all accounts (Admin only)
- `GET /accounts/:id` - Get account by ID
- `PUT /accounts/:id` - Update account
- `DELETE /accounts/:id` - Delete account
