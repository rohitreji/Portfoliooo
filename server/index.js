const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple in-memory storage
let messages = [];
let messageId = 1;

console.log('🚀 Portfolio Backend Starting...');

// Health check
app.get('/ping', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend is running perfectly!',
    timestamp: new Date().toISOString(),
    messageCount: messages.length
  });
});

// Contact form
app.post('/api/contact', (req, res) => {
  try {
    console.log('📧 Contact form received:', req.body);
    
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required'
      });
    }
    
    // Store in memory
    const newMessage = {
      id: messageId++,
      name: name.toString().trim(),
      email: email.toString().trim(),
      message: message.toString().trim(),
      timestamp: new Date().toISOString()
    };
    
    messages.push(newMessage);
    
    console.log('✅ Message stored. ID:', newMessage.id);
    
    res.json({
      status: 'success',
      message: 'Message sent successfully!',
      id: newMessage.id
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error'
    });
  }
});

// Get messages (for testing)
app.get('/api/messages', (req, res) => {
  res.json({
    status: 'success',
    count: messages.length,
    messages: messages
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log('💾 Storage: In-memory (no database required)');
});