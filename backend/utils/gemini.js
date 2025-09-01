import 'dotenv/config';


const getGEMINIAPIResponse = async(message) =>{
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        contents: [
            {
            role: "user",
            parts: [{ text:message }]
            }
        ]
        })
    };

    try {
        const response = await fetch(
       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" + process.env.GEMINI_API_KEY
, options );
        const data = await response.json();

        const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";
        return reply;
    } catch (err) {
        console.error(err);
    }
}

export default getGEMINIAPIResponse;