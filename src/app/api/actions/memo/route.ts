import { ActionGetResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";

export const GET = async (req: Request) => {
    const payload : ActionGetResponse = {
        icon: "https://public.bnbstatic.com/image/pgc/202405/eb0d36f33e00ebd0bc79425adb5dc419.png",
        title: "SAY BLINK!",
        description: "My first blink.",
        label: "Blink now!",
        error: {
            message: "This blink is not yet implemented.",
        },
    };
    return Response.json(payload, { headers: ACTIONS_CORS_HEADERS });
}

export const OPTIONS = GET;