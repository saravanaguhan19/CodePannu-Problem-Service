const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    //1. Sanitize the markdown for description
    try {
      problemData.description = markdownSanitizer(problemData.description);

      console.log("problem data",problemData);
      const problem = await this.problemRepository.createProblem(problemData);


      console.log("Problem created",problem)
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
