const express = require("express");

const ctrl = require("../../controllers/contacts");

// const { validateBody } = require("../../middlewares");

// const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:id", ctrl.getById);

// router.post("/", validateBody(schemas.schema), ctrl.addNew);

// router.put("/:id", validateBody(schemas.schema), ctrl.updateById);

// router.delete("/:id", ctrl.deleteById);

module.exports = router;
