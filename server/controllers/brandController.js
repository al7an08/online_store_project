class BrandController {
    async create(req, res) {

    }
    async getAll(req, res) {
        res.json({ message: 'GET ALL brands' })
    }
}

module.exports = new BrandController()