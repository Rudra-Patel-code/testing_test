//import the function to be tested
const { json } = require("express");
const fetchData = require("../functions/apiData.js");

//Mock this global fetch function
global.fetch = jest.fn();

//test suite
describe("fetchData", () => {
    beforeEach(() => {
        //clear the object before running the test again.
        fetch.mockClear();
    });

    test("Fetches dat form the API endpoint and returns it as JSON", () => {
        //AAA pattern
        // arrange
        // Mock response

        const mockResponse = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        console.log(mockResponse);
    });
});
