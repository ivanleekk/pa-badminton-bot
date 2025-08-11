import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN!;
const groupChatId: string = process.env.GROUP_CHAT_ID!;
if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN is not defined in the environment variables.");
}
if (!groupChatId) {
  throw new Error("GROUP_CHAT_ID is not defined in the environment variables.");
}
const bot = new TelegramBot(token, { polling: true });

const checkDate = new Date();
checkDate.setDate(new Date().getDate() + 16)
const formattedDate = `${String(checkDate.getDate()).padStart(2, '0')}/${String(checkDate.getMonth() + 1).padStart(2, '0')}/${checkDate.getFullYear()}`;
console.log("Today's date:", formattedDate);

const message = `<u><b>Desired Locations</b></u>

<i>Hougang:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=hougangcc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Paya Lebar:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=payalebarkovancc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Fernvale:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=fernvalecc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Anchorvale:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=anchorvalecc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Kallang:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=kallangcc_BADMINTONCOURTS&date=${formattedDate}&time=all

<u><b>Slightly Further</b></u>

<i>Whampoa:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=whampoacc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Tampines North:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=tampinesnorthcc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Toa Payoh West:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=toapayohwestcc_BADMINTONCOURTS&date=${formattedDate}&time=all


<u><b>Expensive</b></u>

<i>Braddell Heights:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=braddellheightscc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Biddadari:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=bidadaricc_BADMINTONCOURTS&date=${formattedDate}&time=all

<i>Potong Pasir:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=potongpasircc_BADMINTONCOURTS&date=${formattedDate}&time=all


<u><b>Near NUS</b></u>

<i>Buona Vista:</i>
https://www.onepa.gov.sg/facilities/availability?facilityId=kallangcc_BADMINTONCOURTS&date=${formattedDate}&time=all`

bot.sendMessage(groupChatId, message, { parse_mode: "HTML" });