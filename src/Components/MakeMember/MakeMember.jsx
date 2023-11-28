import { Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js"
import CheckoutFrom from "./CheckoutFrom";

const MakeMember = () => {

   const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div> 
            <h1 className="text-[40px] text-center font-bold underline text-orange-500">Join us As golden member!!</h1>
            <h1 className="text-[40px] text-center font-bold underline text-orange-500">for join us just pay 5$</h1>
            <div>
                <Elements stripe={stripePromise}>
                  <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default MakeMember;