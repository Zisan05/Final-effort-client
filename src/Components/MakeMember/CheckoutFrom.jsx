import {CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutFrom = () => {

    const [error,seterror] = useState('');

   
const {user} = useContext(AuthContext);

// badge update

   
// payment work
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    const [transId,setTransId] = useState('')

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://final-effort-server-puce.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: 5 }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
          
      }, []);
      

const handleSubmit = async(event) => {
    event.preventDefault();
    if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        seterror(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        seterror('');
      }

      const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card : card,
            billing_details: {
                email: user?.email || "anonymous",
                name: user?.displayName || 'anonymous'
            }
        }
      })

      if(confirmError){
        console.log('confirm Error');
      }
      else{
        console.log(paymentIntent,'paymentIntent');
        if(paymentIntent.status === 'succeeded'){
           
            setTransId(paymentIntent.id);

            const newpayment = {
              email: user.email,
              price: '500',
              transaction_id : transId
            }

            fetch('https://final-effort-server-puce.vercel.app/payment',{
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(newpayment)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged)
        {
            Swal.fire(
                'success',
                'Successfully added your Post',
                'success'
            )
        }
        
    })
        }
      }
    };


    return (
        <form className="md:w-[500px] lg:w-[500px] md:ml-[150px] lg:ml-[600px] mt-[100px]" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button  className="btn bg-indigo-600 text-white mt-[10px]" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transId && <p className="text-green-600">Your transaction id : {transId}</p>}
      </form>
    );
};

export default CheckoutFrom;