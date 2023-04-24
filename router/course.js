const express = require("express");
const router = express.Router();
const Course = require("../modal/course");


router.get("/course", (req, res) => {
  Course.find((err, courses) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(courses);
    }
  });
});

router.get("/course/:id", (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the course with id ${req.params.id}.`
        );
    } else {
      res.send(course);
    }
  });
});

router.post("/course", (req, res) => {
  const { courseName, price, imageUrl } = req.body;

  const course = new Course({
    courseName,
    price,
    imageUrl,
  });

  course.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/course", (req, res) => {
    const { courseName, price, imageUrl } = req.body;

  Course.findByIdAndUpdate(
    req.params.id,
    {
      courseName,
      price,

      imageUrl,
    },
    (err, course) => {
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

router.delete("/course/:id", (req, res) => {
 Course.findByIdAndDelete(req.params.id, (err) => {
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