import { createFalClient } from "@fal-ai/client";

interface FalResult {
  data: {
    images: {
      url?: string;
    }[];
  };
}

// Generate Logo with Fal AI
export async function generateLogo(
  prompt: string,
  apiKey: string
): Promise<string> {
  if (!apiKey) {
    throw new Error("AI_LOGO_API_KEY is not set");
  }

  const fal = createFalClient({
    credentials: apiKey,
  });

  const { request_id: requestId } = await fal.queue.submit(
    "fal-ai/flux/schnell",
    {
      input: {
        prompt: prompt,
        image_size: "square_hd",
      },
    }
  );

  const { status } = await fal.queue.status("fal-ai/flux/schnell", {
    requestId: requestId,
    logs: true,
  });

  while (status !== "COMPLETED") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { status } = await fal.queue.status("fal-ai/flux/schnell", {
      requestId: requestId,
      logs: true,
    });
    if (status === "COMPLETED") {
      break;
    }
  }

  const result = await fal.queue.result("fal-ai/flux/schnell", {
    requestId: requestId,
  });

  const outputUrl = (result as FalResult)?.data?.images?.[0]?.url;
  if (!outputUrl) {
    throw new Error("Process failed");
  }

  return outputUrl;
}
