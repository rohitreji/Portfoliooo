const express = require('express');
const cors = require('cors');
const sql = require('mssql');
require('dotenv').config();

console.log('🚀 Server starting...');

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: 'R0H1T-REJ1\\SQLEXPRESS', // Hardcode the working server
  database: 'Portfolio', // Hardcode the database
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
    connectTimeout: 10000,
    requestTimeout: 15000
  }
};

console.log('🔧 Config ready, initializing SQL connection...');

// Initialize connection pool immediately
let pool;

async function initializeDatabase() {
  try {
    console.log('🔄 Connecting to SQL Server...');
    pool = await sql.connect(config);
    console.log('✅ Connected to SQL Server successfully!');
    return pool;
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    throw err;
  }
}

// Initialize database on startup
initializeDatabase().then(() => {
  console.log('✅ Database initialization complete');
}).catch(err => {
  console.error('❌ Database initialization failed');
});

// Simple health check
app.get('/ping', (req, res) => {
  res.json({ status: 'ok', database: pool ? 'connected' : 'disconnected' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('POST /api/contact body:', req.body);
  
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ status: 'error', message: 'Missing fields' });
    }

    // Use the global pool
    const request = pool.request();
    await request
      .input('name', sql.NVarChar(100), name)
      .input('email', sql.NVarChar(255), email)
      .input('message', sql.NVarChar(sql.MAX), message)
      .query('INSERT INTO dbo.Messages (Name, Email, Message) VALUES (@name, @email, @message)');

    console.log('✅ Insert successful for', email);
    return res.json({ status: 'success' });
    
  } catch (err) {
    console.error('❌ Server error on /api/contact:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Test endpoint to check database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT COUNT(*) as count FROM dbo.Messages');
    res.json({ 
      status: 'success', 
      message: 'Database connection working', 
      count: result.recordset[0].count 
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
  console.log('📝 Endpoints available:');
  console.log('   GET  http://localhost:4000/ping');
  console.log('   GET  http://localhost:4000/api/test-db');
  console.log('   POST http://localhost:4000/api/contact');
});