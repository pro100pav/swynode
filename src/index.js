// In src/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const request = require('request');;
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
const userRouter = require('./v1/routes/user.route');

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
const PORT = Number(process.env.PORT || 3331);

app.use(`/api/v1/users`, userRouter);
app.get('/sendphone', (req, res) => {
    request(
        'https://sms.ru/code/call?phone=79045998077&ip=33.22.11.55&api_id=3EA89A57-D741-C0D9-2913-07ECDE620C82',
        (err, response, body) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: err });

            return res.send(body);
        }
    );
});
// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

// Error middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});