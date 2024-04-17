const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5005;

app.use(express.static('views/site_upgrade'));

// Serve a specific file when the root is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'site_upgrade', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
