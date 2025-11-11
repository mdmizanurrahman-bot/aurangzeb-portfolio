# 🗄️ Supabase Database Setup Guide

## 📊 Current Supabase Configuration

Your project is already connected to Supabase:

```
Project ID: okodhvecyelxvpnxcids
Project URL: https://okodhvecyelxvpnxcids.supabase.co
Region: (Check in dashboard)
```

---

## 🔑 Access Your Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "Projects" on the left
3. Find and click on project with ID: `okodhvecyelxvpnxcids`
4. You now have access to all project settings

---

## 🏗️ Database Tables (Optional)

The current system uses **key-value storage** (KV). To add traditional SQL tables:

### Option A: Using Supabase UI

1. In Supabase dashboard, click **"SQL Editor"**
2. Click **"New Query"**
3. Paste the SQL below
4. Click **"Run"**

### Option B: SQL Schema

```sql
-- Create Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  tags TEXT[],
  liveUrl TEXT,
  githubUrl TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Posts Table
CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  thumbnail TEXT,
  author TEXT,
  readTime TEXT,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create Videos Table
CREATE TABLE IF NOT EXISTS videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail TEXT,
  videoUrl TEXT,
  youtubeId TEXT,
  category TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create Certificates Table
CREATE TABLE IF NOT EXISTS certificates (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT,
  issuedDate TEXT,
  expiryDate TEXT,
  certificateUrl TEXT,
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  position TEXT NOT NULL,
  company TEXT NOT NULL,
  startDate TEXT,
  endDate TEXT,
  description TEXT,
  location TEXT,
  current BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  clientName TEXT NOT NULL,
  clientCompany TEXT,
  rating INTEGER,
  review TEXT,
  clientImage TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create QA Table
CREATE TABLE IF NOT EXISTS qa (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT,
  category TEXT,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Messages Table
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  source TEXT,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create Settings Table
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_posts_author ON posts(author);
CREATE INDEX idx_messages_status ON messages(status);
CREATE INDEX idx_jobs_company ON jobs(company);
```

---

## 🔐 Enable Row Level Security (RLS)

For production, enable RLS on all tables:

1. Go to **Authentication** → **Policies**
2. For each table:
   - Click the table
   - Click **"New Policy"**
   - Select **"For public read access"** 
   - Or create custom policies

### Public Read Policy Example:

```sql
CREATE POLICY "Enable read access for all users" ON projects
  FOR SELECT USING (true);
```

### Authenticated Write Policy Example:

```sql
CREATE POLICY "Enable insert for authenticated users only" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

---

## 🔌 Connect to Database

### Using Supabase JS Client (Already Installed)

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://okodhvecyelxvpnxcids.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2RodmVjeWVseHZwbnhjaWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1ODUwMDUsImV4cCI6MjA3ODE2MTAwNX0.gMS53tgDFLizcqT-ZER8rEoNJT0bF8HKuWSPHccipjQ'
)

// Fetch projects
const { data: projects, error } = await supabase
  .from('projects')
  .select('*')

// Insert project
const { data, error } = await supabase
  .from('projects')
  .insert([{ title: 'New Project', description: '...' }])
```

---

## 📝 Backup & Export Data

### Export Database

1. Go to **Settings** → **Backups**
2. Click **"Download backup"**
3. Choose date
4. Download backup file

### Restore Database

1. Go to **Settings** → **Backups**
2. Click **"Restore"** on desired backup
3. Confirm restoration

---

## 📊 Monitor Usage

### Check Quotas

1. Go to **Settings** → **Billing**
2. View:
   - Database size
   - Realtime connections
   - Monthly active users
   - Storage usage

### View Logs

1. Go to **Logs** menu
2. Select log type:
   - API Activity
   - Function Logs
   - Database Logs
   - Auth Logs

---

## 🔑 API Keys Management

### View Your Keys

1. Go to **Settings** → **API**
2. You'll see:
   - **Anon Key**: Public (used in frontend)
   - **Service Role Key**: Private (never share!)

### Rotate Keys

When deploying publicly:

1. Go to **Settings** → **API**
2. Click **"Rotate"** next to each key
3. Update in Vercel/Netlify
4. Old keys will be invalidated

### Generate New Keys

1. Go to **Settings** → **API**
2. Click **"Generate New"**
3. Update all services

---

## 🔒 Security Configuration

### Enable JWT Expiry

1. Go to **Authentication** → **Policies**
2. Set JWT expiration (default: 1 hour)

### Configure CORS

1. Go to **Settings** → **API** → **CORS**
2. Add your domain:
   ```
   http://localhost:3000
   http://localhost:3001
   https://yourwebsite.com
   https://yourwebsite.vercel.app
   https://yourwebsite.netlify.app
   ```

### Enable Two-Factor Auth

1. Go to **Authentication** → **Settings**
2. Enable **"Enable Two-Factor Authentication"**

---

## 🤝 Team & Access

### Add Team Members

1. Go to **Settings** → **Team**
2. Click **"Add member"**
3. Enter email
4. Choose role:
   - **Owner**: Full access
   - **Developer**: Most access
   - **Viewer**: Read-only

### Project Access Control

1. Go to **Settings** → **API**
2. Set API rate limits
3. Configure access permissions

---

## 📈 Scaling Considerations

### Auto-scaling

Supabase handles:
- ✓ Automatic backups
- ✓ Point-in-time recovery
- ✓ Replication
- ✓ Load balancing

### Connection Pooling

For high traffic:

1. Go to **Settings** → **API**
2. Enable **"Connection Pooling"**
3. Recommended for production

---

## 🚨 Common Issues & Solutions

### Connection Refused

- [ ] Check project is active (not paused)
- [ ] Verify CORS settings
- [ ] Check firewall/network

### Authentication Failed

- [ ] Verify API keys are correct
- [ ] Check user exists in auth
- [ ] Verify policies are configured

### Slow Queries

- [ ] Add indexes to frequently queried columns
- [ ] Check query performance in logs
- [ ] Consider connection pooling

### Storage Quota Exceeded

- [ ] Delete old data/backups
- [ ] Upgrade plan
- [ ] Optimize database schema

---

## 📚 Useful Resources

- [Supabase Docs](https://supabase.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Real-time Subscriptions](https://supabase.com/docs/guides/realtime)
- [Edge Functions](https://supabase.com/docs/guides/functions)
- [Storage](https://supabase.com/docs/guides/storage)

---

## ✅ Setup Checklist

- [ ] Accessed Supabase dashboard
- [ ] Verified project credentials
- [ ] Created database tables (optional)
- [ ] Enabled RLS policies
- [ ] Configured CORS
- [ ] Added team members (if needed)
- [ ] Set up backups
- [ ] Configured API rate limits
- [ ] Tested database connection
- [ ] Monitoring set up

---

## 🎯 Next Steps

1. **Local Development**: Test API with `npm run dev`
2. **Production Deployment**: Update environment variables
3. **Monitor Performance**: Check Supabase logs regularly
4. **Scale as Needed**: Upgrade plan if necessary
5. **Security Audits**: Review access logs periodically

---

Your Supabase project is ready to use! 🎉
