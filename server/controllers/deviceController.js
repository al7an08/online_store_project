class DeviceController {
    async create(req, res) {

    }
    async getAll(req, res) {
        res.json({ message: 'GET ALL devices' })
    }
}

module.exports = new DeviceController()