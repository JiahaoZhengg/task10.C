const express = require("express");
const app = express();
const cors = require('cors');
const sendEmail = require("./utils/sendEmail");
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
// 配置跨域
app.use(cors());

const calculateOrderAmount = (items) => {
    return 1400;
};
// 获取支付方式
app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});
// 支付成功响应
app.get("/", async (req, res) => {
    res.send("Pay successfully！");
});
// 发送邮件
app.post("/sendemail", (req, res) => {
    const { email } = req.body;
    const from = "zjiahao777@gmail.com";
    const to = email;
    const subject = "task10.1C";
    const text = "welcome to Dev";
    sendEmail(to, from, subject, text);
    res.send("send email successfully！");
});
app.listen(4242, () => console.log("Node server listening on port 4242!"));