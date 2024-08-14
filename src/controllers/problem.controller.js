const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({
    message: "Problem controller is up",
  });
}

async function addProblem(req, res, next) {
  try {
    console.log("incoming request ", req.body);

    const newProblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("getProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("getProblems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    //nothing implemented
    throw new NotImplemented("updateProblem");
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
