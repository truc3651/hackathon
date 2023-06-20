const router = express.Router();
const {TOPICS, responses} = require('../mock')

router.post('/v1/api/bot/request', (req, res) => {
    const message = req.body.message
    const words = message.split(' ')
    const topic = Object.values(TOPICS).map(topic => {
        const foundYa = topic.tags.some(tag => words.include(tag));
        if (foundYa) {
            return topic
        }
    })
    return res.json(responses[topic])
})