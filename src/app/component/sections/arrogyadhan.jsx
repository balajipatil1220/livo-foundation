"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IndianRupee } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArrogyaDhan = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        why: "",
        cost: "",
    });

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = "";

        if (name === "name" && /\d/.test(value)) {
            error = "Name cannot contain numbers";
        }
        if (name === "mobile" && (!/^\d+$/.test(value) || value.length > 10)) {
            error = "Mobile must be exactly 10 digits and contain only numbers";
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(errors).some((error) => error)) return;

        setLoading(true);

        try {
            const response = await fetch("/api/aarogya-dhan-enq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

            toast.success("Enquiry submitted successfully!");
            setFormData({ name: "", mobile: "", why: "", cost: "" });
            setErrors({});
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const crowdfundingcategory = [
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/tuxittmxdtivblh2hbba.png", text: "Help to NGO's" },
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/ejzr8jxma88a3qgs7ecc.png", text: "Child Health" },
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/vpgxhzpydivabu1irhpw.png", text: "Emergency Help" },
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/yststufrq8q0jiobj32p.png", text: "Medical Help" },
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/eadfqhg8qvfzsumpwmdj.png", text: "Cancer Care" },
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/poosxlvu7tfzurz3lqx9.png", text: "Transplant Surgery" },
        { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/qmqk3gn6dyz07zcwj822.png", text: "Personal Cause" },
    ];

    const items = [
        {
            src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/s66redc0tjmethfcg3zh.png",
            alt: "3000+ Fundraisers",
            text: "3000+ Fundraisers",
        },
        {
            src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/wbdzd4kklxbhi3djjzcb.png",
            alt: "Rs 50 Lakhs+ Raised",
            text: "Rs 50 Lakhs+ Raised",
        },
        {
            src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/mmf2qhsysfskuxxkdpvr.png",
            alt: "650+ Donations",
            text: "650+ Donations",
        },
    ];


    return (
        <>
              <section className="relative w-full scroll-mt-28 py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            AarogyaDhan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent leading-tight">
            About AarogyaDhan Initiative
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering health access and raising awareness through our dedicated platform for connecting donors and beneficiaries.
          </p>
        </div>
            {/* Desktop View */}
            <div className="container mx-auto mb-4 hidden lg:block">
                {/* Main Banner */}
                <div className="w-full h-auto rounded-[15px] mb-4">
                    <Image
                        src="https://res.cloudinary.com/dnckhli5u/image/upload/v1731670874/4_mavjpg.png"
                        width={4000}
                        height={844}
                        className="w-full rounded-[15px] h-[260px]"
                        alt="AarogyaDhan Banner"
                    />
                </div>


                {/* Information Section */}
                <div className="w-full flex flex-col lg:flex-row flex-wrap pt-10 lg:justify-center gap-0 space-x-4 space-y-6 lg:space-y-0 lg:max-w-[1150px] xl:max-w-[1320px] mx-auto">
                    <div className="w-full pl-10 lg:w-4/12">
                        <Image
                            src="https://res.cloudinary.com/dnckhli5u/image/upload/v1726913368/aarogya%20aadhar/ovpb7nxpmz0ex0jvvkiv.png"
                            width={1265}
                            height={700}
                            alt="AarogyaDhan"
                            className="h-36 w-auto mt-2"
                        />
                    </div>
                    <div className="flex w-full xl:pl-10 md:pl-2 lg:w-3/12">
                        <Image
                            src="https://res.cloudinary.com/dnckhli5u/image/upload/v1724434610/aarogya%20aadhar/rkxgmlsekzevvodkpyjz.png"
                            width={600}
                            height={400}
                            alt="Platform Info"
                            className="h-36 w-64"
                        />
                    </div>
                    <div className="w-full lg:w-4/12">
                        <p className="text-sm font-sans xl:text-[16px] text-justify text-[#5271FF] font-semibold">
                            <span className="text-black">AarogyaDhan</span> is an online technology platform connecting donors and donees. We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who make payments on the Platform.
                        </p>
                    </div>
                </div>

                {/* Request a Call Back Section */}
                <div className="justify-center flex text-center pt-4">
                    <h1 className="text-[21px] font-poppins text-[#5271FF] font-extrabold">
                        Request a Call Back
                    </h1>
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4 container mx-auto pt-3">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                                {/* Full Name */}
                                <div className="w-full">
                                    <h1 className="text-[#243460] font-poppins font-bold text-[14px] ml-4">
                                        Full Name*
                                    </h1>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full h-9 text-[12px] min-[500px]:pl-4 xl:pl-4 border placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none rounded-full"
                                        placeholder="Enter Your Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs">{errors.name}</p>
                                    )}
                                </div>

                                {/* Mobile Number */}
                                <div className="w-full">
                                    <h1 className="text-[#243460] font-poppins font-bold text-[14px] ml-4">
                                        Mobile Number*
                                    </h1>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full h-9 text-[12px] min-[500px]:pl-4 xl:pl-4 border placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none rounded-full"
                                        placeholder="Enter 10-Digit Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        maxLength="10"
                                        required
                                    />
                                </div>

                                {/* Estimated Cost */}
                                <div className="w-full relative">
                                    <h1 className="text-[#243460] font-poppins font-bold text-[14px] ml-4 mb-2 lg:mb-0">
                                        Estimated Cost*
                                    </h1>
                                    <div className="relative">
                                        <select
                                            name="cost"
                                            className="w-full h-9 text-[12px] min-[500px]:pl-4 xl:pl-4 border placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none rounded-full"
                                            value={formData.cost}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" className="bg-[#e9e8e9] text-[#243460]">Select Cost Range</option>
                                            <option value="1 Lakh to 2 Lakh" className="bg-[#e9e8e9] text-[#243460]">1 Lakh to 2 Lakh</option>
                                            <option value="2 Lakh to 3 Lakh" className="bg-[#e9e8e9] text-[#243460]">2 Lakh to 3 Lakh</option>
                                            <option value="3 Lakh to 5 Lakh" className="bg-[#e9e8e9] text-[#243460]">3 Lakh to 5 Lakh</option>
                                            <option value="5 Lakh to 8 Lakh" className="bg-[#e9e8e9] text-[#243460]">5 Lakh to 8 Lakh</option>
                                            <option value="8 Lakh to 10 Lakh" className="bg-[#e9e8e9] text-[#243460]">8 Lakh to 10 Lakh</option>
                                            <option value="10 Lakh to 15 Lakh" className="bg-[#e9e8e9] text-[#243460]">10 Lakh to 15 Lakh</option>
                                            <option value="15 Lakh to 20 Lakh" className="bg-[#e9e8e9] text-[#243460]">15 Lakh to 20 Lakh</option>
                                            <option value="20 Lakh to 30 Lakh" className="bg-[#e9e8e9] text-[#243460]">20 Lakh to 30 Lakh</option>
                                            <option value="30 Lakh Above" className="bg-[#e9e8e9] text-[#243460]">30 Lakh Above</option>
                                        </select>
                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <FaArrowCircleDown className="h-6 w-6 text-white" />
                                        </span>
                                    </div>
                                </div>

                                {/* Fundraising Reason */}
                                <div className="w-full relative">
                                    <h1 className="text-[#243460] font-poppins font-bold text-[14px] ml-4 mb-2 lg:mb-0">
                                        Why are you Fundraising?*
                                    </h1>
                                    <div className="relative">
                                        <select
                                            name="why"
                                            className="w-full h-9 text-[12px] min-[500px]:pl-4 xl:pl-4 p-1 border placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none rounded-full"
                                            value={formData.why}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" className="bg-[#e9e8e9] text-[#243460]">Select Need</option>
                                            {crowdfundingcategory.map((category, index) => (
                                                <option key={index} value={category.text} className="bg-[#e9e8e9] text-[#243460]">
                                                    {category.text}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <FaArrowCircleDown className="h-6 w-6 text-white" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {errors.mobile && (
                            <p className="text-red-500 text-xs">{errors.mobile}</p>
                        )}
                        {/* Submit Button */}
                        <div className="flex pt-2 justify-center items-center w-full min-[800px]:pt-4 xl:pt-4">
                            <button
                                type="submit"
                                className="bg-blue-600 rounded-full p-2 border border-[#243460] font-sans shadow-2xl px-4 text-white text-[14px] font-bold"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit Your Request"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Mobile View */}
            <div className="px-2 lg:hidden block">
                {/* Main Banner */}
                <div className="w-full h-auto rounded-[15px] mb-4">
                    <Image
                        src="https://res.cloudinary.com/dwsc0vedb/image/upload/v1743653972/37_nf0139.png"
                        width={1400}
                        height={400}
                        className="w-full rounded-[10px] h-[180px]"
                        alt="AarogyaDhan Banner"
                    />
                </div>

                {/* Information Section - Updated for side by side layout */}
                <div className="flex flex-col items-center justify-center space-y-4 mt-4 px-2">
                    <div className="flex flex-row justify-between items-center w-full gap-4">
                        {/* First Image */}
                        <div className="flex-1 flex justify-center">
                            <Image
                                src="https://res.cloudinary.com/dnckhli5u/image/upload/v1726913368/aarogya%20aadhar/ovpb7nxpmz0ex0jvvkiv.png"
                                width={200}
                                height={100}
                                alt="AarogyaDhan"
                                className="h-auto w-full max-w-[140px] object-contain"
                            />
                        </div>

                        {/* Second Image */}
                        <div className="flex-1 flex justify-center">
                            <Image
                                src="https://res.cloudinary.com/dnckhli5u/image/upload/v1724434610/aarogya%20aadhar/rkxgmlsekzevvodkpyjz.png"
                                width={250}
                                height={120}
                                alt="Platform Info"
                                className="h-auto w-full max-w-[160px] object-contain"
                            />
                        </div>
                    </div>

                    <p className="text-center text-sm font-semibold text-[#5271FF] px-2">
                        <span className="text-black">AarogyaDhan</span> is an online platform connecting donors and donees. No financial return, including debt or equity securities, interest, dividend, profit share, rewards in cash, is provided to individuals making payments on the Platform.
                    </p>
                </div>

                {/* Request a Call Back Section */}
                <div className="justify-center text-center pt-4">
                    <h1 className="text-[15px] text-[#5271FF] font-extrabold">
                        Request a Call Back
                    </h1>
                    <p className="text-[#5271FF] text-[10px]">Fill the Details</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-2 items-center">
                        {/* Name */}
                        <div className="w-full">
                            <h1 className="text-[#243460] font-bold text-[10px] ml-2">
                                Full Name*
                            </h1>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full h-8 text-[9px] p-1 pl-2 border rounded-[40px] placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none"
                                placeholder="Enter Your Full Name"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name}</p>
                            )}
                        </div>

                        {/* Mobile */}
                        <div className="w-full">
                            <h1 className="text-[#243460] font-bold text-[10px] ml-2">
                                Mobile Number*
                            </h1>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full h-8 text-[9px] p-1 pl-2 border rounded-[40px] placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none"
                                placeholder="Enter 10-Digit Mobile Number"
                                required
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-xs">{errors.mobile}</p>
                            )}
                        </div>

                        {/* Estimated Cost */}
                        <div className="w-full relative">
                            <h1 className="text-[#243460] font-bold text-[10px] ml-2">
                                Estimated Cost*
                            </h1>
                            <div className="relative">
                                <select
                                    name="cost"
                                    className="w-full h-8 text-[9px] p-1 pl-2 border rounded-[40px] placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none"
                                    value={formData.cost}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" className="bg-[#e9e8e9] text-[#243460]">Select Cost Range</option>
                                    <option value="1 Lakh to 2 Lakh" className="bg-[#e9e8e9] text-[#243460]">1 Lakh to 2 Lakh</option>
                                    <option value="2 Lakh to 3 Lakh" className="bg-[#e9e8e9] text-[#243460]">2 Lakh to 3 Lakh</option>
                                    <option value="3 Lakh to 5 Lakh" className="bg-[#e9e8e9] text-[#243460]">3 Lakh to 5 Lakh</option>
                                    <option value="5 Lakh to 8 Lakh" className="bg-[#e9e8e9] text-[#243460]">5 Lakh to 8 Lakh</option>
                                    <option value="8 Lakh to 10 Lakh" className="bg-[#e9e8e9] text-[#243460]">8 Lakh to 10 Lakh</option>
                                    <option value="10 Lakh to 15 Lakh" className="bg-[#e9e8e9] text-[#243460]">10 Lakh to 15 Lakh</option>
                                    <option value="15 Lakh to 20 Lakh" className="bg-[#e9e8e9] text-[#243460]">15 Lakh to 20 Lakh</option>
                                    <option value="20 Lakh to 30 Lakh" className="bg-[#e9e8e9] text-[#243460]">20 Lakh to 30 Lakh</option>
                                    <option value="30 Lakh Above" className="bg-[#e9e8e9] text-[#243460]">30 Lakh Above</option>
                                </select>
                                <span className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <FaArrowCircleDown className="h-6 w-6 text-white" />
                                </span>
                            </div>
                        </div>

                        {/* Fundraising Reason */}
                        <div className="w-full relative">
                            <h1 className="text-[#243460] font-bold text-[10px] ml-2">
                                Why are you Fundraising?*
                            </h1>
                            <div className="relative">
                                <select
                                    name="why"
                                    className="w-full h-8 text-[9px] p-1 pl-2 border rounded-[40px] placeholder:text-white text-white bg-[#5271FF] border-[#453565] appearance-none"
                                    value={formData.why}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" className="bg-[#e9e8e9] text-[#243460]">Select Need</option>
                                    {crowdfundingcategory.map((category, index) => (
                                        <option key={index} value={category.text} className="bg-[#e9e8e9] text-[#243460]">
                                            {category.text}
                                        </option>
                                    ))}
                                </select>
                                <span className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <FaArrowCircleDown className="h-6 w-6 text-white" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex pt-2 items-center mt-2 justify-center w-full mb-2">
                        <button
                            type="submit"
                            className="bg-[#5271FF] rounded-full px-4 py-2 shadow-2xl text-white text-[10px] font-bold flex items-center space-x-2"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Your Request"}
                        </button>
                    </div>
                </form>
            </div>
            </section>
        </>
    );
};

export default ArrogyaDhan;