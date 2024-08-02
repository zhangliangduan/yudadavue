// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateService } = require("@umijs/openapi");

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: "http://124.70.179.178:8101/api/v2/api-docs",
  serversPath: "./src",
});
