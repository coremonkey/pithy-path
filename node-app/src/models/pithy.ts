import mongoose from "mongoose";

interface IPithy {
    longUrl: string;
    shortUrl: string;
}

interface pithyModelInterface extends mongoose.Model<PithyDoc> {
    build(attr: IPithy): PithyDoc
}
interface PithyDoc extends mongoose.Document{
    longUrl: string;
    shortUrl: string;
} 
const pithySchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: false
    }
})

pithySchema.statics.build = (attr: IPithy) => {
    return new Pithy(attr)
}

const Pithy = mongoose.model<PithyDoc, pithyModelInterface>('Pithy', pithySchema)

const build = (attr: IPithy) => {
    return new Pithy(attr)
}

export { Pithy }
