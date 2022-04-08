import Data from './Data.js';
// import fileService from './fileService.js';

class DataService {
  async create(data) {
    const createdData = await Data.create(data);
    return createdData;
  }

  async getAll() {
    const datas = await Data.find();
    return datas;
  }

  async getOneDay(day) {
    if (!day) {
      throw new Error('Не указан день');
    }
    const datas = await Data.find({ day: `${day}` });
    return datas;
  }

  // async update(post) {
  //   if (!post._id) {
  //     throw new Error('Не указан ID');
  //   }
  //   const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
  //   return updatedPost;
  // }

  // async delete(id) {
  //   if (!id) {
  //     throw new Error('Не указан ID');
  //   }
  //   const post = await Post.findByIdAndDelete(id);
  //   return post;
  // }
}

export default new DataService();
