const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.status(200).json(result);
// };

// const addNew = async (req, res, next) => {
//   const { name, email, phone } = req.body;
//   const result = await contacts.addContact(name, email, phone);
//   res.status(201).json(result);
// };

// const updateById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.status(200).json(result);
// };

// const deleteById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.status(200).json({ message: "Deleted" });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  // addNew: ctrlWrapper(addNew),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
