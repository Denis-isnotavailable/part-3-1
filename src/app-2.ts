// задача: сделать сайт с двумя кнопками, Плюс и Минус
// при нажатии на кнопки должен отправляться запрос на бекенд
// в виде json, но при этом как на фронте, так и на бекенде
// именно enum'ы должны описывать кнопку, которая была нажата.
// бекенд должен возвращать на фронтенд количество нажатий и той и той кнопки
// избегайте типа number или string, только энам!
// фронтенд как-либо должен отобразить эти данные.

import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('static'));

const enum Button {
    PLUS = "plus",
    MINUS = "minus",
}
const counter = {
    plus: 0,
    minus: 0,
}

app.get('/counter', (req, res) => {
    res.json({ counter });
});

app.put('/counter', (req, res) => {
    const { data } = req.body;
    data === Button.PLUS && counter.plus++;
    data === Button.MINUS && counter.minus++;

    res.json({counter});
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})