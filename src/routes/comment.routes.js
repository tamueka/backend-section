const { Router } = require("express");

module.exports = function ({ CommentController }) {
  const router = Router();

  router.get("/:commentId/unique", CommentController.get);
  router.get("/:ideaId", CommentController.getIdeasComments);
  router.post("/:ideaId", CommentController.createdComment);
  router.patch("/:commentId", CommentController.update);
  router.delete("/:commentId", CommentController.delete);
  

  return router;
};
