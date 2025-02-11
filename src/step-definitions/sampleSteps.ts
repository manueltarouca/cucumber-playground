import { Given, When, Then } from "@cucumber/cucumber";
import { strict as assert } from "assert";

let num1: number;
let num2: number;
let result: number;

Given("I have two numbers {int} and {int}", function (first: number, second: number) {
  num1 = first;
  num2 = second;
});

When("I add them", function () {
  result = num1 + num2;
});

Then("the result should be {int}", function (expected: number) {
  assert.equal(result, expected);
});