const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    //1. Sanitize the markdown for description

    problemData.description = markdownSanitizer(problemData.description);

    console.log("problem data", problemData);
    const problem = await this.problemRepository.createProblem(problemData);

    console.log("Problem created", problem);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();

    return problems;
  }
}

module.exports = ProblemService;
