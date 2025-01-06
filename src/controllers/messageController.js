const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const { to, content } = req.body;
        const message = new Message({ from: req.user.id, to, content });
        await message.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { from: req.user.id, to: req.params.userId },
                { from: req.params.userId, to: req.user.id },
            ],
        });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
