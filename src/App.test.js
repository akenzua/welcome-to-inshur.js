import moxios from "moxios";
import axios from "axios";

describe("Fetch API", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("fetch User profile", async () => {
    const fetchProfile = async () => {
      const res = await axios.get("http://localhost:4000/api/");
      return res.data;
    };
    const expectedProfile = [
      [
        {
          name: "Akintade Ajibade",
          jobTitle: "Senior Frontend Developer",
          favouriteFood: "Bolognese Pasta",
          pictureUrl: "/profile.jpg",
        },
      ],
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedProfile });
    });

    const result = await fetchProfile();
    expect(result).toEqual(expectedProfile);
  });
});
