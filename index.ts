import express, {type Request, type Response} from "express"

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello World!")
})

app.listen(3000, () => {
    console.log("app is listening on port 3000.")
})