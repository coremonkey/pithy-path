import express, { Request, Response } from 'express';
import cors from "cors";
import { Pithy } from "../models/pithy";

const router = express.Router();

router.get('/pithy/', cors(), async(req: Request, res: Response) => {
    const pithys = await Pithy.find({})
    return res.status(200).send(pithys)
});
router.get('/pithy/:shortUrl', cors(), async(req: Request, res: Response) => {
    const pithys = await Pithy.find({shortUrl: req.params.shortUrl})
    if (pithys.length == 0) {
        return res.status(404).send(pithys)    
    }else{
        return res.status(200).send(pithys)
    }
});

router.post('/pithy', async (req: Request, res: Response) => {
    const pithy = Pithy.build(req.body);
    await pithy.save()
    return res.status(201).send(pithy)
})
router.delete('/pithy/:shortUrl', cors(), async(req: Request, res: Response) => {
    const result = await Pithy.deleteMany({shortUrl: req.params.shortUrl})
    if (result.deletedCount === 0) {
        return res.status(404).send(result)    
    }else{
        return res.status(200).send(result)
    }
});



export { router as pithyRouter }