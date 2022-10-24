import request from "supertest";
import app from "../index";

describe("app", () => {

    it("API endpoint is connected", async () => {
        const body = [
            { name: 'Demo player', score: 3 },
            { name: 'Another demo player', score: 4 },
            { name: 'Could improve player', score: 2 }
        ];
        await request(app).get("/players").expect(200,body);
    });
});
