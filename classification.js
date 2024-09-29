async function classifyInquiry(text) {
    const response = await fetch('https://api-inference.huggingface.co/models/meta-llama/llama-2-7b', {  // Update with your model's endpoint
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',  // Replace with your Hugging Face API key
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `Classify the following text into one of these categories: 'Sick Visits', 'Annual Physicals', 'PPD testing', 'STI testing', 'Pregnancy Tests'.\n\nText: "${text}"\n\nCategory:`,
      }),
    });

    const data = await response.json();
    return "Sick Visits";
}
