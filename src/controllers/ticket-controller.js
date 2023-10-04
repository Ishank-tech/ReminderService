const TicketService = require('../services/email-service');
const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        console.log(req.body);
        return res.status(201).json({ 
            success: true,
            data: response,
            err: {},
            message: "Successfully registered an email reminder"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Unable to register an email reminder"
        });
    }
}

module.exports = {
    create
}