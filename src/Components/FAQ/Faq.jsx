import React from "react";

const Faq = () => {
  const faqData = [
    {
      question: "How can I report a lost item?",
      answer:
        "You can report a lost item by clicking on the “Post Lost Item” button and filling out the form with the necessary details including title, description, location, and date.",
    },
    {
      question: "How do I know if my item is found?",
      answer:
        "If someone finds your item and recovers it, it will appear in the “Recovered Items” section. You will also receive a notification if your email is associated with the item.",
    },
    {
      question: "Can I edit or delete my lost item post?",
      answer:
        "Yes, go to “My Items” section, and from there you can edit or delete any of your posted items.",
    },
    {
      question: "Who can recover a lost item?",
      answer:
        "Anyone who finds a lost item can report it as recovered by filling out the “Recover Item” form, including their name, email, location, and recovery date.",
    },
    {
      question: "Is my personal information safe on this site?",
      answer:
        "Yes, we value your privacy. Your information is only used to contact you regarding your posts and is not shared with any third party.",
    },
  ];

  return (
    <div>
      <h2 class="font-bold text-center text-5xl my-10 text-[#00BCFF]">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border border-gray-300"
        >
          <div className="collapse-title font-semibold">
            {index + 1}. {faq.question}
          </div>
          <div className="collapse-content text-sm px-5">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
