const { Router } = require("express");
const CardsController = require("./app/controllers/CardsController")

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello PUC-MG!" });
});


routes.get('/cards', CardsController.list);
routes.post('/cards', CardsController.create);
routes.put('/cards/:id', CardsController.update);
routes.delete('/cards/:id', CardsController.delete);
routes.get('/cards/:id', CardsController.show);

module.exports = routes;