const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple in-memory storage
let messages = [];
let idCounter = 1;

console.log('🚀 SIMPLE BACKEND STARTED - NO DATABASE');

// Health check
app.get('/ping', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Simple backend is working!',
    storage: 'in-memory',
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
        message: 'Missing required fields'
      });
    }
    
    // Store in memory
    const newMessage = {
      id: idCounter++,
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };
    
    messages.push(newMessage);
    
    console.log('✅ Message stored. Total:', messages.length);
    
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

// Get messages
app.get('/api/messages', (req, res) => {
  res.json({
    status: 'success',
    messages: messages
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Simple backend running on port ${PORT}`);
});