app.use(bodyParser.json());

// Routes
// Create
app.post('/ratings', async (req, res) => {
    try {
        const newRating = new Rating(req.body);
        const savedRating = await newRating.save();
        res.json(savedRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read
app.get('/ratings', async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update
app.put('/ratings/:id', async (req, res) => {
    try {
        const updatedRating = await Rating.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        res.json(updatedRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete
app.delete('/ratings/:id', async (req, res) => {
    try {
        const deletedRating = await Rating.findByIdAndDelete(req.params.id);
        res.json(deletedRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
