# What Is an API?

API stands for **Application Programming Interface**. An API is a set of rules and methods that allows two software applications to communicate with each other.

An API works like a waiter in a restaurant:

1. A client application sends a request to the API.
2. The API sends the request to the server or database.
3. The server processes the request.
4. The API returns a response to the client.

For example, a weather application can use a weather API to request the current temperature. The application does not need to own the weather station or database; it only needs to send a valid request and read the response.

## Common API Terms

- **Client:** The application that sends a request.
- **Server:** The system that processes the request and provides data or a service.
- **Endpoint:** A specific URL where an API resource is available.
- **Request:** A message sent to the API.
- **Response:** The result returned by the API.
- **Parameter:** An extra value used to customize a request, such as a city name or date.
- **API key or token:** A credential used to identify and authorize a client.
- **JSON:** A common format for sending and receiving structured data.

## Common HTTP Methods

- **GET:** Read or retrieve data.
- **POST:** Create or submit new data.
- **PUT:** Replace or update an existing resource.
- **PATCH:** Partially update an existing resource.
- **DELETE:** Remove data.

## Rules and Best Practices of an API

1. **Use clear endpoints:** Endpoints should describe the resource, such as `/users` or `/orders`.
2. **Use the correct HTTP method:** Use GET for reading, POST for creating, PUT or PATCH for updating, and DELETE for removing data.
3. **Validate requests:** Check that required fields, parameter types, and values are correct.
4. **Authenticate users:** Use API keys, tokens, OAuth, or another secure authentication method when access is restricted.
5. **Authorize actions:** Authentication identifies a user; authorization checks what that user is allowed to do.
6. **Protect sensitive data:** Use HTTPS, avoid exposing passwords or tokens, and return only the data the client needs.
7. **Return meaningful status codes:** For example, 200 for success, 201 for creation, 400 for a bad request, 401 for missing or invalid authentication, 404 for a missing resource, and 500 for a server error.
8. **Use consistent response formats:** Return predictable JSON fields and error structures.
9. **Handle errors clearly:** Explain what went wrong without revealing private system details.
10. **Apply rate limits:** Limit the number of requests a client can make within a period to prevent abuse and protect performance.
11. **Document the API:** Describe endpoints, methods, parameters, authentication, response formats, and examples.
12. **Version the API:** Use versions such as `/api/v1/` so changes do not unexpectedly break existing clients.
13. **Make requests as stateless as possible:** Each request should contain the information needed to process it.
14. **Monitor and log usage:** Track failures, response times, and unusual activity without logging secrets.

## Simple API Example

Request:

```http
GET https://api.example.com/weather?city=Delhi
```

Response:

```json
{
	"city": "Delhi",
	"temperature": 32,
	"unit": "C"
}
```

In this example, the client requests weather data for Delhi, and the API returns the temperature in JSON format.

## Role of APIs in Data Analytics

APIs are useful in data analytics because they allow analysts to collect current data from external systems. An analyst can use APIs to:

- import sales, customer, financial, or marketing data;
- collect data from social media, weather, maps, or payment services;
- automate regular data collection;
- connect dashboards to live or frequently updated data;
- combine data from multiple applications for analysis.

Before using API data, an analyst should check the API documentation, authentication requirements, request limits, data quality, privacy rules, and license or usage conditions.

## API in One Sentence

An API is a controlled communication bridge that lets one software application request data or services from another application using defined rules.
