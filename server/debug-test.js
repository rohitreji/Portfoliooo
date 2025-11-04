const sql = require('mssql');
require('dotenv').config();

console.log('Current .env values:');
console.log('DB_SERVER:', process.env.DB_SERVER);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_DATABASE:', process.env.DB_DATABASE);

// Test different connection strings
const configs = [
  {
    name: 'Option 1 - localhost with instance',
    config: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: 'localhost\\SQLEXPRESS',
      database: process.env.DB_DATABASE,
      options: { encrypt: false, trustServerCertificate: true }
    }
  },
  {
    name: 'Option 2 - computer name with instance',
    config: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: 'R0H1T-REJ1\\SQLEXPRESS',
      database: process.env.DB_DATABASE,
      options: { encrypt: false, trustServerCertificate: true }
    }
  },
  {
    name: 'Option 3 - dot with instance',
    config: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: '.\\SQLEXPRESS',
      database: process.env.DB_DATABASE,
      options: { encrypt: false, trustServerCertificate: true }
    }
  },
  {
    name: 'Option 4 - localhost with port',
    config: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: 'localhost',
      database: process.env.DB_DATABASE,
      port: 1433,
      options: { encrypt: false, trustServerCertificate: true }
    }
  }
];

async function testConnection(config, name) {
  try {
    console.log(`\n🔹 Testing: ${name}`);
    console.log(`   Server: ${config.server}`);
    await sql.connect(config);
    console.log('   ✅ SUCCESS!');
    await sql.close();
    return true;
  } catch (err) {
    console.log('   ❌ FAILED:', err.message);
    return false;
  }
}

async function runTests() {
  for (const test of configs) {
    const success = await testConnection(test.config, test.name);
    if (success) {
      console.log(`\n🎉 Working configuration found: ${test.name}`);
      console.log('Use this in your .env file:');
      console.log(`DB_SERVER=${test.config.server.replace(/\\/g, '\\\\')}`);
      break;
    }
  }
}

runTests();