import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // Store Message Info & Data in Database //
    const UserMessages = {
      name,
      email,
      message,
    };

    // Testing it //
    console.log(UserMessages);

    // Connect with //
    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://schooltech1996:FpHeF7iOrSUlBDqV@nextjs-db.xdazd.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "failed to connect db" });
      return;
    }

    const db = client.db();

    try {
      // Writing document in Database
      const result = await db.collection("messages").inserOne(UserMessages);
      // Generate Messge id
      UserMessages.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message Failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Succesfuly sent Message", message: UserMessages });
  }
}

export default handler;
