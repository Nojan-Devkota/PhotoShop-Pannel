// server.js
const express = require('express');
const app = express();
app.use(express.json());

// --- THE MISSING PIECE (UNIVERSAL KEY) ---
// The user DOES NOT have this code. The server sends it only if they pay.
// This function overwrites the "dummy" function in the panel.
const THE_MISSING_PIECE = `
    $._ext_PHXS.runEffect = function(actionName) {
        try {
            app.doAction(actionName, 'Effects_Reorder');
        } catch(e) {
            alert("Error running effect: " + e);
        }
    };
`;

// --- CUSTOMER DATABASE ---
const database = {
    "NOJAN-111": { active: true },   // Active Customer
    "NOJAN-222": { active: false }   // Banned Customer
};

app.post('/verify', (req, res) => {
    const { licenseKey } = req.body;
    const user = database[licenseKey];

    // 1. Invalid Key
    if (!user) return res.json({ valid: false, message: "Invalid Key" });

    // 2. Revoked Key
    if (user.active === false) return res.json({ valid: false, message: "Access Revoked" });

    // 3. SUCCESS: Send the Universal Key code
    return res.json({ 
        valid: true, 
        secretPayload: THE_MISSING_PIECE 
    });
});

// Simple "Health Check" for the Ping Cheat
app.get('/', (req, res) => { res.send("I am awake!"); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));