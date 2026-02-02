import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Read Your Lib - Software License",
                            description: "Lifetime license for Read Your Lib Desktop",
                        },
                        unit_amount: 4999, // $49.99
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
