const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty"],
    },
    description: {
      type: String,
      required: [true, "Description cannot be empty"],
    },
    dificulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "Dificulty cannot be empty"],
      default: "easy",
    },
    testCases: [
      {
        input: {
          type: String,
          required: true,
        },
        output: {
          type: String,
          required: true,
        },
      },
    ],
    codeStubs: [
      {
        language: {
          type: String,
          enum: ["CPP", "JAVA", "PYTHON"],
          required: true,
        },
        startSnippet: {
          type: String,
        },
        endSnippet: {
          type: String,
        },
        userSnippet: {
          type: String,
        },
      },
    ],
    editorial: {
      type: String,
    },
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", userSchema);

module.exports = Problem;
