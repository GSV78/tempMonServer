import DataService from './DataService.js';

class DataController {
  async create(req, res) {
    try {
      const data = await DataService.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const datas = await DataService.getAll();
      return res.json(datas);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneDay(req, res) {
    try {
      const data = await DataService.getOneDay(req.params.day);
      return res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // async update(req, res) {
  //   try {
  //     const updatedData = await DataService.update(req.body);
  //     return res.json(updatedData);
  //   } catch (error) {
  //     res.status(500).json(error.message);
  //   }
  // }

  // async delete(req, res) {
  //   try {
  //     const Data = await DataService.delete(req.params.id);
  //     return res.json(Data);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }
}

export default new DataController();
