import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const companyArr: Array<string> = [
  "About",
  "Company",
  "Pricing",
  "Referral programme",
  "Careers",
  "Zerodha.tech",
  "Press & media",
  "Zerodha Cares (CSR)",
];

const SupportArr: Array<string> = [
  "Contact us",
  "Support portal",
  "Z-Connect blog",
  "List of charges",
  "Downloads & resources",
  "Videos",
  "Market overview",
  "How to file a complaint?",
  "Status of your complaints",
];

const accountArr: Array<string> = ["Open an account", "Fund transfer"];
const footerArr: Array<string> = [
  "NSE",
  "BSE",
  "MCX",
  "Terms & conditions",
  "Policies & procedures",
  "Privacy policy",
  "Disclosure",
  "For investor's attention",
  "Investor charter",
];

const Footer = () => {
  return (
    <div className="w-full h-fit pt-[2rem] bg-[#fbfbfb]">
      <div className="footer-content w-[70%] h-fit m-auto px-[7rem]">
        <div className="footer-grid grid grid-cols-4 w-full h-[26rem] gap-[2rem]">
          <div className="w-full h-fit flex gap-[1.7rem] flex-col">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              className="w-[10rem]"
              alt=""
            />
            <div className="text-sm">
              © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </div>
            <div className="w-full h-fit flex flex-row flex-wrap gap-[1rem] text-xl text-[#515050] ">
              <FaXTwitter className="hover:text-[#387fd1] cursor-pointer" />
              <IoLogoFacebook className="hover:text-[#387fd1] cursor-pointer" />
              <FaInstagram className="hover:text-[#387fd1] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#387fd1] cursor-pointer" />
              <FaTelegram className="hover:text-[#387fd1] cursor-pointer" />
              <FaYoutube className="hover:text-[#387fd1] cursor-pointer" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-[1.7rem]">
            <h1 className="text-xl font-[500]">Company</h1>
            <div className="w-full h-fit flex flex-col flex-wrap gap-3 text-[#515050] font-[500]">
              {companyArr.map((e) => (
                <p className="hover:text-[#387fd1] cursor-pointer">{e}</p>
              ))}
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-[1.7rem]">
            <h1 className="text-xl font-[500]">Support</h1>
            <div className="w-full h-fit flex flex-col flex-wrap gap-3 text-[#515050] font-[500]">
              {SupportArr.map((e) => (
                <p className="hover:text-[#387fd1] cursor-pointer">{e}</p>
              ))}
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-[1.7rem]">
            <h1 className="text-xl font-[500]">Account</h1>
            <div className="w-full h-fit flex flex-col flex-wrap gap-3 text-[#515050] font-[500]">
              {accountArr.map((e) => (
                <p className="hover:text-[#387fd1] cursor-pointer">{e}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="left-part w-full h-fit flex flex-col flex-wrap justify-center gap-[1rem]">
          <div className="text-xs leading-relaxed text-[#808080]">
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            - SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <span className="text-[#387fd1] hover:text-[#313131]">
              complaints@zerodha.com
            </span>
            , for DP related to{" "}
            <span className="text-[#387fd1] hover:text-[#313131]">
              dp@zerodha.com
            </span>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </div>
          <div className="text-xs leading-relaxed text-[#808080]">
            Procedure to file a complaint on{" "}
            <span className="text-[#387fd1] hover:text-[#313131]">
              SEBI SCORES
            </span>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </div>
          <div className="text-xs flex flex-row flex-wrap">
            <button className="text-[#387fd1] hover:text-[#313131] pr-2 border-r border-[#808080]">
              Smart Online Dispute Resolution
            </button>
            <button className="text-[#387fd1] hover:text-[#313131] pl-2">
              Grievances Redressal Mechanism
            </button>
          </div>
          <div className="text-xs leading-relaxed text-[#808080]">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </div>
          <div className="text-xs leading-relaxed text-[#808080]">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </div>
          <div className="text-xs leading-relaxed text-[#808080]">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <span className="text-[#387fd1] hover:text-[#313131]">
              create a ticket here.
            </span>
          </div>
          <div className="w-full h-fit flex flex-row justify-center items-center flex-wrap gap-5 py-[1rem]">
            {footerArr.map((e) => (
              <p className="text-sm text-[#808080]">{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
