
const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 ">
            <title>Contact | Gadget Heaven</title>
            <h2 className="font-medium text-3xl">Contact Us</h2>
            <div className="lg:flex">
                <div className="flex-1/2 p-5 lg:pl-0">
                    <p>
                        Have questions, feedback, or need assistance? We're here to help! Reach out to us for any inquiries about our latest gadgets, orders, or support. Fill out the form below or contact us directly—we’d love to hear from you!
                    </p>
                </div>

                <div className="flex-1/2 p-5">
                    <p className="text-gray-600">Have a question? Reach out to us.</p>

                    <div className="space-y-3">
                        <input type="text" placeholder="Your Name" className="input w-full border-0" />
                        <input type="text" placeholder="Email" className="input w-full border-0" />
                        <textarea className="textarea w-full border-0" placeholder="Message"></textarea>

                        <button className="btn btn-info">Submit</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;