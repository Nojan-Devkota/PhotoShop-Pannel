// server.js
const express = require('express');
const app = express();
app.use(express.json());

// --- SECRET VAULT ---
const THE_MISSING_PIECE = `
    alert("Access Granted! Running the premium features...");
    app.doAction('Forest', 'Effects_Reorder'); 
`;

// --- YOUR LIST OF CUSTOMERS ---
const database = {
    "KEY-111": { active: true },  
    "KEY-222": { active: false }
};

app.post('/verify', (req, res) => {
    const { licenseKey } = req.body;
    
    // 1. Check if key exists
    const user = database[licenseKey];

    if (!user) {
        return res.json({ valid: false, message: "Wrong Key" });
    }

    // 2. Check if you revoked it
    if (user.active === false) {
        return res.json({ valid: false, message: "Key Revoked" });
    }

    // 3. SUCCESS: Send the "Missing Piece" code back to them
    return res.json({ 
        valid: true, 
        secretPayload: THE_MISSING_PIECE 
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));