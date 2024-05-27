import { Router } from "express";
import express from "express";
import ArticleModel from "../models/article.js";

const router = Router();

//POST
router.post("/articles", async (request, response) => {
  const article = new ArticleModel(request.body);

  try {
    await article.save();
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }

});


//GET
router.get("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

//PUT
router.put("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, overwrite: true });
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});



//DELETE
router.delete("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

//PATCH
router.patch("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
  
    res.status(200).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});




export default router;