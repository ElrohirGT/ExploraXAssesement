import { Platform } from "react-native";

/**
 * An option to respond with
 * @typedef{Function} QuestionOption
 * @param {int} A
 * @param {int} B
 * @param {int} C
 * @returns {int} The result of operating with the given values
 */

/**
 * A Question
 * @typedef {Object} Question
 * @property {string} description - Template description to show to the user
 * @property {int[]} A - Range of param A
 * @property {int[]} B - Range of param B
 * @property {int[]} C - Range of param C
 * @property {QuestionOption[]} answers - All correct answers to the question
 * @property {QuestionOption[]} other - All other incorrect options that the user can select
 */

export const IS_ANDROID = Platform.OS === "android";
export const IS_WEB = Platform.OS === "web";

/**
 * @type {Question[]}
 */
export const DEFAULT_QUESTIONS = [
  {
    description: "A+BxC=?",
    A: [1, 10],
    B: [2, 10],
    C: [2, 10],

    answers: [
      (a, b, c) => {
        a + b * c;
      },
    ],
    other: [
      (a, b, c) => (a + b) * c,
      (a, b, c) => a + b + c,
      (a, b, c) => a * b + c,
    ],
  },
];
