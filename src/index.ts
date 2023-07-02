import axios from "axios";
import schedule from "node-schedule";

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
  // 毎週火曜日と金曜日の朝8時に燃えるゴミの通知
  schedule.scheduleJob({ hour: 8, minute: 0, dayOfWeek: [2, 5] }, () => {
    postData(url, { text: "今日は燃えるゴミの日です" });
  });
}
