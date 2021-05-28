import express, { Request, Response } from 'express';
import cors from "cors";
import { Pithy } from "../models/pithy";

const router = express.Router();

router.get('/pithy/', cors(), async(req: Request, res: Response) => {
    const pithys = await Pithy.find({})

    return res.status(200).send(pithys)
});


router.post('/pithy', async (req: Request, res: Response) => {
    const pithy = Pithy.build(req.body);
    await pithy.save()
    return res.status(201).send(pithy)
})

router.get('/pithy/:shortUrl', cors(), async(req: Request, res: Response) => {
    console.log(`Parameters passed ${req.params}`)
    const pithys = await Pithy.find({})
    return res.status(200).send(pithys)
});


export { router as pithyRouter }