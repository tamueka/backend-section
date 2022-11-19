class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be send";
      throw error;
    }

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity not found";
      throw error;
    }

    return await this.repository.get(id);
  }

  async getAll(pageSize, pageNum) {
    return await this.repository.getAll(pageSize, pageNum);
  }

  async create(entity) {
    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity not found";
      throw error;
    }

    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id mus be send";
      throw error;
    }

    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity mus be send";
      throw error;
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be send";
      throw error;
    }

    return await this.repository.delete(id);
  }
}

module.exports = BaseService;
