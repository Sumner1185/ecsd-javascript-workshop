// Http Status Codes are used to indicate the state of an HTTP Request made.
// Below are a few examples, more can be found here;
// https://www.restapitutorial.com/httpstatuscodes.html

const HttpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

const resultStatusCode = HttpStatusCodes.BAD_REQUEST;

switch (resultStatusCode) {

  case HttpStatusCodes.OK:
    console.log("Successful Request");
    break;

  case HttpStatusCodes.BAD_REQUEST:
  case HttpStatusCodes.FORBIDDEN:
  case HttpStatusCodes.NOT_FOUND:
    throw "Client Error in Request";

  case HttpStatusCodes.INTERNAL_SERVER_ERROR:
    throw "Server Error"

  default:
    throw "Unrecognised HTTP Status Code";
}
