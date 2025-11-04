const sql = require('mssql');
require('dotenv').config();

console.log('Testing direct connection...');
console.log('DB_SERVER:', process.env.DB_SERVER);

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    connectTimeout: 5000,
    requestTimeout: 5000
  }
};

async function test() {
  try {
    console.log('🔄 Connecting...');
    await sql.connect(config);
    console.log('✅ Connected!');
    
    const result = await sql.query`SELECT @@version as version`;
    console.log('✅ Query executed successfully');
    
    await sql.close();
    console.log('✅ Connection closed');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

test();