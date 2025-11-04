const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];
let messageId = 1;

console.log('=== 🚀 PORTFOLIO BACKEND STARTED ===');

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend API is running!',
    endpoints: {
      health: 'GET /ping',
      contact: 'POST /api/contact',
      messages: 'GET /api/messages'
    },
    status: 'active'
  });
});

// Health check
app.get('/ping', (req, res) => {
  console.log('✅ Health check received');
  res.json({
    status: 'ok',
    message: 'Backend is running perfectly!',
    timestamp: new Date().toISOString(),
    messageCount: messages.length
  });
});

// CONTACT FORM ENDPOINT - THIS IS CRITICAL
app.post('/api/contact', (req, res) => {
  console.log('📧 CONTACT FORM RECEIVED:', req.body);
  
  try {
    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Name, email, and message are required'
      });
    }
    
    // Store message
    const newMessage = {
      id: messageId++,
      name: name.toString().trim(),
      email: email.toString().trim(),
      message: message.toString().trim(),
      timestamp: new Date().toISOString()
    };
    
    messages.push(newMessage);
    
    console.log(`✅ MESSAGE STORED - ID: ${newMessage.id}, Total: ${messages.length}`);
    
    // Success response
    res.json({
      status: 'success',
      message: 'Message sent successfully!',
      id: newMessage.id
    });
    
  } catch (error) {
    console.error('❌ CONTACT FORM ERROR:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error: ' + error.message
    });
  }
});

// Get all messages
app.get('/api/messages', (req, res) => {
  res.json({
    status: 'success',
    count: messages.length,
    messages: messages
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('=================================');
  console.log('✅ SERVER RUNNING ON PORT:', PORT);
  console.log('📧 CONTACT ENDPOINT: /api/contact');
  console.log('❤️ HEALTH CHECK: /ping');
  console.log('=================================');
});