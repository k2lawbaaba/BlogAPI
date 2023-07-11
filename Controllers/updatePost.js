/****PUT /api/posts/:id**: Requires authentication via a JWT token.
 *  Accepts a blog post ID as a parameter and
 *  a JSON payload containing 'title' and/or 'content' fields. 
 * It should verify the token, find the blog post in the database that
 *  matches the provided ID and belongs to the authenticated user, u
 * pdate the post with the new details, 
 * and return a JSON response with the updated post.

*/
const validate = require("../Validators/Joi_validator");
const handleError = require("../handleErrors/handleError");
const { blogPost } = require("../Models/schemas");

const updatePosts = async (req, res) => {
  const { error, value } = validate.updatePostVAlidate(req.body);
  if (error) {
    const errors = handleError.JoiErrorHandler(error);
    res.status(403).send(errors);
  } else {
    try {
      const post = await blogPost.findById({ _id: value.Post_Id });

      if (post) {
        await blogPost.updateOne(
          { _id: value.Post_Id },
          {
            Title: value.Title,
            Contents: value.Content,
            oldTitle: post.Title,
            oldContent: post.Contents,
            updatedAt: new Date(),
          }
        );
        res.status(201).send(" Post Updated successfully");
      } else {
        res.status(201).send("Post doesn't exist or already deleted.");
      }
    } catch (error) {
      console.log(error);
      res.status(403).json({ error });
    }
  }
};
module.exports = updatePosts;
