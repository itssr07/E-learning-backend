const express = require("express");
const router = express.Router();
const Popular = require("../modal/popular");


router.get("/popular", (req, res) => {
  Popular.find((err, populars) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(populars);
    }
  });
});

router.get("/popular/:id", (req, res) => {
  Popular.findById(req.params.id, (err, popular) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the course with id ${req.params.id}.`
        );
    } else {
      res.send(popular);
    }
  });
});

router.post("/popular", (req, res) => {
  const { courseName,  userName, price, imageUrl } = req.body;

  const popular = new Popular({
    courseName,
    userName,
    price,
    imageUrl,
  });

  popular.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/popular", (req, res) => {
    const { courseName, userName, price, imageUrl } = req.body;

  Popular.findByIdAndUpdate(
    req.params.id,
    {
      courseName,
     
      userName,
      price,
      imageUrl,
    },
    (err, popular) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(
            `An error occurred while updating the product with id ${req.params.id}.`
          );
      } else {
        res.send("Product updated successfully.");
      }
    }
  );
});

router.delete("/popular/:id", (req, res) => {
 Popular.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while deleting the product with id ${req.params.id}.`
        );
    } else {
      res.send("Product deleted successfully.");
    }
  });
});

module.exports = router;