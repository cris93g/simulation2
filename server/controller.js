module.exports = {
  getHouses: (req, res) => {
    let db = req.app.get("db");

    db.getHouses().then(houses => {
      return res.status(200).json(houses);
    });
  },
  addHouses: (req, res) => {
    let { property_name, adress, price, state, zip } = req.body;
    let db = req.app.get("db");
    db.addHouses([property_name, adress, price, state, zip])
      .then(houses => res.status(200).send(houses))
      .catch(err => res.status(500).send({ Error: "Error" }));
  }
};
