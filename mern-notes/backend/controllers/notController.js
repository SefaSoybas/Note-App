const NotModel= require('../models/notModel')
const mongoose= require('mongoose')

const createNote= async (req,res) => {
    const {title,explain} = req.body;

    try {
        const newNote = await new NotModel({title, explain}).save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getAllNotes= async (req,res) => {
    try {
        const notes = await NotModel.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getNoteById= async (req,res) => {
   
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error: 'Invalid ID'});
        }

        const not= await NotModel.findById(id);
        if(!not){
            return res.status(404).json({error: 'Note not found'});
        }

        res.status(200).json(not);
   
}

const deleteNote = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'});
    }
    
    const not= await NotModel.findOneAndDelete({_id:id})
    if(!not){
        return res.status(404).json({error: 'Note not found'});
    }
}

const updateNote = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'});
    }
    const not= await NotModel.findOneAndUpdate({_id:id},{
         ...req.body
    },{new:true})
    if(!not){
        return res.status(404).json({error: 'Note not found'});
    }
    res.status(200).json(not);
}

module.exports = {createNote, getAllNotes, getNoteById, deleteNote, updateNote};