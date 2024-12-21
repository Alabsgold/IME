const express = require('express');
const app = express();

app.use(express.json());

app.post('/track-imei', (req, res) => {
    const { imei } = req.body;

    // Validate IMEI format (e.g., length of 15 digits)
    if (/^\d{15}$/.test(imei)) {
        res.send(`Tracking details for IMEI: ${imei}`);
    } else {
        res.status(400).send('Invalid IMEI format. Please provide a 15-digit number.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
