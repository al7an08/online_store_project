class TypeController {
    async create(req, res) {

    }
    async getAll(req, res) {
        res.json({ message: 'GET ALL types' })
    }
}

module.exports = new TypeController()