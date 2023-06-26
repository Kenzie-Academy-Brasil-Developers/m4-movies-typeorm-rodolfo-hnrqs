import handleError from "./handleError.middleware";
import pagination from "./pagination.middlewares";
import validateBody from "./validateBody.middlewares";
import verifyIdExists from "./verifyIdExists.middlewares";
import verifyNameExists from "./verifyMovieName.middlewares";

export default {
    handleError,
    pagination,
    validateBody,
    verifyIdExists,
    verifyNameExists
};