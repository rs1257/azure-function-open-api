import { AzureFunction, Context } from "@azure/functions";
import { mapOpenApi3_1 } from "@aaronpowell/azure-functions-nodejs-openapi";

const httpTrigger: AzureFunction = async (
  context: Context
): Promise<void> => {
  context.log("HTTP trigger function processed a request.");
  context.res = {
    body: 'This HTTP triggered function executed successfully',
  };
};

export default mapOpenApi3_1(httpTrigger, "/fn-http-trigger", {
  get: {
    responses: {
      "200": {
        description: "Gets a message from the Function",
        content: {
          "application/json": {
            example:
              "This is a HTTP triggered function executed successfully.",
          },
        },
      },
    },
  },
});
