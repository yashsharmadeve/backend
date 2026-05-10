
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const query = req.query.currency;
  if (!id) {
    return res.status(400).json({ error: "Product ID is required" });
  }
  if (!query) {
    return res.status(400).json({ error: "Currency is required" });
  }
  res.json({id, query});
};