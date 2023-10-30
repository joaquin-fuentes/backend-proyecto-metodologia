import { Schema, model } from "mongoose"

const prendaSchema = new Schema({
    nombrePrenda: {
        type: String,
        minLength: 2,
        maxLength: 60,
        required: true
    },
    precio: {
        type: String,
        min: 1,
        max: 200000,
        required: true,
    },
    imagen: {
        type: String,
        minLength: 2,
        maxLength: 250,
        required: true,
    },
    categoria: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true,
        maxLength:30
    },
    talle:{
        type: String,
        required: true,
        minLength:1,
        maxLength:5
    },
    descripcion: {
        type: String,
        minLength: 5,
        maxLength: 500,
        required: true
    }

})

const Prenda = model("prenda", prendaSchema)

export default Prenda