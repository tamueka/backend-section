const BaseService = require("./base.service");
let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }

  async getIdeasComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId mus be send";
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 400;
      error.message = "idea not exist";
      throw error;
    }

    const { comments } = idea;
    return comments;
  }

  async createComment(comment, ideaId, userId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId mus be send";
    }
    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 400;
      error.message = "idea not exist";
      throw error;
    }

    const createComment = await _commentRepository.create({
      ...comment,
      author: userId,
    });

    idea.comments.push(createComment);

    return await _ideaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
