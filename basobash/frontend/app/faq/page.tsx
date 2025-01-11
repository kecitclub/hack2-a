"use client";

const faq = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center text-[#f63e3f] mb-10 mt-5 md:mb-16 md:mt-0">
        Frequently Asked Questions (faq)
      </h1>
      <div
        className="max-w-[800px] mx-auto text-black text-left space-y-10 "
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        <div>
          <h2 className="text-xl font-semibold">1. What is Basobas?</h2>
          <p>
            Basobas is a platform designed to help individuals find rental rooms
            and shared living spaces easily and efficiently.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            2. How do I list my property on Basobas?
          </h2>
          <p>
            To list your property, sign up as a user, navigate to the "List a
            Room" section, and fill in the required details about your property.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            3. Is there a fee to use Basobas?
          </h2>
          <p>
            Basic listing and searching features are free. We also offer premium
            options for highlighted or prioritized listings to increase
            visibility.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            4. How do I contact a landlord or tenant?
          </h2>
          <p>
            You can contact landlords or tenants directly through the contact
            details provided in each listing or by using the platform's
            messaging feature.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            5. How secure is my information on Basobas?
          </h2>
          <p>
            We take your privacy seriously. Basobas implements security measures
            to protect your personal information. Please refer to our Privacy
            Policy for more details.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            6. Can I use Basobas on my mobile device?
          </h2>
          <p>
            Yes, Basobas is mobile-friendly and can be accessed from any device
            with an internet connection.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            7. What if I encounter a problem or need support?
          </h2>
          <p>
            If you need assistance, you can contact our support team through the
            "Contact Us" page or by sending an email to support@Basobas.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default faq;
