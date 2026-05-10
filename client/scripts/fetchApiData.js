import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "../output");
const outputPath = path.join(outputDir, "apiResults.json");

async function fetchData() {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const data = response.data;

    console.log("Joke fetched:", data.setup);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log("Saved to output/apiResults.json");

  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();