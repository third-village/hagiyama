import axios from "axios";

async function postData(url: string, data: any) {
  try {
    const response = await axios.post(url, data);
    console.log(response.data);
  } catch (error) {
    console.error(`Error posting data to ${url}: `, error);
  }
}
const url = process.env.WEBHOOK_URL;

if (!url) {
  console.log("Please set WEBHOOK_URL");
} else {
  while (true) {
    postData(url, { content: "🧸" });
    // 24時間待機
    await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 60 * 24));
  }
}
