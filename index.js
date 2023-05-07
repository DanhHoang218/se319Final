const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Question = require("./dataSchema")
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/images", express.static("images"));
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectdata",
    {
        dbName: "finalprojectdata",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const port = process.env.PORT || 4000;
const host = "localhost";
app.listen(port, () => {
    console.log(`App listening at http://%s:%s`, host, port);
});

app.get("/", async (req, resp) => {
    const query = {};
    const allReviews = await Question.find(query);
    console.log(allReviews);
    resp.send(allReviews);
});
app.post("/insert", async (req, res) => {
    console.log(req.body);
    const p_id = req.body._id;
    const pquestion = req.body.question;
    const panswer = req.body.answer;
    const pkeyword0 = req.body.keywords.keyword0;
    const pkeyword1 = req.body.keywords.keyword1;
    const pkeyword2 = req.body.keywords.keyword2;
    const formData = new Question({
        _id: p_id,
        question: pquestion,
        answer: panswer,
        keywords: { keyword0: pkeyword0, keyword1: pkeyword1, keyword2: pkeyword2 },
    });
    try {
        // await formData.save();
        await Question.create(formData);
        const messageResponse = { message: `Question ${p_id} added correctly` };
        res.send(JSON.stringify(messageResponse));
    } catch (err) {
        console.log("Error while adding a new question:" + err);
    }
});
app.delete("/delete", async (req, res) => {
    console.log("Delete :", req.body);
    try {
        const query = { _id: req.body._id };
        await Question.deleteOne(query);
        const messageResponse = {
            message: `Question ${req.body._id} deleted correctly`,
        };
        res.send(JSON.stringify(messageResponse));
    } catch (err) {
        console.log("Error while deleting :" + p_id + " " + err);
    }
});
app.get("/:keywords", async (req, resp) => {
    const keywords = req.params.keywords;
    const query = { keywords: keywords };
    const oneProduct = await Question.findOne(query);
    console.log(oneProduct);
    resp.send(oneProduct);
});