import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        res.send('Hello world');
    }
);

app.use('/', router);

app.listen(8081, () => {
    console.log('listening on port 8081');
})

export default app;