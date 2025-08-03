import axios from "axios";

const API_KEY = "YOUR_GOOGLE_TRANSLATE_API_KEY"; // ← حط مفتاح الترجمة هنا

export const translateText = async (text, targetLang = "ar") => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      {},
      {
        params: {
          q: text,
          target: targetLang,
          key: API_KEY,
        },
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // fallback: return original text
  }
};
