import Species from "../models/speciesModel.js"

export const store = async (req, res) => {
    try {
        const species = await Species.create(req.body)
        return res.status(201).json(species)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const index = async (req, res) => {
    try {
        const speciess = await Species.find().exec()
        return res.status(200).json(speciess)
    } catch (error){
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const show = async (req, res) => {
    try {
        const speciess = await Species.findById().exec()
        return res.status(200).json(speciess)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const update = async (req, res) => {
    try {
        const species = await Species.findByIdAndUpdate(re.params.id, req.body).exec()
        return res.status(200).json(species)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}

export const destroy = async (req, res) => {
    try {
        const species = await Species.findByIdAndDelete(req.params.id).exec()
        return res.status(200).json(species)
    } catch (error) {
        return res.status(400).json({ mensage: error.mensage })
    }
}