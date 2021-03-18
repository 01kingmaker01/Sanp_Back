//Async error
export const Async = (func) => (req, res, next) =>
  func(req, res, next).catch(next);

//Express Error
// export class ExpressError extends Error {
//   constructor(message, statusCode) {
//     super();
//     this.message = message;
//     this.statusCode = statusCode;
//   }
// }s
