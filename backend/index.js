const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios for HTTP requests

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "bf3f1adc-bf59-4a38-8e32-b6b480100c54" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    const errorStatus = e.response ? e.response.status : 500;
    const errorMessage = e.response ? e.response.data : "An error occurred";
    return res.status(errorStatus).json({ error: errorMessage });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
