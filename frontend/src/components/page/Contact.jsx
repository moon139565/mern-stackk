const Contact = () => {
  return (
    <div className="py-9">
      <h2 className=" text-center text-3xl font-medium my-6 md:font-bold">Contact Page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2152.253796934739!2d89.17085438123658!3d24.875971308572407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5964bd3fbd43%3A0xdcbb1b19b9c669a4!2sHanif%20enterprise!5e0!3m2!1sen!2sbd!4v1693199158377!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" w-11/12 rounded m-auto"
      ></iframe>

      <div className=" w-11/12 ">
        <div className="mb-3">
          <form
            action="https://formspree.io/f/xrgwqvzp"
            method="post"
            className="flex flex-col md:w-2/4 m-auto my-6 bg-white"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              value={""}
              required
              autoComplete="off"
              className="h-10 my-5 bg-slate-200 mx-8 rounded"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={""}
              required
              autoComplete="off"
              className="h-10 my-5 bg-slate-200 mx-8 rounded"
            />
            <textarea
              name="Message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              className="my-5 bg-slate-200 mx-8 rounded"
            ></textarea>
            <input type="submit" value="Submit" className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 duration-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
