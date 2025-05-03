import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import Stripe from "stripe";
import Booking from "../models/BookingSchema.js";
export const getCheckoutSession = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    if (!doctor)
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "inr",
          unit_amount: item.ticketPrice * 100,
          product_data: {
            name: item.name,
          },
        },
        quantity: 1,
      })),
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/doctors/${doctor.id}`,
    });

    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
    });

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Successfully created checkout session",
      url: session.url,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Error in creating checkout session: ${err.message}`,
    });
  }
};
