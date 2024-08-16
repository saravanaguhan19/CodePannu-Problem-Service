const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");
const mongoose = require("mongoose");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({
    message: "Problem controller is up",
  });
}

async function addProblem(req, res, next) {
  try {
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

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id.trim());

    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all  problem",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res,next) {
  try {
    //nothing implemented
    const id = req.params.id;
    const deletedProblem = await problemService.deleteProblem(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the   problem",
      error: {},
      data: deletedProblem,
    });
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res,next) {
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
