const { Router } = require('express');

const router = Router();

// Mock Users
const users = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    { name: 'Sébastien' },
    { name: 'Pisya' },

];

/* GET users listing. */
router.get('/users', (req, res, next) => {
    res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (id >= 0 && id < users.length) {
        res.json(users[id]);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
