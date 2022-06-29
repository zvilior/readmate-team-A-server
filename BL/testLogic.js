const testController = require("../DL/controllers/testController.js");
const userController = require("../DL/controllers/userController.js");
const userTestController = require("../DL/controllers/userTestController.js");

const getTestForUser = async (userId) => {
  const user = await userController.read({ _id: userId });
  const level = user.level;
  let allTestsLevel = await testController.read({ level });
  allTestsLevel = allTestsLevel.map((x) => x._id);
  let testCompleted = await userTestController.read({ userId });
  testCompleted = testCompleted.map((x) => x.userId);
  const tests = allTestsLevel.filter(
    (testId) => !testCompleted.include(testId)
  );
  let testId = tests[Math.floor(Math.random() * tests.length)];
  return await testController.read({ _id: testId });
};
