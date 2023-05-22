// import { produtos } from "../../database/products";

const cards = require("../../database/cards");

class CardsController {
  async show(request, response) {

    const { id } = request.params

    try {
      const result = await cards.findOne(id)
      return response.json(result);
    } catch (error) {
      return response.json({ error: "Erro ao listar card ID!" })
    }
  }

  async list(request, response) {
    try {
      const card = await cards.find();
      response.json(card);
    }
    catch (error) {
      response.json({ erro: "Erro ao listar cards" });
    }
  }

  async create(request, response) {
    const { name, type, desc, atk, def } = request.body;
    const card = {
      name,
      type,
      desc,
      atk,
      def,
    }

    try {
      const result = await cards.create(card)
      return response.json(result);
    }
    catch (error) {
      return response.json({ error: "Erro ao criar carddd" })
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, type, desc, atk, def } = request.body;

    const updatedData = {
      name,
      type,
      desc,
      atk,
      def
    }

    try {
      const result = await cards.update(id, updatedData)
      return response.json(result)
    }
    catch (error) {
      return response.json({ error: "Erro ao atualizar a página " })
    }
  }

  async delete(request, response) {

    const { id } = request.params;

    try {
      const result = await cards.remove(id)
      return response.json(result)
    }
    catch (error) {
      return response.json({ error: "Erro ao deletar card" })
    }
  }
}
module.exports = new CardsController();
