const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for messages
let messages = [];
let messageId = 1;

console.log('🚀 Portfolio Backend Server Starting...');

// Health check endpoint
app.get('/ping', (req, res) => {
  console.log('✅ Health check received');
  res.json({ 
    status: 'ok', 
    message: 'Server is running perfectly!',
    timestamp: new Date().toISOString(),
    messageCount: messages.length
  });
});

// Contact form endpoint - SIMPLE VERSION
app.post('/api/contact', (req, res) => {
  try {
    console.log('📧 Contact form submission received');
    console.log('Request body:', req.body);
    
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      console.log('❌ Validation failed: missing fields');
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required: name, email, message'
      });
    }
    
    // Create message object
    const newMessage = {
      id: messageId++,
      name: name.toString().trim(),
      email: email.toString().trim(),
      message: message.toString().trim(),
      timestamp: new Date().toISOString(),
      receivedAt: new Date().toLocaleString()
    };
    
    // Store in memory
    messages.push(newMessage);
    
    console.log('✅ Message stored successfully!');
    console.log('📝 Message details:', {
      id: newMessage.id,
      name: newMessage.name,
      email: newMessage.email,
      length: newMessage.message.length
    });
    console.log('💾 Total messages stored:', messages.length);
    
    // Success response
    res.json({
      status: 'success',
      message: 'Your message has been sent successfully!',
      id: newMessage.id,
      timestamp: newMessage.timestamp
    });
    
  } catch (error) {
    console.error('❌ Unexpected error in contact form:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error: ' + error.message
    });
  }
});

// Get all messages (for testing/admin)
app.get('/api/messages', (req, res) => {
  res.json({
    status: 'success',
    count: messages.length,
    messages: messages
  });
});

// Clear messages (for testing)
app.delete('/api/messages', (req, res) => {
  const count = messages.length;
  messages = [];
  messageId = 1;
  res.json({
    status: 'success',
    message: `Cleared ${count} messages`
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🎉 Portfolio Backend API is Running!',
    version: '1.0.0',
    status: 'active',
    endpoints: {
      health: 'GET /ping',
      contact: 'POST /api/contact',
      messages: 'GET /api/messages (for testing)'
    },
    storage: 'in-memory',
    note: 'Messages persist until server restart'
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================');
  console.log('✅ SERVER STARTED SUCCESSFULLY!');
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 Health: https://portfoliooo-nix6.onrender.com/ping`);
  console.log(`📧 Contact: https://portfoliooo-nix6.onrender.com/api/contact`);
  console.log('💾 Storage: In-memory (no database)');
  console.log('=================================');
});