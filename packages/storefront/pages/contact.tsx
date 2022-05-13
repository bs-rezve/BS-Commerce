import type { NextPage } from "next";
import { Input, Textarea } from "marketplace";

import PageTitle from "../components/pageTitle";

import styles from "../styles/Contact.module.css";
import Container from "../components/container";

const Contact: NextPage = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <div className={styles.map_area}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.04133157134!2d90.39788591496837!3d23.781542484574032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1651824430053!5m2!1sen!2sbd"
          width="100%"
          height="460"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.contact_area}>
        <Container>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className={styles.contact_message}>
                <h3>Contact Us</h3>
                <p>Your content here</p>
                <ul>
                  <li>
                    <i className="bi bi-house-door-fill"></i> Address : No 40
                    Baria Sreet 133/2 NewYork City
                  </li>
                  <li>
                    <i className="bi bi-envelope"></i> E-mail:
                    info@yourdomain.com
                  </li>
                  <li>
                    <i className="bi bi-telephone"></i> +88013245657
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className={styles.contact_message}>
                <h3>Tell Us Your Project</h3>
                <form method="post" action="/">
                  <Input label="Name" value="" type="text" name="name" />
                  <Input label="Email" value="" type="email" name="email" />
                  <Input label="Subject" value="" type="text" name="subject" />
                  <Textarea label="Message" value="" name="message" />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
