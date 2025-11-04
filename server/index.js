const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS configuration - allow all origins for now
app.use(cors({
  origin: true, // Allow all origins temporarily
  credentials: true
}));

app.use(express.json());

// In-memory storage for messages (temporary solution)
let messages = [];
let messageId = 1;

console.log('🚀 Server starting with in-memory storage...');

// Basic health check
app.get('/ping', (req, res) => {
  res.json({ 
    status: 'ok', 
    database: 'in-memory', 
    messageCount: messages.length,
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log('📧 Contact form submission received:', { name, email, message });
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'All fields are required' 
      });
    }

    // Store in memory
    const newMessage = {
      id: messageId++,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: req.ip
    };
    
    messages.push(newMessage);
    
    console.log('✅ Message stored (in-memory). Total messages:', messages.length);
    console.log('📝 Message details:', { name: newMessage.name, email: newMessage.email });
    
    res.json({ 
      status: 'success', 
      message: 'Message sent successfully!',
      messageId: newMessage.id
    });
    
  } catch (err) {
    console.error('❌ Contact form error:', err.message);
    res.status(500).json({ 
      status: 'error', 
      message: 'Internal server error' 
    });
  }
});

// Get all messages (for testing)
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
    message: 'Portfolio Backend API', 
    status: 'running',
    storage: 'in-memory',
    endpoints: {
      health: 'GET /ping',
      contact: 'POST /api/contact',
      messages: 'GET /api/messages (dev)',
      clear: 'DELETE /api/messages (dev)'
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📧 Contact form ready at /api/contact`);
  console.log(`❤️ Health check at /ping`);
});