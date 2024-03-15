const express = require("express");
const { indexRoutes } = require("./_barrel");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);

  //publicas
  // router.use("/auth", setReqGlobalsData, indexRoutes.authRouter);
  router.use("/user", indexRoutes.userRouter);
//   router.use("/post", indexRoutes.postRouter);
};
module.exports = routerApi;
