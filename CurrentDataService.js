import CurrentData from './CurrentData.js';
// import fileService from './fileService.js';

class CurrentDataService {
  //   async create(data) {
  //     const createdData = await Data.create(data);
  //     return createdData;
  //   }

  async getAll() {
    const currentValue = await CurrentData.find();
    console.log('getCurrent');
    return currentValue;
  }

  //   async getOneDay(day) {
  //     if (!day) {
  //       throw new Error('Не указан день');
  //     }
  //     const datas = await Data.find({ day: `${day}` });
  //     return datas;
  //   }

  async update(currentTemp) {
    const filter = { name: 'Current' };
    const updatedValue = await CurrentData.findOneAndUpdate(filter, currentTemp, { upsert: true });
    console.log('currentValue updated: ', updatedValue.time);
    return updatedValue;
  }

  // async delete(id) {
  //   if (!id) {
  //     throw new Error('Не указан ID');
  //   }
  //   const post = await Post.findByIdAndDelete(id);
  //   return post;
  // }
}

export default new CurrentDataService();
