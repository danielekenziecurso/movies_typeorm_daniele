import validateBodyMiddleware from "./validatebody.middleware";
import verifyIdExistsMiddleware from "./verifyIdExists.middleware";
import verifyNameExistsMiddleware from "./verifyNameExists.middleware";
import handleErrorMiddleware from "./handleError.middleware";
import paginationMiddleware from "./pagination.middleware";

export default {
  validateBodyMiddleware,
  verifyIdExistsMiddleware,
  verifyNameExistsMiddleware,
  handleErrorMiddleware,
  paginationMiddleware,
};
