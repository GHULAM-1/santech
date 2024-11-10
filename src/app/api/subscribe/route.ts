import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { writeFile, readFile, utils } from "xlsx";
import path from "path";
import fs from "fs";

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

// Connect to MongoDB
async function connectToDB() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI || "");
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await connectToDB();

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "This email already exists." },
        { status: 400 }
      );
    }

    // Save the email to the database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Save to Excel
    await saveEmailToExcel(email);

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}

// Save email to Excel file
async function saveEmailToExcel(email: string) {
  try {
    const filePath = path.resolve("./data/emails.xlsx");

    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
    let workbook;
    if (fs.existsSync(filePath)) {
      workbook = readFile(filePath);
    } else {
      workbook = utils.book_new();
      utils.book_append_sheet(
        workbook,
        utils.aoa_to_sheet([["Email", "Subscribed At"]]),
        "Subscribers"
      );
    }

    const worksheet = workbook.Sheets["Subscribers"];
    const data = utils.sheet_to_json(worksheet);

    data.push({ Email: email, "Subscribed At": new Date().toISOString() });

    const updatedSheet = utils.json_to_sheet(data);
    workbook.Sheets["Subscribers"] = updatedSheet;

    writeFile(workbook, filePath);
  } catch (error) {
    console.error("Error saving to Excel:", error);
  }
}
