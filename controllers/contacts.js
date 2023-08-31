const { HttpError, ctrlWrapper } = require("../helpers");

const contacts = require("../models/contacts");

const getAll = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

const addNew = async (req, res, next) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ message: "Deleted" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addNew: ctrlWrapper(addNew),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
