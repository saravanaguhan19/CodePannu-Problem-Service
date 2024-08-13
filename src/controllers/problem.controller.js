const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({
    message: "Problem controller is up",
  });
}

function addProblem(req, res, next) {
  try {
    //nothing implemented
    throw new NotImplemented("addProblem")
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("getProblem")
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("getProblems")
  } catch (error) {
    next(error);
  };
}

function deleteProblem(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("deleteProblem")
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("updateProblem")
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
