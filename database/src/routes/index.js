const { Router } = require("express");
const { catchAsync } = require("../utils");
const { ClientError } = require("../utils/errors");
const store = require("../database");
const {
  validateModel,
  validateIdModel,
  validateCreate,
} = require("../middlewares");

const router = Router();

router.get(
  "/:model",
  validateModel,
  catchAsync(async (req, res) => {
    const { model } = req.params;
    const resp = await store[model].list();
    return res.status(200).json(resp);
  })
);

router.get(
  "/:model/:id",
  validateIdModel,
  catchAsync(async (req, res) => {
    const { model, id } = req.params;
    const resp = await store[model].get(id);
    return res.status(200).json(resp);
  })
);

router.post(
  "/:model",
  validateCreate,
  catchAsync(async (req, res) => {
    const { model } = req.params;
    const data = req.body;
    const resp = await store[model].insert(data);
    return res.status(200).json(resp);
  })
);

router.delete(
  "/:model/:id",
  validateIdModel,
  catchAsync(async (req, res) => {
    const { model, id } = req.params;
    const resp = await store[model].delete(id);
    return res.status(200).json(resp);
  })
);

module.exports = router;
