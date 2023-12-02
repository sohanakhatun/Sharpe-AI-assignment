import React from "react";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { transactionsRef } from "../firebase/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
const Transactions = () => {
 
  const [amount, setAmount] = useState(0);
  const [wallet, setWallet] = useState("");
  
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const validateWalletAddress = (address) => {
    const addressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
    return addressRegex.test(address);
  };

  const handleWalletAddressChange = (e) => {
    const address = e.target.value;
    setWallet(address);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate wallet address
    const isValidA = validateWalletAddress(wallet);

    if (!isValidA) {
      toast.error("Please enter a valid Ethereum address.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(transactionsRef, {
        amount,
        wallet,
      });
      toast.success("Details added successfully");
      navigate("/");
      setAmount(0);
      setWallet("");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("error");
    }

    setLoading(false);
  };

  return (
    <div className=" bg-zinc-900 h-screen">
      <form className="max-w-sm mx-auto  " onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="wallet"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Wallet Address
          </label>
          <input
            type="text"
            name="wallet"
            value={wallet}
            onChange={handleWalletAddressChange}
            id="wallet"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? <TailSpin height={25} color="white" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Transactions;
