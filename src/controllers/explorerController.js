import Explorer from "../models/explorerModel.js"

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body)
        return res.status(201).json(explorer)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const index = async (req, res) => {
    try {
        const explorers = await Explorer.find().exec()
        return res.status(200).json(explorers)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const show = async (req, res) => {
    try {
        const explorers = await Explorer.findById().exec()
        return res.status(200).json(explorers)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(re.params.id, req.body).exec()
        return res.status(200).json(explorer)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const destroy = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndDelete(req.params.id).exec()
        return res.status(200).json(explorer)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}